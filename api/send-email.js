import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, contact, email, service, message } = req.body;

    // Validate required fields
    if (!name || !contact || !email || !service || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email address' });
    }

    try {
        // Create transporter using SMTP
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // use STARTTLS
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Admin email content
        const adminMailOptions = {
            from: `"Hamed Alattas Technology" <${process.env.EMAIL_USER}>`,
            to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
            subject: '🔔 New Contact Form Submission - Hamed Alattas Technology',
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { background: linear-gradient(135deg, #1A3C8B 0%, #2563eb 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                        .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
                        .field { margin-bottom: 20px; padding: 15px; background: white; border-left: 4px solid #1A3C8B; border-radius: 5px; }
                        .label { font-weight: bold; color: #1A3C8B; margin-bottom: 5px; }
                        .value { color: #4b5563; }
                        .footer { text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 12px; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1 style="margin: 0;">📧 New Contact Form Submission</h1>
                            <p style="margin: 10px 0 0 0; opacity: 0.9;">Hamed Alattas Technology</p>
                        </div>
                        <div class="content">
                            <div class="field">
                                <div class="label">👤 Name</div>
                                <div class="value">${name}</div>
                            </div>
                            <div class="field">
                                <div class="label">📞 Contact Number</div>
                                <div class="value">${contact}</div>
                            </div>
                            <div class="field">
                                <div class="label">📧 Email Address</div>
                                <div class="value">${email}</div>
                            </div>
                            <div class="field">
                                <div class="label">🛠️ Service Interested In</div>
                                <div class="value">${service}</div>
                            </div>
                            <div class="field">
                                <div class="label">💬 Message</div>
                                <div class="value">${message}</div>
                            </div>
                        </div>
                        <div class="footer">
                            <p>This email was sent from the Hamed Alattas Technology contact form.</p>
                            <p>Received on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        };

        // User thank you email content
        const userMailOptions = {
            from: `"Hamed Alattas Technology" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: '✅ Thank You for Contacting Hamed Alattas Technology',
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { background: linear-gradient(135deg, #1A3C8B 0%, #2563eb 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                        .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
                        .greeting { font-size: 18px; color: #1A3C8B; margin-bottom: 20px; }
                        .message-box { background: white; padding: 20px; border-left: 4px solid #10B981; border-radius: 5px; margin: 20px 0; }
                        .details { background: white; padding: 20px; border-radius: 5px; margin: 20px 0; }
                        .detail-row { margin: 10px 0; }
                        .label { font-weight: bold; color: #1A3C8B; }
                        .cta { text-align: center; margin: 30px 0; }
                        .button { 
                            display: inline-block; 
                            background-color: #1A3C8B !important; 
                            color: #ffffff !important; 
                            padding: 12px 30px; 
                            text-decoration: none !important; 
                            border-radius: 25px; 
                            font-weight: bold;
                            mso-padding-alt: 0;
                        }
                        .button span { color: #ffffff !important; }
                        .footer { text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 12px; border-top: 1px solid #e5e7eb; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1 style="margin: 0;">✅ Thank You!</h1>
                            <p style="margin: 10px 0 0 0; opacity: 0.9;">We've Received Your Message</p>
                        </div>
                        <div class="content">
                            <div class="greeting">
                                Dear ${name},
                            </div>
                            <div class="message-box">
                                <p style="margin: 0;">Thank you for reaching out to <strong>Hamed Alattas Technology</strong>!</p>
                                <p style="margin: 15px 0 0 0;">We have successfully received your inquiry regarding <strong>${service}</strong>. Our team will carefully review your message and get back to you within <strong>24-48 hours</strong>.</p>
                            </div>
                            
                            <div class="details">
                                <h3 style="margin-top: 0; color: #1A3C8B;">📋 Your Inquiry Details:</h3>
                                <div class="detail-row">
                                    <span class="label">Service:</span> ${service}
                                </div>
                                <div class="detail-row">
                                    <span class="label">Contact:</span> ${contact}
                                </div>
                                <div class="detail-row">
                                    <span class="label">Email:</span> ${email}
                                </div>
                                <div class="detail-row" style="margin-top: 15px;">
                                    <span class="label">Your Message:</span><br>
                                    <span style="color: #4b5563;">${message}</span>
                                </div>
                            </div>

                            <div class="message-box" style="border-left-color: #1A3C8B;">
                                <p style="margin: 0;"><strong>Need Immediate Assistance?</strong></p>
                                <p style="margin: 10px 0 0 0;">If you have any urgent questions, please feel free to call us directly or visit our office.</p>
                            </div>

                            <div class="cta">
                                <a href="https://ha-information-technology.vercel.app/" style="display: inline-block; background-color: #1A3C8B; color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold;"><span style="color: #ffffff;">Visit Our Website</span></a>
                            </div>
                        </div>
                        <div class="footer">
                            <p><strong>Hamed Alattas Technology</strong></p>
                            <p>Your Trusted IT Solutions Partner</p>
                            <p style="margin-top: 15px; font-size: 11px;">
                                This is an automated confirmation email. Please do not reply to this email.<br>
                                If you did not submit this form, please contact us immediately.
                            </p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        };

        // Send both emails
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userMailOptions),
        ]);

        return res.status(200).json({
            success: true,
            message: 'Emails sent successfully!'
        });

    } catch (error) {
        console.error('Email sending error:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to send email. Please try again later.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
}
