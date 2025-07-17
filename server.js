const express = require('express');
const cors = require('cors');
const path = require('path');
const { sendEmails, verifyConnection } = require('./email-config');
require('dotenv').config();

// reCAPTCHA verification function
async function verifyRecaptcha(recaptchaResponse) {
  if (!recaptchaResponse) {
    return false;
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaResponse}`
    });

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    emailConfigured: !!(process.env.EMAIL_USER && process.env.EMAIL_PASS)
  });
});

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const formData = req.body;

    // Verify reCAPTCHA
    const recaptchaValid = await verifyRecaptcha(formData.recaptchaResponse);
    if (!recaptchaValid) {
      return res.status(400).json({
        success: false,
        message: 'reCAPTCHA verification failed. Please try again.'
      });
    }

    // Validate required fields
    const requiredFields = ['name', 'phone', 'customer_type', 'service'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(', ')}`
      });
    }

    // Sanitize and validate data
    const sanitizedData = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email ? formData.email.trim() : '',
      customer_type: formData.customer_type,
      service: formData.service,
      project_scope: formData.project_scope || '',
      timeline: formData.timeline || '',
      preferred_time: formData.preferred_time || '',
      details: formData.details ? formData.details.trim() : ''
    };

    // Validate email format if provided
    if (sanitizedData.email && !isValidEmail(sanitizedData.email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Send emails
    const emailResult = await sendEmails(sanitizedData);

    if (emailResult.success) {
      res.json({
        success: true,
        message: 'Thank you! We\'ve received your request and will contact you soon.',
        emailResults: emailResult.results
      });
    } else {
      console.error('Email sending failed:', emailResult.error);
      res.status(500).json({
        success: false,
        message: 'We received your request but had trouble sending confirmation emails. We\'ll still contact you soon!'
      });
    }

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request. Please try again or call us directly.'
    });
  }
});

// Quote form submission endpoint (for scheduling widget)
app.post('/api/quote', async (req, res) => {
  try {
    const formData = req.body;

    // Verify reCAPTCHA
    const recaptchaValid = await verifyRecaptcha(formData.recaptchaResponse);
    if (!recaptchaValid) {
      return res.status(400).json({
        success: false,
        message: 'reCAPTCHA verification failed. Please try again.'
      });
    }

    // Validate required fields
    const requiredFields = ['name', 'phone', 'service'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(', ')}`
      });
    }

    // Sanitize data
    const sanitizedData = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email ? formData.email.trim() : '',
      customer_type: 'Quote Request',
      service: formData.service,
      details: formData.details ? formData.details.trim() : ''
    };

    // Validate email format if provided
    if (sanitizedData.email && !isValidEmail(sanitizedData.email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Send emails
    const emailResult = await sendEmails(sanitizedData);

    if (emailResult.success) {
      res.json({
        success: true,
        message: 'Quote request sent! We\'ll contact you soon with your estimate.',
        emailResults: emailResult.results
      });
    } else {
      console.error('Email sending failed:', emailResult.error);
      res.status(500).json({
        success: false,
        message: 'We received your quote request but had trouble sending confirmation emails. We\'ll still contact you soon!'
      });
    }

  } catch (error) {
    console.error('Quote form error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your quote request. Please try again or call us directly.'
    });
  }
});

// Email configuration test endpoint
app.get('/api/test-email', async (req, res) => {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return res.status(400).json({
        success: false,
        message: 'Email configuration not set up. Please check your .env file.'
      });
    }

    const connectionResult = await verifyConnection();

    if (connectionResult) {
      res.json({
        success: true,
        message: 'Email configuration is working correctly!'
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Email configuration test failed. Please check your credentials.'
      });
    }
  } catch (error) {
    console.error('Email test error:', error);
    res.status(500).json({
      success: false,
      message: 'Email test failed: ' + error.message
    });
  }
});

// Helper function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Catch-all route to serve appropriate HTML files for SPA routing
app.get('*', (req, res) => {
  const path = req.path;
  console.log(`Server received request for path: ${path}`);

  // Handle careers routes - serve careers.html for any /careers/* path
  if (path.startsWith('/careers')) {
    console.log(`Serving careers.html for path: ${path}`);
    res.sendFile(path.join(__dirname, 'public', 'careers.html'));
  }
  // Handle other specific pages
  else if (path.startsWith('/about')) {
    console.log(`Serving about.html for path: ${path}`);
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
  }
  else if (path.startsWith('/contact')) {
    console.log(`Serving contact.html for path: ${path}`);
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
  }
  else if (path.startsWith('/service')) {
    console.log(`Serving service.html for path: ${path}`);
    res.sendFile(path.join(__dirname, 'public', 'service.html'));
  }
  // Default to index.html for all other routes
  else {
    console.log(`Serving index.html for path: ${path}`);
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  }
});

// Start server
app.listen(PORT, async () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);

  // Test email configuration on startup
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    console.log('📧 Testing email configuration...');
    await verifyConnection();
  } else {
    console.log('⚠️  Email configuration not found. Please set up your .env file.');
  }

  console.log('📝 Contact form endpoints:');
  console.log(`   POST /api/contact - Main contact form`);
  console.log(`   POST /api/quote - Quote request form`);
  console.log(`   GET /api/health - Health check`);
  console.log(`   GET /api/test-email - Test email configuration`);
}); 