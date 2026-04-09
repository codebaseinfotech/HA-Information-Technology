import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORTHOST = 3005;
const routes = [
  '/',
  '/about',
  '/services',
  '/solutions',
  '/contact',
  '/services/software-development',
  '/services/website-development',
  '/services/mobile-app',
  '/services/mobile-app-development-dubai',
  '/services/ecommerce',
  '/services/it-infrastructure',
  '/services/access-control',
  '/services/pabx',
  '/services/digital-marketing',
  '/careers',
  '/our-partner',
  '/affiliates'
];

// Find Chrome executable on local machine
function getLocalChromePath() {
  const paths = [
    // Windows
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    process.env.LOCALAPPDATA + '\\Google\\Chrome\\Application\\chrome.exe',
    // macOS
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    // Linux
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
  ];
  for (const p of paths) {
    try {
      if (fs.existsSync(p)) return p;
    } catch (e) {}
  }
  return null;
}

async function prerender() {
  const app = express();
  app.use(express.static(path.join(__dirname, 'dist')));
  
  // Catch all for SPA
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });

  const server = app.listen(PORTHOST, async () => {
    console.log(`Static server listening on port ${PORTHOST}`);
    
    try {
      const isVercel = process.env.VERCEL === '1' || process.env.CI === 'true';
      console.log(`Environment: ${isVercel ? 'CI/VERCEL' : 'LOCAL'}`);

      let executablePath;
      let launchArgs;

      if (isVercel) {
        // On Vercel/CI: use @sparticuz/chromium which bundles its own binary
        executablePath = await chromium.executablePath();
        launchArgs = chromium.args;
        console.log(`Using @sparticuz/chromium at: ${executablePath}`);
      } else {
        // On local machine: use the installed Chrome browser
        executablePath = getLocalChromePath();
        launchArgs = ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security'];
        console.log(`Using local Chrome at: ${executablePath}`);
      }

      if (!executablePath) {
        console.error('No Chrome/Chromium executable found! Skipping prerender.');
        server.close();
        process.exit(0);
      }

      const browser = await puppeteer.launch({
        args: launchArgs,
        executablePath: executablePath,
        headless: isVercel ? chromium.headless : true,
      });

      for (const route of routes) {
        console.log(`Prerendering ${route}...`);
        const page = await browser.newPage();
        
        // Disable unnecessary resources
        await page.setRequestInterception(true);
        page.on('request', (req) => {
          if (['image', 'stylesheet', 'font'].includes(req.resourceType())) {
            req.abort();
          } else {
            req.continue();
          }
        });

        // Load the page and wait for the root div to have content
        await page.goto(`http://localhost:${PORTHOST}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
        
        // Wait for React to mount and helmet to update
        await page.waitForFunction('document.getElementById("root").hasChildNodes()');
        await new Promise(r => setTimeout(r, 1000));
        
        // Extract HTML
        const html = await page.content();
        
        // Determine file path
        let routePath = route === '/' ? '/index.html' : `${route}/index.html`;
        if (route !== '/' && !fs.existsSync(path.join(__dirname, 'dist', route))) {
          fs.mkdirSync(path.join(__dirname, 'dist', route), { recursive: true });
        }
        
        fs.writeFileSync(path.join(__dirname, 'dist', routePath), html);
        console.log(`Saved ${routePath}`);
        await page.close();
      }

      await browser.close();
      console.log('Prerendering completed successfully!');
    } catch (error) {
      console.error('Error during prerendering:', error);
      server.close();
      process.exit(1);
    } finally {
      server.close();
      process.exit(0);
    }
  });
}

prerender();
