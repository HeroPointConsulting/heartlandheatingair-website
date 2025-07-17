# Careers System Implementation Guide

## Overview

The careers system for Heartland Heating + Air has been successfully implemented with the following features:

- **Careers listing page** (`/careers.html`) - Shows all available positions and company benefits
- **Individual job posting pages** - Dynamic pages for each position with application forms
- **Application forms with reCAPTCHA** - Secure job application submission
- **Responsive design** - Works on all devices
- **SEO optimized** - Proper meta tags and schema markup

## Files Created/Modified

### New Files Created:

1. `public/data/careers.js` - Careers data with job listings and benefits
2. `public/components/Careers.js` - Careers page component
3. `public/components/JobDetail.js` - Individual job posting component
4. `public/components/Careers.css` - Styling for careers pages
5. `public/careers.html` - Careers page HTML
6. `scripts/add-recaptcha.js` - Script to configure reCAPTCHA

### Files Modified:

1. `public/main.js` - Added careers page routing and initialization
2. `public/styles.css` - Added careers CSS import
3. `public/components/Navbar.js` - Added careers link to navigation
4. `public/components/Footer.js` - Already had careers link

## Available Job Positions

The system includes 5 HVAC-specific positions:

1. **HVAC Service Technician** - $45,000 - $65,000
2. **HVAC Installer** - $50,000 - $70,000
3. **Customer Service Representative** - $35,000 - $45,000
4. **Commercial HVAC Technician** - $60,000 - $80,000
5. **HVAC Sales Representative** - $40,000 - $60,000 + Commission

## Features

### Careers Page (`/careers.html`)

- Hero section with company introduction
- Benefits section highlighting company perks
- Current job openings with salary and location info
- Application process steps
- General application CTA for future opportunities

### Job Detail Pages (`/careers/[job-slug]`)

- Detailed job description
- Requirements and responsibilities
- Comprehensive application form
- File upload for resume and documents
- reCAPTCHA verification
- Success confirmation

### Application Form Fields

- Personal information (name, email, phone, address)
- Professional information (experience, certifications)
- Salary expectations and availability
- Document uploads (resume, cover letter, supporting docs)
- reCAPTCHA verification

## Setup Instructions

### 1. Configure reCAPTCHA

```bash
# Run the reCAPTCHA configuration script
node scripts/add-recaptcha.js
```

Then replace `YOUR_RECAPTCHA_SITE_KEY_HERE` in `public/components/JobDetail.js` with your actual reCAPTCHA site key from [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin).

### 2. Update Job Data

Edit `public/data/careers.js` to:

- Add/remove job positions
- Update salary ranges
- Modify requirements and responsibilities
- Change company benefits

### 3. Customize Styling

The careers system uses Heartland Heating + Air's brand colors:

- Primary Red: `#BE1E2D`
- Primary Blue: `#0F2E6D`
- Gray scale for text and backgrounds

All styling is in `public/components/Careers.css` and follows the existing design system.

## URL Structure

- **Careers listing**: `/careers.html`
- **Individual jobs**: `/careers/[job-slug]`
  - Example: `/careers/hvac-service-technician`
  - Example: `/careers/customer-service-representative`

## SEO Features

- Proper meta titles and descriptions
- Schema markup for job postings
- Semantic HTML structure
- Optimized for local search (Indianapolis area)

## Form Handling

The application forms are currently set up for frontend validation and display. To handle actual form submissions:

1. **Backend Integration**: Connect to your email system or CRM
2. **File Upload**: Set up server-side file handling
3. **Email Notifications**: Configure applicant and admin notifications
4. **Database Storage**: Store applications in your preferred system

## Customization Options

### Adding New Job Positions

1. Edit `public/data/careers.js`
2. Add new job object to `jobOpenings` array
3. Include all required fields (title, type, department, etc.)

### Modifying Benefits

1. Edit `public/data/careers.js`
2. Update the `benefits` array
3. Each benefit needs: title, description, and icon

### Changing Application Process

1. Edit `public/data/careers.js`
2. Modify the `applicationProcess` array
3. Update step descriptions and colors

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement for older browsers

## Performance Considerations

- Lazy loading of job details
- Optimized CSS and JavaScript
- Minimal external dependencies
- Fast page load times

## Security Features

- reCAPTCHA integration
- File type validation
- File size limits (5MB per file)
- Form validation
- XSS protection through proper escaping

## Maintenance

### Regular Updates

- Review and update job postings monthly
- Check application form functionality
- Update company benefits as needed
- Monitor reCAPTCHA performance

### Analytics

Consider adding analytics to track:

- Careers page visits
- Job posting views
- Application form submissions
- Conversion rates

## Support

For technical support or customization requests, contact the development team. The careers system is built using modern web standards and follows the existing codebase patterns.
