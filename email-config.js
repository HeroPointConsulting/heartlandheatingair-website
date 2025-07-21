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
  // Email sent to the business owner for contact form
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
  }),

  // Email sent to the business owner for job applications
  jobApplicationNotification: (formData) => ({
    subject: `New Job Application - ${formData.position} - ${formData.firstName} ${formData.lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          New Job Application Received
        </h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Position Applied For</h3>
          <p style="font-size: 18px; font-weight: bold; color: #1f2937; margin: 0;">${formData.position}</p>
        </div>

        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Applicant Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Name:</td>
              <td style="padding: 8px 0;">${formData.firstName} ${formData.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${formData.email}">${formData.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
              <td style="padding: 8px 0;"><a href="tel:${formData.phone}">${formData.phone}</a></td>
            </tr>
            ${formData.address ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Address:</td>
              <td style="padding: 8px 0;">${formData.address}, ${formData.city}, ${formData.state} ${formData.zipCode}</td>
            </tr>
            ` : ''}
            ${formData.availableStartDate ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Available Start Date:</td>
              <td style="padding: 8px 0;">${formData.availableStartDate}</td>
            </tr>
            ` : ''}
            ${formData.salaryExpectation ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Salary Expectation:</td>
              <td style="padding: 8px 0;">${formData.salaryExpectation}</td>
            </tr>
            ` : ''}
            ${formData.referralSource ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Referral Source:</td>
              <td style="padding: 8px 0;">${formData.referralSource}</td>
            </tr>
            ` : ''}
          </table>
        </div>

        ${formData.previousExperience ? `
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Previous HVAC Experience</h3>
          <p style="margin: 0; line-height: 1.6; color: #374151;">${formData.previousExperience}</p>
        </div>
        ` : ''}

        ${formData.certifications ? `
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Certifications & Licenses</h3>
          <p style="margin: 0; line-height: 1.6; color: #374151;">${formData.certifications}</p>
        </div>
        ` : ''}

        <div style="background: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
          <p style="margin: 0; color: #1e40af; font-weight: bold;">
            📧 <strong>Quick Action:</strong> Review application and contact ${formData.firstName} ${formData.lastName} at ${formData.email} or ${formData.phone}
          </p>
        </div>

        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            This application was submitted through your Heartland Heating + Air careers page.
          </p>
        </div>
      </div>
    `
  }),

  // Confirmation email sent to job applicants
  jobApplicationConfirmation: (formData) => ({
    subject: `Application Received - ${formData.position} - Heartland Heating + Air`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #1f2937; margin-bottom: 10px;">Application Received!</h1>
          <p style="color: #6b7280; font-size: 18px;">Thank you for your interest in joining our team.</p>
        </div>

        <div style="background: #f8fafc; padding: 25px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Application Summary</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Position:</td>
              <td style="padding: 8px 0;">${formData.position}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Applicant:</td>
              <td style="padding: 8px 0;">${formData.firstName} ${formData.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 8px 0;">${formData.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
              <td style="padding: 8px 0;">${formData.phone}</td>
            </tr>
          </table>
        </div>

        <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">What Happens Next?</h3>
          <ol style="color: #374151; line-height: 1.8;">
            <li><strong>Application Review:</strong> Our hiring team will review your application within 3-5 business days</li>
            <li><strong>Initial Contact:</strong> If selected, we'll contact you to discuss next steps</li>
            <li><strong>Interview Process:</strong> Qualified candidates will be invited for an interview</li>
            <li><strong>Final Decision:</strong> We'll notify you of our decision within 2 weeks</li>
          </ol>
        </div>

        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #92400e; margin-top: 0;">Questions About Your Application?</h3>
          <p style="color: #92400e; margin-bottom: 15px;">
            If you have any questions about your application or the hiring process:
          </p>
          <div style="text-align: center;">
            <a href="tel:+13175550123" style="display: inline-block; background: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
              📞 Call HR: (317) 555-0123
            </a>
          </div>
        </div>

        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Why Work at Heartland Heating + Air?</h3>
          <ul style="color: #374151; line-height: 1.8;">
            <li>✅ <strong>Competitive Pay</strong> - Industry-leading compensation packages</li>
            <li>✅ <strong>Health Benefits</strong> - Medical, dental, and vision coverage</li>
            <li>✅ <strong>Professional Growth</strong> - Training and advancement opportunities</li>
            <li>✅ <strong>Great Team</strong> - Supportive, collaborative work environment</li>
          </ul>
        </div>

        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            Heartland Heating + Air<br>
            Indianapolis & Midwest Region<br>
            <a href="tel:+13175550123" style="color: #3b82f6;">(317) 555-0123</a> | 
            <a href="mailto:careers@heartlandheatingair.com" style="color: #3b82f6;">careers@heartlandheatingair.com</a>
          </p>
        </div>
      </div>
    `
  })
};

// Function to send contact form emails
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

// Function to send job application emails
const sendJobApplicationEmails = async (formData) => {
  try {
    // Send notification to business owner
    const businessEmail = {
      from: `"Heartland Heating + Air Job Application" <${process.env.EMAIL_USER}>`,
      to: process.env.BUSINESS_EMAIL || process.env.EMAIL_USER,
      ...emailTemplates.jobApplicationNotification(formData)
    };

    // Send confirmation to applicant
    const applicantEmail = {
      from: `"Heartland Heating + Air" <${process.env.EMAIL_USER}>`,
      to: formData.email,
      ...emailTemplates.jobApplicationConfirmation(formData)
    };

    // Send emails
    const results = [];

    // Send business notification
    const businessResult = await transporter.sendMail(businessEmail);
    results.push({ type: 'business', success: true, messageId: businessResult.messageId });

    // Send applicant confirmation
    const applicantResult = await transporter.sendMail(applicantEmail);
    results.push({ type: 'applicant', success: true, messageId: applicantResult.messageId });

    return {
      success: true,
      results,
      message: 'Job application emails sent successfully'
    };

  } catch (error) {
    console.error('Job application email sending error:', error);
    return {
      success: false,
      error: error.message,
      message: 'Failed to send job application emails'
    };
  }
};

// Function to send review emails
const sendReviewEmails = async (formData) => {
  try {
    // Send notification to business owner
    const businessEmail = {
      from: `"Heartland Heating + Air Review" <${process.env.EMAIL_USER}>`,
      to: process.env.BUSINESS_EMAIL || process.env.EMAIL_USER,
      subject: `New Customer Review - ${formData.rating}/5 Stars - Heartland Heating + Air`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #1f2937; margin-bottom: 10px;">New Customer Review!</h1>
            <p style="color: #6b7280; font-size: 18px;">A customer has left a review for your business.</p>
          </div>

          <div style="background: #f8fafc; padding: 25px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Review Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Rating:</td>
                <td style="padding: 8px 0;">
                  ${'★'.repeat(formData.rating)}${'☆'.repeat(5 - formData.rating)} (${formData.rating}/5)
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Customer:</td>
                <td style="padding: 8px 0;">${formData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Location:</td>
                <td style="padding: 8px 0;">${formData.location || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Service:</td>
                <td style="padding: 8px 0;">${formData.service || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 8px 0;">${formData.email || 'Not provided'}</td>
              </tr>
            </table>
          </div>

          <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Customer Review</h3>
            <blockquote style="border-left: 4px solid #3b82f6; padding-left: 20px; margin: 0; font-style: italic; color: #374151;">
              "${formData.comment}"
            </blockquote>
          </div>

          <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #92400e; margin-top: 0;">Next Steps</h3>
            <ul style="color: #92400e; line-height: 1.8;">
              <li><strong>Review the feedback</strong> - Consider any areas for improvement</li>
              <li><strong>Respond if needed</strong> - Reach out to the customer if they provided contact info</li>
              <li><strong>Share positive reviews</strong> - Use great reviews in your marketing</li>
              <li><strong>Monitor trends</strong> - Track review patterns over time</li>
            </ul>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              This review was submitted through your website's review form.
            </p>
          </div>
        </div>
      `
    };

    // Send confirmation to customer (if email provided)
    let customerEmail = null;
    if (formData.email) {
      customerEmail = {
        from: `"Heartland Heating + Air" <${process.env.EMAIL_USER}>`,
        to: formData.email,
        subject: 'Thank You for Your Review - Heartland Heating + Air',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #1f2937; margin-bottom: 10px;">Thank You!</h1>
              <p style="color: #6b7280; font-size: 18px;">We've received your review and appreciate your feedback.</p>
            </div>

            <div style="background: #f8fafc; padding: 25px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Your Review Summary</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Rating:</td>
                  <td style="padding: 8px 0;">
                    ${'★'.repeat(formData.rating)}${'☆'.repeat(5 - formData.rating)} (${formData.rating}/5)
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Service:</td>
                  <td style="padding: 8px 0;">${formData.service || 'Not specified'}</td>
                </tr>
              </table>
            </div>

            <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">Your Feedback</h3>
              <blockquote style="border-left: 4px solid #3b82f6; padding-left: 20px; margin: 0; font-style: italic; color: #374151;">
                "${formData.comment}"
              </blockquote>
            </div>

            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #92400e; margin-top: 0;">What Happens Next?</h3>
              <ul style="color: #92400e; line-height: 1.8;">
                <li><strong>Review Published:</strong> Your review will be featured on our website</li>
                <li><strong>Team Notification:</strong> Our team has been notified of your feedback</li>
                <li><strong>Follow-up:</strong> We may reach out if we have any questions</li>
                <li><strong>Continuous Improvement:</strong> Your feedback helps us serve customers better</li>
              </ul>
            </div>

            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Need More Help?</h3>
              <p style="color: #374151; margin-bottom: 15px;">
                If you need additional HVAC services or have questions:
              </p>
              <div style="text-align: center;">
                <a href="tel:+13175550123" style="display: inline-block; background: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 0 10px;">
                  📞 Call Now: (317) 555-0123
                </a>
              </div>
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
      message: 'Review emails sent successfully'
    };

  } catch (error) {
    console.error('Review email sending error:', error);
    return {
      success: false,
      error: error.message,
      message: 'Failed to send review emails'
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
  sendJobApplicationEmails,
  sendReviewEmails,
  verifyConnection
}; 