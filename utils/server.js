import express from 'express';
import dotenv from 'dotenv';
import sendEmailHandler from '../api/send-email.js';
import sendPartnerEmailHandler from '../api/send-partner-email.js';

dotenv.config();

const app = express();
app.use(express.json());

// Contact form email endpoint
app.post('/api/send-email', async (req, res) => {
    await sendEmailHandler(req, res);
});

// Partner/Affiliate form email endpoint
app.post('/api/send-partner-email', async (req, res) => {
    await sendPartnerEmailHandler(req, res);
});

const PORT = process.env.API_PORT || 3001;
app.listen(PORT, () => {
    console.log(`✅ API Server running on http://localhost:${PORT}`);
});

export default app;
