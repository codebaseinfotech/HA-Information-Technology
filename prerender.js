import puppeteer from 'puppeteer';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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
      const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
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

        // Load the page and wait for the root div to have content (or network idle)
        await page.goto(`http://localhost:${PORTHOST}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
        
        // Wait specifically for React to mount and helmet to update
        await page.waitForFunction('document.getElementById("root").hasChildNodes()');
        await new Promise(r => setTimeout(r, 1000)); // give 1 extra second for helmet tags
        
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
      console.log('Prerendering completed.');
    } catch (error) {
      console.error('Error during prerendering:', error);
    } finally {
      server.close();
      process.exit(0);
    }
  });
}

prerender();
