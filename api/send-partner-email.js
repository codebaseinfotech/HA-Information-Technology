import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const {
        companyName,
        website,
        firstName,
        lastName,
        businessRegistration,
        employees,
        email,
        phone,
        country,
        expertise,
        address,
        partnerType // 'partner' or 'affiliate'
    } = req.body;

    // Validate required fields
    if (!companyName || !firstName || !lastName || !email || !phone || !country) {
        return res.status(400).json({ message: 'Required fields are missing' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email address' });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const partnerTypeLabel = partnerType === 'affiliate' ? 'Affiliate' : 'Partner';

        // Admin email
        const adminMailOptions = {
            from: `"Hamed Alattas Technology" <${process.env.EMAIL_USER}>`,
            to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
            subject: `🤝 New ${partnerTypeLabel} Application - ${companyName}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { background: linear-gradient(135deg, #1A3C8B 0%, #2563eb 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                        .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
                        .section { margin-bottom: 25px; }
                        .section-title { font-size: 18px; font-weight: bold; color: #1A3C8B; margin-bottom: 15px; border-bottom: 2px solid #1A3C8B; padding-bottom: 5px; }
                        .field { margin-bottom: 15px; padding: 12px; background: white; border-left: 4px solid #10B981; border-radius: 5px; }
                        .label { font-weight: bold; color: #1A3C8B; margin-bottom: 5px; font-size: 14px; }
                        .value { color: #4b5563; font-size: 15px; }
                        .footer { text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 12px; }
                        .badge { display: inline-block; background: #10B981; color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-bottom: 10px; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <div class="badge">${partnerTypeLabel.toUpperCase()} APPLICATION</div>
                            <h1 style="margin: 10px 0 0 0;">🤝 New ${partnerTypeLabel} Application</h1>
                            <p style="margin: 10px 0 0 0; opacity: 0.9;">Hamed Alattas Technology</p>
                        </div>
                        <div class="content">
                            <div class="section">
                                <div class="section-title">📋 Company Information</div>
                                <div class="field">
                                    <div class="label">Company Name</div>
                                    <div class="value">${companyName}</div>
                                </div>
                                ${website ? `
                                <div class="field">
                                    <div class="label">Website</div>
                                    <div class="value"><a href="${website}" target="_blank">${website}</a></div>
                                </div>
                                ` : ''}
                                ${businessRegistration ? `
                                <div class="field">
                                    <div class="label">Business Registration</div>
                                    <div class="value">${businessRegistration}</div>
                                </div>
                                ` : ''}
                                ${employees ? `
                                <div class="field">
                                    <div class="label">Number of Employees</div>
                                    <div class="value">${employees}</div>
                                </div>
                                ` : ''}
                            </div>

                            <div class="section">
                                <div class="section-title">👤 Contact Person</div>
                                <div class="field">
                                    <div class="label">Name</div>
                                    <div class="value">${firstName} ${lastName}</div>
                                </div>
                                <div class="field">
                                    <div class="label">Email</div>
                                    <div class="value"><a href="mailto:${email}">${email}</a></div>
                                </div>
                                <div class="field">
                                    <div class="label">Phone</div>
                                    <div class="value">${phone}</div>
                                </div>
                                <div class="field">
                                    <div class="label">Country</div>
                                    <div class="value">${country}</div>
                                </div>
                            </div>

                            ${expertise ? `
                            <div class="section">
                                <div class="section-title">🎯 Expertise/Interest</div>
                                <div class="field">
                                    <div class="value">${expertise}</div>
                                </div>
                            </div>
                            ` : ''}

                            ${address ? `
                            <div class="section">
                                <div class="section-title">📍 Address</div>
                                <div class="field">
                                    <div class="value">${address}</div>
                                </div>
                            </div>
                            ` : ''}
                        </div>
                        <div class="footer">
                            <p>This ${partnerTypeLabel.toLowerCase()} application was submitted from Hamed Alattas Technology website.</p>
                            <p>Received on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        };

        // User confirmation email
        const userMailOptions = {
            from: `"Hamed Alattas Technology" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `✅ Thank You for Your ${partnerTypeLabel} Application - Hamed Alattas Technology`,
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
                        .footer { text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 12px; border-top: 1px solid #e5e7eb; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1 style="margin: 0;">✅ Application Received!</h1>
                            <p style="margin: 10px 0 0 0; opacity: 0.9;">Thank You for Applying</p>
                        </div>
                        <div class="content">
                            <div class="greeting">
                                Dear ${firstName} ${lastName},
                            </div>
                            <div class="message-box">
                                <p style="margin: 0;">Thank you for your interest in becoming a <strong>${partnerTypeLabel}</strong> with <strong>Hamed Alattas Technology</strong>!</p>
                                <p style="margin: 15px 0 0 0;">We have successfully received your application for <strong>${companyName}</strong>. Our partnership team will carefully review your submission and get back to you within <strong>3-5 business days</strong>.</p>
                            </div>
                            
                            <div class="details">
                                <h3 style="margin-top: 0; color: #1A3C8B;">📋 Your Application Details:</h3>
                                <div class="detail-row">
                                    <span class="label">Company:</span> ${companyName}
                                </div>
                                <div class="detail-row">
                                    <span class="label">Contact Person:</span> ${firstName} ${lastName}
                                </div>
                                <div class="detail-row">
                                    <span class="label">Email:</span> ${email}
                                </div>
                                <div class="detail-row">
                                    <span class="label">Phone:</span> ${phone}
                                </div>
                                <div class="detail-row">
                                    <span class="label">Country:</span> ${country}
                                </div>
                                ${expertise ? `
                                <div class="detail-row">
                                    <span class="label">Expertise:</span> ${expertise}
                                </div>
                                ` : ''}
                            </div>

                            <div class="message-box" style="border-left-color: #1A3C8B;">
                                <p style="margin: 0;"><strong>What Happens Next?</strong></p>
                                <p style="margin: 10px 0 0 0;">Our team will review your application and reach out to discuss partnership opportunities, benefits, and next steps.</p>
                            </div>

                            <div class="cta">
                                <a href="https://alattastech.com" style="display: inline-block; background-color: #1A3C8B; color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold;"><span style="color: #ffffff;">Visit Our Website</span></a>
                            </div>
                        </div>
                        <div class="footer">
                            <p><strong>Hamed Alattas Technology</strong></p>
                            <p>Your Trusted IT Solutions Partner</p>
                            <p style="margin-top: 15px; font-size: 11px;">
                                This is an automated confirmation email. Please do not reply to this email.<br>
                                If you have questions, please contact us through our website.
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
            message: 'Application submitted successfully!'
        });

    } catch (error) {
        console.error('Email sending error:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to submit application. Please try again later.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
}
