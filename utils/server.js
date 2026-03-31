import express from 'express';
import dotenv from 'dotenv';
import sendEmailHandler from '../api/send-email.js';
import sendPartnerEmailHandler from '../api/send-partner-email.js';
import sendFooterContactHandler from '../api/send-footer-contact.js';
import sendNewsletterHandler from '../api/send-newsletter.js';
import sendJobApplicationHandler from '../api/send-job-application.js';

dotenv.config();

const app = express();
app.use(express.json());

// Job application endpoint
app.post('/api/send-job-application', async (req, res) => {
    await sendJobApplicationHandler(req, res);
});

// Contact form email endpoint
app.post('/api/send-email', async (req, res) => {
    await sendEmailHandler(req, res);
});

// Partner/Affiliate form email endpoint
app.post('/api/send-partner-email', async (req, res) => {
    await sendPartnerEmailHandler(req, res);
});

// Footer contact form endpoint
app.post('/api/send-footer-contact', async (req, res) => {
    await sendFooterContactHandler(req, res);
});

// Newsletter subscription endpoint
app.post('/api/send-newsletter', async (req, res) => {
    await sendNewsletterHandler(req, res);
});

const PORT = process.env.API_PORT || 3001;
app.listen(PORT, () => {
    console.log(`✅ API Server running on http://localhost:${PORT}`);
});

export default app;

