import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { email } = req.body;

    // Validate required field
    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
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

        // Admin notification email
        const adminMailOptions = {
            from: `"Hamed Alattas Technology" <${process.env.EMAIL_USER}>`,
            to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
            subject: '📰 New Newsletter Subscription',
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { background: linear-gradient(135deg, #10B981 0%, #059669 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                        .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
                        .field { margin-bottom: 20px; padding: 15px; background: white; border-left: 4px solid #10B981; border-radius: 5px; }
                        .label { font-weight: bold; color: #10B981; margin-bottom: 5px; }
                        .value { color: #4b5563; font-size: 16px; }
                        .footer { text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 12px; }
                        .badge { display: inline-block; background: white; color: #10B981; padding: 5px 15px; border-radius: 20px; font-size: 12px; margin-top: 10px; font-weight: bold; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1 style="margin: 0;">📰 New Newsletter Subscriber!</h1>
                            <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone joined your mailing list</p>
                            <span class="badge">New Subscriber</span>
                        </div>
                        <div class="content">
                            <div class="field">
                                <div class="label">📧 Email Address</div>
                                <div class="value">${email}</div>
                            </div>
                            <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 20px;">
                                <p style="margin: 0; color: #6b7280; font-size: 14px;">
                                    <strong>Action Required:</strong> Add this email to your newsletter mailing list.
                                </p>
                            </div>
                        </div>
                        <div class="footer">
                            <p>This email was sent from the Newsletter subscription form.</p>
                            <p>Subscribed on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        };

        // User welcome email
        const userMailOptions = {
            from: `"Hamed Alattas Technology" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: '🎉 Welcome to Hamed Alattas Technology Newsletter!',
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { background: linear-gradient(135deg, #10B981 0%, #059669 100%); color: white; padding: 40px; text-align: center; border-radius: 10px 10px 0 0; }
                        .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
                        .welcome-box { background: white; padding: 25px; border-left: 4px solid #10B981; border-radius: 5px; margin: 20px 0; }
                        .benefits { background: white; padding: 20px; border-radius: 5px; margin: 20px 0; }
                        .benefit-item { display: flex; align-items: start; margin: 15px 0; }
                        .benefit-icon { color: #10B981; margin-right: 10px; font-size: 20px; }
                        .footer { text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 12px; border-top: 1px solid #e5e7eb; }
                        .social-links { text-align: center; margin: 20px 0; }
                        .social-links a { display: inline-block; margin: 0 10px; color: #1A3C8B; text-decoration: none; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1 style="margin: 0; font-size: 32px;">🎉 Welcome!</h1>
                            <p style="margin: 15px 0 0 0; opacity: 0.9; font-size: 18px;">You're now part of our community</p>
                        </div>
                        <div class="content">
                            <div class="welcome-box">
                                <h2 style="margin-top: 0; color: #10B981;">Thank You for Subscribing!</h2>
                                <p style="margin: 0;">We're excited to have you join the <strong>Hamed Alattas Technology</strong> newsletter community!</p>
                                <p style="margin: 15px 0 0 0;">You'll now receive:</p>
                            </div>
                            
                            <div class="benefits">
                                <div class="benefit-item">
                                    <span class="benefit-icon">✨</span>
                                    <div>
                                        <strong>Latest Updates</strong><br>
                                        <span style="color: #6b7280; font-size: 14px;">Stay informed about our newest services and solutions</span>
                                    </div>
                                </div>
                                <div class="benefit-item">
                                    <span class="benefit-icon">💡</span>
                                    <div>
                                        <strong>Industry Insights</strong><br>
                                        <span style="color: #6b7280; font-size: 14px;">Expert tips and trends in IT and software development</span>
                                    </div>
                                </div>
                                <div class="benefit-item">
                                    <span class="benefit-icon">🎁</span>
                                    <div>
                                        <strong>Exclusive Offers</strong><br>
                                        <span style="color: #6b7280; font-size: 14px;">Special promotions and early access to new features</span>
                                    </div>
                                </div>
                                <div class="benefit-item">
                                    <span class="benefit-icon">📚</span>
                                    <div>
                                        <strong>Resources & Guides</strong><br>
                                        <span style="color: #6b7280; font-size: 14px;">Helpful content to grow your business</span>
                                    </div>
                                </div>
                            </div>

                            <div style="background: linear-gradient(135deg, #1A3C8B 0%, #2563eb 100%); color: white; padding: 20px; border-radius: 10px; text-align: center; margin: 20px 0;">
                                <h3 style="margin: 0 0 10px 0;">Explore Our Solutions</h3>
                                <p style="margin: 0 0 20px 0; opacity: 0.9;">Discover how we can help transform your business</p>
                                <a href="https://ha-information-technology.vercel.app/solutions" style="display: inline-block; background-color: white; color: #1A3C8B; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold;">View Solutions</a>
                            </div>

                            <div class="social-links">
                                <p style="color: #6b7280; margin-bottom: 15px;">Follow us on social media:</p>
                                <a href="#" style="margin: 0 8px;">Facebook</a> |
                                <a href="#" style="margin: 0 8px;">LinkedIn</a> |
                                <a href="#" style="margin: 0 8px;">Twitter</a> |
                                <a href="#" style="margin: 0 8px;">Instagram</a>
                            </div>
                        </div>
                        <div class="footer">
                            <p><strong>Hamed Alattas Technology</strong></p>
                            <p>Dubai, UAE | India</p>
                            <p style="margin-top: 15px; font-size: 11px;">
                                You're receiving this email because you subscribed to our newsletter.<br>
                                To unsubscribe, please contact us at info@alattastech.com
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
            message: 'Successfully subscribed to newsletter!'
        });

    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to subscribe. Please try again later.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
}
