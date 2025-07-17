# reCAPTCHA Setup Guide for Heartland Heating + Air

## Overview

The Heartland Heating + Air website has reCAPTCHA integration implemented in two forms:

1. **Contact Form** - Main quote request form
2. **Job Application Forms** - Individual job posting application forms

Both forms are currently using placeholder site keys and need to be configured with real reCAPTCHA keys.

## Current Implementation Status

### ✅ **What's Already Implemented:**

- reCAPTCHA widgets in both forms
- Client-side validation
- Server-side verification (in server.js)
- Error handling and user feedback
- Form submission blocking until reCAPTCHA is completed

### ⚠️ **What Needs to be Done:**

- Get real reCAPTCHA site keys from Google
- Replace placeholder keys in the code
- Test the integration

## Step-by-Step Setup Instructions

### 1. Get reCAPTCHA Keys from Google

1. **Go to Google reCAPTCHA Admin Console:**

   - Visit: https://www.google.com/recaptcha/admin
   - Sign in with your Google account

2. **Create a new site:**

   - Click "Create" or "+" button
   - Choose "reCAPTCHA v2"
   - Select "I'm not a robot" Checkbox

3. **Configure the site:**

   - **Label:** "Heartland Heating + Air"
   - **Domains:** Add your domains:
     - `localhost` (for development)
     - `heartlandheatingair.com` (production)
     - `www.heartlandheatingair.com` (production)
   - **Accept the terms of service**

4. **Get your keys:**
   - **Site Key:** Copy this key (starts with `6L...`)
   - **Secret Key:** Copy this key (starts with `6L...`)

### 2. Update the Code

#### A. Update Contact Form reCAPTCHA

**File:** `public/components/Contact.js`
**Line:** ~175

Replace:

```html
<div class="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY_HERE"></div>
```

With:

```html
<div class="g-recaptcha" data-sitekey="YOUR_ACTUAL_SITE_KEY"></div>
```

#### B. Update Job Application Form reCAPTCHA

**File:** `public/components/JobDetail.js`
**Line:** ~158

Replace:

```html
<div class="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY_HERE"></div>
```

With:

```html
<div class="g-recaptcha" data-sitekey="YOUR_ACTUAL_SITE_KEY"></div>
```

#### C. Update Server-Side Secret Key

**File:** `server.js`
**Line:** ~15

Replace:

```javascript
body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaResponse}`;
```

Make sure your `.env` file contains:

```
RECAPTCHA_SECRET_KEY=your_actual_secret_key_here
```

### 3. Test the Integration

#### A. Test Contact Form

1. Visit the contact page
2. Fill out the form
3. Complete the reCAPTCHA
4. Submit the form
5. Check that the form submits successfully

#### B. Test Job Application Form

1. Visit a job detail page (e.g., `/careers/hvac-service-technician`)
2. Fill out the application form
3. Complete the reCAPTCHA
4. Submit the form
5. Check that the form submits successfully

### 4. Troubleshooting

#### reCAPTCHA Not Showing

- Check that the reCAPTCHA script is loaded in the HTML
- Verify the site key is correct
- Check browser console for errors
- Ensure the domain is added to reCAPTCHA admin console

#### Form Not Submitting

- Check that reCAPTCHA is completed
- Verify server-side validation is working
- Check server logs for errors
- Ensure secret key is correct in environment variables

#### reCAPTCHA Validation Failing

- Check that both site key and secret key match
- Verify domain configuration in reCAPTCHA admin
- Test with different browsers/devices
- Check for JavaScript errors

## Security Best Practices

### ✅ **Implemented:**

- Client-side validation before form submission
- Server-side verification of reCAPTCHA response
- Form submission blocking until reCAPTCHA is completed
- Error handling for failed verification

### 🔒 **Additional Recommendations:**

- Use HTTPS in production
- Keep secret key secure (never expose in client-side code)
- Monitor reCAPTCHA analytics for suspicious activity
- Regularly rotate keys if needed

## Environment Variables

Add to your `.env` file:

```
RECAPTCHA_SECRET_KEY=your_actual_secret_key_here
```

## Files Modified

1. `public/components/Contact.js` - Contact form reCAPTCHA
2. `public/components/JobDetail.js` - Job application form reCAPTCHA
3. `server.js` - Server-side verification (already implemented)
4. `.env` - Environment variables for secret key

## Testing Checklist

- [ ] reCAPTCHA widget appears on contact form
- [ ] reCAPTCHA widget appears on job application forms
- [ ] Form submission blocked without reCAPTCHA completion
- [ ] Form submits successfully with completed reCAPTCHA
- [ ] Server-side verification working
- [ ] Error messages display for failed verification
- [ ] Works on different browsers
- [ ] Works on mobile devices

## Support

If you encounter issues:

1. Check the browser console for JavaScript errors
2. Check server logs for backend errors
3. Verify reCAPTCHA keys are correct
4. Test with different browsers/devices
5. Contact the development team for assistance

## Notes

- The same site key can be used for both forms
- The secret key is only used server-side
- reCAPTCHA v2 is used for better user experience
- The implementation includes proper error handling and user feedback
