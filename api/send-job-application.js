import nodemailer from 'nodemailer';
import multer from 'multer';

// Disable Vercel's default body parser to allow multer to consume the raw multipart stream
export const config = {
    api: {
        bodyParser: false,
    },
};

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase();
        if (fileName.endsWith('.pdf') || fileName.endsWith('.doc') || fileName.endsWith('.docx')) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only PDF and Word documents are allowed.'), false);
        }
    }
});

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        // Run multer middleware to parse the multipart/form-data request
        await runMiddleware(req, res, upload.single('resume'));

        const { fullName, email, contactNo, location, source, coverLetter, jobRole, gender, experience } = req.body;
        const file = req.file;

        if (!fullName || !email || !jobRole) {
            return res.status(400).json({ message: 'Full name, email, and job role are required' });
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // use STARTTLS
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // 1. Admin Email (Application Data + Attached CV)
        const adminHtml = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #1a1a2e 0%, #1A3C8B 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
                    .field { margin-bottom: 20px; padding: 15px; background: white; border-left: 4px solid #10B981; border-radius: 5px; }
                    .label { font-weight: bold; color: #1a1a2e; margin-bottom: 5px; }
                    .value { color: #4b5563; }
                    .footer { text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 12px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1 style="margin: 0;">📄 New Job Application</h1>
                        <p style="margin: 10px 0 0 0; opacity: 0.9;">Role: ${jobRole}</p>
                    </div>
                    <div class="content">
                        <div class="field">
                            <div class="label">👤 Applicant Name</div>
                            <div class="value">${fullName}</div>
                        </div>
                        <div class="field">
                            <div class="label">📧 Email</div>
                            <div class="value">${email}</div>
                        </div>
                        <div class="field">
                            <div class="label">📞 Contact Number</div>
                            <div class="value">${contactNo || 'N/A'}</div>
                        </div>
                        <div class="field">
                            <div class="label">📍 Location</div>
                            <div class="value">${location || 'N/A'}</div>
                        </div>
                        <div class="field">
                            <div class="label">💼 Experience</div>
                            <div class="value">${experience || 'N/A'}</div>
                        </div>
                        <div class="field">
                            <div class="label">⚧ Gender</div>
                            <div class="value">${gender || 'N/A'}</div>
                        </div>
                        <div class="field">
                            <div class="label">🗣️ Heard About Us Via</div>
                            <div class="value">${source || 'N/A'}</div>
                        </div>
                        <div class="field">
                            <div class="label">📝 Cover Letter</div>
                            <div class="value">${coverLetter ? coverLetter.replace(/\\n/g, '<br>') : 'N/A'}</div>
                        </div>
                    </div>
                    <div class="footer">
                        <p>Hamed Alattas Technology - HR Automated System</p>
                    </div>
                </div>
            </body>
            </html>
        `;

        const adminMailOptions = {
            from: `"Hamed Alattas Technology Careers" <${process.env.EMAIL_USER}>`,
            to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
            subject: `🔔 New Job Application: ${fullName} - ${jobRole}`,
            html: adminHtml,
            attachments: file ? [
                {
                    filename: file.originalname,
                    content: file.buffer,
                }
            ] : []
        };

        // 2. Applicant Email (Thank You structured like Image 1)
        const applicantHtml = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333333; margin: 0; padding: 0; }
                    .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
                    .logo-container { text-align: center; margin-bottom: 30px; border-bottom: 1px solid #e5e7eb; padding-bottom: 30px; }
                    .title { text-align: center; font-size: 18px; font-weight: bold; margin-bottom: 40px; color: #111111; }
                    .greeting { margin-bottom: 25px; }
                    .greeting strong { text-transform: uppercase; }
                    .paragraph { margin-bottom: 25px; color: #444444; }
                    .footer-salutation { margin-top: 50px; margin-bottom: 40px; }
                    .brand-name { font-weight: bold; color: #111111; }
                    .footer-bottom { border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center; display: flex; align-items: center; justify-content: center; color: #666666; font-size: 14px; }
                    .powered-by { color: #888888; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="logo-container">
                        <!-- We use a styled text logo for Hamed Alattas Technology to match the minimalist vibe -->
                        <h2 style="margin: 0; color: #1A3C8B; font-size: 28px; letter-spacing: -0.5px;">Hamed Alattas Technology</h2>
                    </div>
                    
                    <div class="title">
                        Application Received - Thank you!
                    </div>

                    <div class="greeting">
                        Hi <strong>${fullName}</strong>,
                    </div>

                    <div class="paragraph">
                        Thank you for applying to <span class="brand-name">Hamed Alattas Technology</span> for the role of <strong>${jobRole}</strong> through our career portal. This email is to confirm that we have received your application.
                    </div>

                    <div class="paragraph">
                        We appreciate your interest in joining our team and will carefully review your qualifications & experience. If your profile matches our requirements, we will reach out to you for further evaluation.
                    </div>

                    <div class="paragraph">
                        Please note that due to the high volume of applications we receive, it may take some time to process them all. We kindly ask for your patience during this process.
                    </div>

                    <div class="footer-salutation">
                        Best Regards,<br><br>
                        <span class="brand-name">Hamed Alattas Technology</span> Hiring Team
                    </div>

                    <div class="footer-bottom">
                        <span class="powered-by">Powered by </span>
                        <strong style="color: #6366f1; margin-left: 5px; font-size: 16px;">Hamed Alattas Technology ATS</strong>
                    </div>
                </div>
            </body>
            </html>
        `;

        const applicantMailOptions = {
            from: `"Hamed Alattas Technology" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Application Received - ${jobRole}`,
            html: applicantHtml,
        };

        // Send both emails
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(applicantMailOptions),
        ]);

        return res.status(200).json({
            success: true,
            message: 'Application submitted successfully!'
        });

    } catch (error) {
        console.error('Job application submission error:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to submit application. Please try again later.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
}
