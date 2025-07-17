# Email Setup Guide for Heartland Heating + Air

This guide will help you set up nodemailer with Google SMTP to handle contact form submissions and send confirmation emails.

## Prerequisites

- A Gmail account
- Node.js and npm installed
- Basic knowledge of command line

## Step 1: Enable 2-Factor Authentication

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to "Security"
3. Enable "2-Step Verification" if not already enabled
4. This is required to generate an App Password

## Step 2: Generate Gmail App Password

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to "Security"
3. Under "2-Step Verification", click "App passwords"
4. Select "Mail" as the app and "Other" as the device
5. Click "Generate"
6. **Copy the 16-character password** (you won't see it again!)

## Step 3: Configure Environment Variables

1. Copy the example environment file:

   ```bash
   cp env.example .env
   ```

2. Edit the `.env` file with your actual values:

   ```env
   # Your Gmail address
   EMAIL_USER=your-actual-email@gmail.com

   # The 16-character app password from Step 2
   EMAIL_PASS=abcd efgh ijkl mnop

   # Where you want to receive business notifications
   BUSINESS_EMAIL=your-business-email@example.com

   # Server port (optional, defaults to 3000)
   PORT=3000
   ```

## Step 4: Install Dependencies

```bash
npm install
```

## Step 5: Test Email Configuration

1. Start the server:

   ```bash
   npm start
   ```

2. Test the email configuration by visiting:

   ```
   http://localhost:3000/api/test-email
   ```

3. You should see a success message if everything is configured correctly.

## Step 6: Test Contact Form

1. Visit your website: `http://localhost:3000`
2. Fill out the contact form
3. Submit the form
4. Check your email for:
   - A notification email to your business email
   - A confirmation email to the customer (if they provided an email)

## Troubleshooting

### "Invalid login" error

- Make sure you're using the App Password, not your regular Gmail password
- Ensure 2-Factor Authentication is enabled
- Double-check the email address is correct

### "Less secure app access" error

- This is expected and normal with App Passwords
- The App Password is designed to work with "less secure" apps

### Emails not sending

- Check your `.env` file has the correct values
- Ensure no extra spaces in the App Password
- Verify the server is running on the correct port

### Contact form not working

- Check browser console for JavaScript errors
- Verify the server is running (`npm start`)
- Test the API endpoint directly: `http://localhost:3000/api/health`

## Security Notes

- **Never commit your `.env` file to version control**
- The `.env` file is already in `.gitignore`
- App Passwords are more secure than regular passwords
- Each App Password can be revoked individually

## Production Deployment

When deploying to production:

1. Set up environment variables on your hosting platform
2. Use a production email service (Gmail has sending limits)
3. Consider using services like:
   - SendGrid
   - Mailgun
   - Amazon SES
   - Postmark

## Email Templates

The system sends two types of emails:

1. **Business Notification**: Sent to you when someone submits the contact form
2. **Customer Confirmation**: Sent to the customer (if they provide an email)

Both email templates are customizable in `email-config.js`.

## Support

If you encounter issues:

1. Check the server console for error messages
2. Verify your Gmail App Password is correct
3. Test with the `/api/test-email` endpoint
4. Check that all required environment variables are set

## API Endpoints

- `POST /api/contact` - Main contact form submission
- `POST /api/quote` - Quote request form submission
- `GET /api/health` - Health check
- `GET /api/test-email` - Test email configuration

---

# reCAPTCHA Setup Guide

This guide will help you set up Google reCAPTCHA to protect your contact forms from spam and bots.

## Prerequisites

- A Google account
- Access to Google reCAPTCHA admin console

## Step 1: Create reCAPTCHA Site

1. Go to the Google reCAPTCHA admin console: https://www.google.com/recaptcha/admin
2. Click "Create" to add a new site
3. Choose **reCAPTCHA v2** with **"I'm not a robot" Checkbox**
4. Add your domains:
   - For development: `localhost`, `127.0.0.1`
   - For production: `yourdomain.com`, `www.yourdomain.com`
5. Accept the terms and click "Submit"

## Step 2: Get Your Keys

After creating the site, you'll get two keys:

- **Site Key** (public) - Used in your HTML forms
- **Secret Key** (private) - Used in your server-side verification

## Step 3: Configure Environment Variables

Add these to your `.env` file:

```env
# reCAPTCHA Configuration
RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

## Step 4: Test reCAPTCHA

1. Start your server: `npm start`
2. Visit your contact form
3. You should see the reCAPTCHA checkbox
4. Complete the reCAPTCHA and submit the form
5. Check that the form submission works correctly

## Troubleshooting

### reCAPTCHA not showing

- Verify your site key is correct
- Check that your domain is in the allowed list
- Ensure the reCAPTCHA script is loading

### Form submission failing

- Check browser console for JavaScript errors
- Verify your secret key is correct
- Check server logs for reCAPTCHA verification errors

### "Invalid domain" error

- Add your domain to the reCAPTCHA allowed list
- For local development, make sure `localhost` is included

## Security Notes

- **Never expose your secret key** in client-side code
- The secret key is only used server-side for verification
- Keep your keys secure and rotate them if compromised
