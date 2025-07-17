# Heartland Heating + Air - Long-Tail SEO Implementation

## 🏢 Development Team

- **Agency**: Hero Point Consulting
- **Client**: Heartland Heating + Air
- **Project Date**: July 2025
- **Project Type**: Long-tail Location SEO Implementation

## 📋 Project Overview

This project implements a comprehensive long-tail SEO strategy for Heartland Heating + Air, creating targeted landing pages for location-service combinations to rank for specific local search queries.

### 🎯 Key Features

- 60+ location-service combination pages
- 5 target locations (Indianapolis, Carmel, Fishers, Westfield, Noblesville)
- 12 comprehensive HVAC services
- Local business schema markup
- Mobile-responsive design
- SEO-optimized meta tags and content

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Email & reCAPTCHA Setup (Required for Contact Forms)

Before running the application, you need to set up email functionality and reCAPTCHA:

1. **Copy the environment template:**

   ```bash
   cp env.example .env
   ```

2. **Follow the setup guides:**
   - See `EMAIL_SETUP.md` for detailed instructions
   - Configure Gmail App Password
   - Set up Google reCAPTCHA keys
   - Configure environment variables

### Development

```bash
npm run dev
```

### Generate SEO Pages

```bash
npm run generate-seo
```

### Production Build

```bash
npm run seo-build
```

## 📁 Project Structure

```
heartland-heating-air/
├── public/
│   ├── locations/          # Generated location-service pages
│   ├── data/
│   │   └── locations.js    # Centralized data structure
│   ├── components/         # Reusable UI components
│   └── sitemap.xml        # Auto-generated sitemap
├── scripts/
│   └── generate-location-pages.js  # Main SEO generator
├── server.js              # Express server for form handling
├── email-config.js        # Nodemailer configuration
├── env.example           # Environment variables template
├── EMAIL_SETUP.md        # Email setup instructions
└── SEO-LOCATION-GUIDE.md  # Implementation documentation
```

## 🔧 Technical Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Backend**: Node.js, Express
- **Email**: Nodemailer with Gmail SMTP
- **Build Tool**: Live Server
- **SEO**: Static site generation with schema markup
- **Hosting**: Static file hosting (Netlify, Vercel, etc.)

## 📊 SEO Implementation

### Generated Pages

- Location index pages for each city
- Service-specific pages for each location
- Emergency service pages
- Maintenance plan pages
- Indoor air quality pages

### SEO Features

- Local business schema markup
- Location-specific meta tags
- Long-tail keyword optimization
- Mobile-first responsive design
- Fast loading times

## 🎨 Design Philosophy

- **Mobile-first**: Optimized for mobile search
- **Conversion-focused**: Clear CTAs and contact information
- **Local trust signals**: Area-specific content and landmarks
- **Professional branding**: Consistent with client's brand

## 📈 Expected Results

- Improved local search visibility
- Higher rankings for location-specific keywords
- Increased qualified lead generation
- Better user engagement and conversion rates

## 🛠️ Maintenance

### Regular Updates

- Monitor search performance via Google Search Console
- Update location information as needed
- Add new services or locations
- Refresh content for seasonal relevance

### Technical Maintenance

- Check page load speeds
- Monitor Core Web Vitals
- Update schema markup as needed
- Maintain sitemap accuracy

## 📞 Support

For technical support or questions about this implementation:

- **Agency**: Hero Point Consulting
- **Documentation**: See `SEO-LOCATION-GUIDE.md` for detailed implementation guide

---

_This project was developed by Hero Point Consulting for Heartland Heating + Air as part of their long-tail SEO strategy implementation._
