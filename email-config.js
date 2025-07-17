const nodemailer = require('nodemailer');
require('dotenv').config();

// Email configuration
const emailConfig = {
  // Gmail SMTP settings
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
};

// Create transporter
const transporter = nodemailer.createTransport(emailConfig);

// Email templates
const emailTemplates = {
  // Email sent to the business owner
  businessNotification: (formData) => ({
    subject: `New Contact Form Submission - ${formData.service || 'General Inquiry'}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Customer Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Name:</td>
              <td style="padding: 8px 0;">${formData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
              <td style="padding: 8px 0;"><a href="tel:${formData.phone}">${formData.phone}</a></td>
            </tr>
            ${formData.email ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${formData.email}">${formData.email}</a></td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Customer Type:</td>
              <td style="padding: 8px 0;">${formData.customer_type}</td>
            </tr>
          </table>
        </div>

        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Project Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Service Needed:</td>
              <td style="padding: 8px 0;">${formData.service}</td>
            </tr>
            ${formData.project_scope ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Project Scope:</td>
              <td style="padding: 8px 0;">${formData.project_scope}</td>
            </tr>
            ` : ''}
            ${formData.timeline ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Timeline:</td>
              <td style="padding: 8px 0;">${formData.timeline}</td>
            </tr>
            ` : ''}
            ${formData.preferred_time ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Preferred Contact Time:</td>
              <td style="padding: 8px 0;">${formData.preferred_time}</td>
            </tr>
            ` : ''}
          </table>
        </div>

        ${formData.details ? `
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Additional Details</h3>
          <p style="margin: 0; line-height: 1.6; color: #374151;">${formData.details}</p>
        </div>
        ` : ''}

        <div style="background: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
          <p style="margin: 0; color: #1e40af; font-weight: bold;">
            📞 <strong>Quick Action:</strong> Call ${formData.name} at ${formData.phone} to discuss their ${formData.service} needs.
          </p>
        </div>

        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            This email was sent from your Heartland Heating + Air contact form.
          </p>
        </div>
      </div>
    `
  }),

  // Confirmation email sent to the customer
  customerConfirmation: (formData) => ({
    subject: 'Thank you for contacting Heartland Heating + Air',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #1f2937; margin-bottom: 10px;">Thank You!</h1>
          <p style="color: #6b7280; font-size: 18px;">We've received your inquiry and will be in touch soon.</p>
        </div>

        <div style="background: #f8fafc; padding: 25px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Your Request Summary</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Service:</td>
              <td style="padding: 8px 0;">${formData.service}</td>
            </tr>
            ${formData.project_scope ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Project Scope:</td>
              <td style="padding: 8px 0;">${formData.project_scope}</td>
            </tr>
            ` : ''}
            ${formData.timeline ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Timeline:</td>
              <td style="padding: 8px 0;">${formData.timeline}</td>
            </tr>
            ` : ''}
          </table>
        </div>

        <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">What Happens Next?</h3>
          <ol style="color: #374151; line-height: 1.8;">
            <li><strong>Quick Response:</strong> We'll contact you within 2 hours during business hours</li>
            <li><strong>Detailed Quote:</strong> We'll provide a comprehensive estimate for your project</li>
            <li><strong>Scheduling:</strong> Once approved, we'll schedule your service at your convenience</li>
          </ol>
        </div>

        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #92400e; margin-top: 0;">Need Immediate Assistance?</h3>
          <p style="color: #92400e; margin-bottom: 15px;">
            For urgent HVAC issues, don't wait for our call back:
          </p>
          <div style="text-align: center;">
            <a href="tel:+13175550123" style="display: inline-block; background: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
              🚨 Call Emergency Line: (317) 555-0123
            </a>
          </div>
        </div>

        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Why Choose Heartland Heating + Air?</h3>
          <ul style="color: #374151; line-height: 1.8;">
            <li>✅ <strong>Google Guaranteed</strong> - Your satisfaction is our priority</li>
            <li>✅ <strong>Licensed & Insured</strong> - Professional, reliable service</li>
            <li>✅ <strong>24/7 Emergency Service</strong> - We're here when you need us</li>
            <li>✅ <strong>Commercial & Residential</strong> - From single homes to large portfolios</li>
          </ul>
        </div>

        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            Heartland Heating + Air<br>
            Indianapolis & Midwest Region<br>
            <a href="tel:+13175550123" style="color: #3b82f6;">(317) 555-0123</a> | 
            <a href="mailto:info@heartlandheatingair.com" style="color: #3b82f6;">info@heartlandheatingair.com</a>
          </p>
        </div>
      </div>
    `
  })
};

// Function to send emails
const sendEmails = async (formData) => {
  try {
    // Send notification to business owner
    const businessEmail = {
      from: `"Heartland Heating + Air Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.BUSINESS_EMAIL || process.env.EMAIL_USER,
      ...emailTemplates.businessNotification(formData)
    };

    // Send confirmation to customer (if email provided)
    let customerEmail = null;
    if (formData.email) {
      customerEmail = {
        from: `"Heartland Heating + Air" <${process.env.EMAIL_USER}>`,
        to: formData.email,
        ...emailTemplates.customerConfirmation(formData)
      };
    }

    // Send emails
    const results = [];

    // Send business notification
    const businessResult = await transporter.sendMail(businessEmail);
    results.push({ type: 'business', success: true, messageId: businessResult.messageId });

    // Send customer confirmation if email provided
    if (customerEmail) {
      const customerResult = await transporter.sendMail(customerEmail);
      results.push({ type: 'customer', success: true, messageId: customerResult.messageId });
    }

    return {
      success: true,
      results,
      message: 'Emails sent successfully'
    };

  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      error: error.message,
      message: 'Failed to send emails'
    };
  }
};

// Verify transporter connection
const verifyConnection = async () => {
  try {
    await transporter.verify();
    console.log('✅ Email server connection verified');
    return true;
  } catch (error) {
    console.error('❌ Email server connection failed:', error);
    return false;
  }
};

module.exports = {
  transporter,
  emailTemplates,
  sendEmails,
  verifyConnection
}; 