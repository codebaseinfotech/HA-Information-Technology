import express from 'express';
import dotenv from 'dotenv';
import sendEmailHandler from '../api/send-email.js';

dotenv.config();

const app = express();
app.use(express.json());

// Use the same handler as Vercel serverless function
app.post('/api/send-email', async (req, res) => {
    await sendEmailHandler(req, res);
});

const PORT = process.env.API_PORT || 3001;
app.listen(PORT, () => {
    console.log(`✅ API Server running on http://localhost:${PORT}`);
});

export default app;
