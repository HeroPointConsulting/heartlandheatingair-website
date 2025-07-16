const fs = require('fs');
const path = require('path');

// Location data with coordinates and service areas
const locations = {
  indianapolis: {
    name: 'Indianapolis',
    coords: '39.7684;-86.1581',
    zipCodes: ['46201', '46202', '46203', '46204', '46205', '46206', '46207', '46208', '46209', '46210', '46211', '46212', '46213', '46214', '46215', '46216', '46217', '46218', '46219', '46220', '46221', '46222', '46223', '46224', '46225', '46226', '46227', '46228', '46229', '46230', '46231', '46234', '46235', '46236', '46237', '46239', '46240', '46241', '46242', '46244', '46247', '46249', '46250', '46251', '46253', '46254', '46255', '46256', '46259', '46260', '46262', '46268', '46277', '46278', '46280', '46282', '46283', '46285', '46290', '46291', '46295', '46296', '46298'],
    areas: {
      'Downtown Indianapolis': '46201, 46202, 46203, 46204, 46205',
      'North Side': 'Broad Ripple, Meridian-Kessler, Butler-Tarkington',
      'East Side': 'Irvington, Lawrence, Warren Township',
      'South Side': 'Fountain Square, Garfield Park, Beech Grove',
      'West Side': 'Speedway, Pike Township, Wayne Township',
      'Suburbs': 'Carmel, Fishers, Noblesville, Westfield, Greenwood'
    },
    radius: '30 miles'
  },
  carmel: {
    name: 'Carmel',
    coords: '39.9784;-86.1180',
    zipCodes: ['46032', '46033', '46074'],
    areas: {
      'Arts & Design District': '46032',
      'Village of WestClay': '46033',
      'Meridian Hills': '46074',
      'Surrounding Areas': 'Noblesville, Westfield, Fishers'
    },
    radius: '25 miles'
  },
  fishers: {
    name: 'Fishers',
    coords: '39.9567;-85.9550',
    zipCodes: ['46037', '46038', '46040'],
    areas: {
      'Downtown Fishers': '46038',
      'Geist Reservoir': '46037',
      'Northeast Fishers': '46040',
      'Surrounding Areas': 'Noblesville, Carmel, Indianapolis'
    },
    radius: '25 miles'
  },
  noblesville: {
    name: 'Noblesville',
    coords: '40.0456;-86.0086',
    zipCodes: ['46060', '46061', '46062'],
    areas: {
      'Historic Downtown': '46060',
      'North Noblesville': '46061',
      'East Noblesville': '46062',
      'Surrounding Areas': 'Carmel, Fishers, Westfield'
    },
    radius: '25 miles'
  },
  westfield: {
    name: 'Westfield',
    coords: '40.0428;-86.1275',
    zipCodes: ['46074', '46075'],
    areas: {
      'Grand Park': '46074',
      'Downtown Westfield': '46075',
      'Surrounding Areas': 'Carmel, Noblesville, Indianapolis'
    },
    radius: '25 miles'
  }
};

// Service configurations
const services = {
  'air-conditioning-service': {
    title: 'Air Conditioning Service',
    shortTitle: 'AC Service',
    description: 'Professional air conditioning service',
    longDescription: '24/7 Emergency AC Repair Near Me • American-Made Equipment • Same-Day Service',
    features: [
      '24/7 emergency AC repair available',
      'EPA Certified, NATE Certified technicians',
      'Google Guaranteed service protection',
      'Same-day service for urgent repairs',
      'American-made equipment specialists',
      'Transparent pricing starting at $200-$500',
      'Veteran-owned and operated',
      'Free estimates on new installations'
    ],
    pricing: '$200-$500',
    serviceTime: 'same-day service',
    image: 'slideshow-2.png',
    altImage: 'Professional AC service technician working'
  },
  'furnace-installation': {
    title: 'Furnace Installation',
    shortTitle: 'Furnace Installation',
    description: 'Professional furnace installation services',
    longDescription: 'American-Made Furnace Installation • Expert Technicians • 1-2 Day Service',
    features: [
      '24/7 emergency service available',
      'EPA Certified, NATE Certified technicians',
      'Google Guaranteed service protection',
      '1-2 days installation service',
      'American-made equipment specialists',
      'Transparent pricing starting at $3,000-$6,000',
      'Veteran-owned and operated',
      'Free estimates and financing options'
    ],
    pricing: '$3,000-$6,000',
    serviceTime: '1-2 days service',
    image: 'slideshow-3.png',
    altImage: 'Professional furnace installation technician'
  },
  'hvac-repair': {
    title: 'HVAC Repair',
    shortTitle: 'HVAC Repair',
    description: 'Professional HVAC repair services',
    longDescription: '24/7 Emergency HVAC Repair • Same-Day Service • American-Made Equipment',
    features: [
      '24/7 emergency HVAC repair available',
      'EPA Certified, NATE Certified technicians',
      'Google Guaranteed service protection',
      'Same-day service for urgent repairs',
      'American-made equipment specialists',
      'Transparent pricing starting at $150-$400',
      'Veteran-owned and operated',
      'Diagnostic services included'
    ],
    pricing: '$150-$400',
    serviceTime: 'same-day service',
    image: 'slideshow-1.png',
    altImage: 'Professional HVAC repair technician'
  },
  'hvac-maintenance': {
    title: 'HVAC Maintenance',
    shortTitle: 'HVAC Maintenance',
    description: 'Professional HVAC maintenance services',
    longDescription: 'Preventive HVAC Maintenance • American-Made Equipment • Certified Technicians',
    features: [
      'Scheduled maintenance programs',
      'EPA Certified, NATE Certified technicians',
      'Google Guaranteed service protection',
      'Preventive maintenance plans',
      'American-made equipment specialists',
      'Transparent pricing starting at $100-$300',
      'Veteran-owned and operated',
      'Energy efficiency optimization'
    ],
    pricing: '$100-$300',
    serviceTime: 'scheduled service',
    image: 'slideshow-4.png',
    altImage: 'Professional HVAC maintenance technician'
  },
  'duct-cleaning': {
    title: 'Duct Cleaning',
    shortTitle: 'Duct Cleaning',
    description: 'Professional duct cleaning services',
    longDescription: 'Professional Duct Cleaning • Improved Air Quality • American-Made Equipment',
    features: [
      'Professional duct cleaning service',
      'EPA Certified, NATE Certified technicians',
      'Google Guaranteed service protection',
      'Same-day service available',
      'American-made equipment specialists',
      'Transparent pricing starting at $300-$800',
      'Veteran-owned and operated',
      'Air quality improvement guaranteed'
    ],
    pricing: '$300-$800',
    serviceTime: 'same-day service',
    image: 'slideshow-2.png',
    altImage: 'Professional duct cleaning technician'
  }
};

function generateLocationPage(locationKey, serviceKey) {
  const location = locations[locationKey];
  const service = services[serviceKey];

  const title = `${service.title} ${location.name} IN | 24/7 ${service.shortTitle} Near Me | Heartland Heating + Air`;
  const description = `Professional ${service.description.toLowerCase()} in ${location.name}, IN. 24/7 emergency ${service.shortTitle.toLowerCase()}, ${service.serviceTime}, American-made equipment. Call (317) 555-0123 for immediate assistance.`;

  const areaGrid = Object.entries(location.areas).map(([areaName, areaInfo]) =>
    `<div class="area-item">
      <div class="area-icon">📍</div>
      <div class="area-content">
        <h4>${areaName}</h4>
        <p>${areaInfo}</p>
      </div>
    </div>`
  ).join('\n                ');

  const featuresList = service.features.map(feature =>
    `<li>${feature}</li>`
  ).join('\n                        ');

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <link rel="canonical" href="https://heartlandheatingair.com/locations/${locationKey}/${serviceKey}">
    
    <!-- Local SEO Meta Tags -->
    <meta name="geo.region" content="US-IN">
    <meta name="geo.placename" content="${location.name}, Indiana">
    <meta name="geo.position" content="${location.coords}">
    <meta name="ICBM" content="${location.coords.replace(';', ', ')}">
    
    <!-- Open Graph -->
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="https://heartlandheatingair.com/locations/${locationKey}/${serviceKey}">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="en_US">
    <meta property="og:image" content="https://heartlandheatingair.com/img/${service.image}">
    
    <!-- Schema.org Local Business JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Heartland Heating + Air",
      "image": "https://heartlandheatingair.com/img/hha_heart.png",
      "description": "Professional HVAC services in the heart of the Midwest - American-made equipment, veteran-owned, serving ${location.name} and surrounding areas",
      "telephone": "(317) 555-0123",
      "email": "info@heartlandheatingair.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "${location.name}",
        "addressRegion": "IN",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": ${location.coords.split(';')[0]},
        "longitude": ${location.coords.split(';')[1]}
      },
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "${service.pricing}",
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": ${location.coords.split(';')[0]},
          "longitude": ${location.coords.split(';')[1]}
        },
        "geoRadius": "${location.radius}"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "HVAC Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "${service.title}",
              "description": "Professional ${service.shortTitle.toLowerCase()} in ${location.name}"
            }
          }
        ]
      }
    }
    </script>
    
    <!-- Layout CSS -->
    <style>
    /* Layout Styles */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    
    /* Navbar Styles */
    .navbar { background: #f8f9fa; color: #333; padding: 1rem 0; position: sticky; top: 0; z-index: 1000; border-bottom: 2px solid #dc2626; }
    .navbar .container { display: flex; justify-content: space-between; align-items: center; }
    .navbar-brand { display: flex; align-items: center; }
    .logo-link { display: flex; align-items: center; text-decoration: none; color: #1e3c72; }
    .logo { height: 50px; width: auto; margin-right: 15px; }
    .brand-name { 
      display: flex; 
      flex-direction: column; 
      justify-content: center; 
      min-width: 0;
    }
    .logo-text {
      font-size: 20px;
      font-weight: 800;
      color: #1e3a8a;
      line-height: 1.0;
      letter-spacing: -0.5px;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
      white-space: nowrap;
    }
    .logo-tagline {
      font-size: 15px;
      font-weight: 700;
      color: #1e3a8a;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.0;
      margin-top: -2px;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
      white-space: nowrap;
    }
    .plus-symbol {
      color: #dc2626;
      font-weight: 800;
      font-size: 15px;
      margin: 0 3px;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    }
    .navbar-menu { display: flex; align-items: center; gap: 2rem; }
    .nav-link { color: #1e3c72; text-decoration: none; font-weight: 500; transition: opacity 0.3s; }
    .nav-link:hover { opacity: 0.8; }
    .nav-link.phone { font-weight: 600; color: #fbbf24; }
    
    /* Footer Styles */
    .footer { background: #1e3c72; color: white; padding: 3rem 0 1rem; }
    .footer-content { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 2rem; margin-bottom: 2rem; }
    .footer-brand { display: flex; flex-direction: column; align-items: flex-start; }
    .footer-logo-section { display: flex; align-items: center; margin-bottom: 1rem; }
    .footer-logo { height: 60px; width: auto; margin-right: 15px; filter: brightness(0) invert(1); }
    .footer-brand-name { font-size: 1.5rem; font-weight: 700; color: white; }
    .footer-brand p { opacity: 0.9; }
    .footer-contact h3, .footer-services h3 { margin-bottom: 1rem; color: #fbbf24; }
    .footer-contact a, .footer-services a { color: white; text-decoration: none; opacity: 0.9; }
    .footer-contact a:hover, .footer-services a:hover { opacity: 1; }
    .footer-services ul { list-style: none; }
    .footer-services li { margin-bottom: 0.5rem; }
    .footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1rem; text-align: center; opacity: 0.8; }
    
    /* Page Content Styles */
    .hero { background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; padding: 60px 0; text-align: center; position: relative; overflow: hidden; }
    .hero::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('../../img/${service.image}') center/cover; opacity: 0.1; }
    .hero .container { position: relative; z-index: 2; }
    .hero h1 { font-size: 2.5rem; margin-bottom: 1rem; font-weight: 700; }
    .hero p { font-size: 1.2rem; margin-bottom: 2rem; opacity: 0.9; }
    .btn { display: inline-block; padding: 12px 24px; background: white; color: #dc2626; text-decoration: none; border-radius: 5px; font-weight: 600; margin: 0 10px; transition: all 0.3s; }
    .btn:hover { background: #f1f5f9; transform: translateY(-2px); }
    .btn.emergency { background: #fbbf24; color: #1e3c72; }
    .btn.emergency:hover { background: #f59e0b; }
    
    .service-info { padding: 60px 0; background: white; }
    .service-info h2 { color: #1e3c72; margin-bottom: 1.5rem; font-size: 2rem; text-align: center; }
    .service-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; margin-top: 2rem; }
    .service-list { list-style: none; }
    .service-list li { padding: 0.75rem 0; padding-left: 2rem; position: relative; border-bottom: 1px solid #f1f5f9; }
    .service-list li:last-child { border-bottom: none; }
    .service-list li:before { content: "✓"; color: #dc2626; font-weight: bold; position: absolute; left: 0; }
    .service-image { border-radius: 10px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
    .service-image img { width: 100%; height: auto; display: block; }
    
    .trust-signals { background: #f8f9fa; padding: 40px 0; text-align: center; }
    .trust-signals h3 { color: #1e3c72; margin-bottom: 1rem; font-size: 1.5rem; }
    .trust-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; margin-top: 2rem; }
    .trust-item { background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
    .trust-item h4 { color: #dc2626; margin-bottom: 0.5rem; }
    
    .service-area { padding: 40px 0; background: white; text-align: center; }
    .service-area h3 { color: #1e3c72; margin-bottom: 1rem; font-size: 1.5rem; }
    .area-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-top: 2rem; }
    .area-item { 
      background: #f8f9fa;
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.25rem;
      border-radius: 8px;
      border-left: 4px solid #dc2626;
      transition: all 0.2s ease;
      position: relative;
    }
    .area-item:hover { 
      background: #ffffff;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transform: translateY(-1px);
    }
    .area-icon {
      font-size: 1.25rem;
      color: #dc2626;
      flex-shrink: 0;
      background: white;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    .area-content h4 {
      color: #1e3c72;
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    .area-content p {
      color: #6b7280;
      font-size: 0.95rem;
      line-height: 1.4;
      margin: 0;
    }
    
    .cta { background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); color: white; padding: 60px 0; text-align: center; }
    .cta h3 { font-size: 2rem; margin-bottom: 1rem; }
    .cta p { margin-bottom: 2rem; opacity: 0.9; }
    .cta-note { opacity: 0.8; font-style: italic; font-size: 0.9rem; margin-top: 2rem; }
    
    /* Responsive Design */
    @media (max-width: 768px) {
      .navbar .container { flex-direction: column; gap: 1rem; }
      .navbar-menu { flex-wrap: wrap; justify-content: center; gap: 1rem; }
      .footer-content { grid-template-columns: 1fr; text-align: center; }
      .footer-brand { align-items: center; }
      .footer-logo-section { justify-content: center; }
      .hero h1 { font-size: 2rem; }
      .hero p { font-size: 1.1rem; }
      .service-info h2 { font-size: 1.8rem; }
      .cta h3 { font-size: 1.8rem; }
      .btn { display: block; margin: 10px auto; max-width: 250px; }
      .service-grid { grid-template-columns: 1fr; gap: 2rem; }
      .trust-grid { grid-template-columns: 1fr; }
      .area-grid { grid-template-columns: 1fr; }
    }
    
    @media (max-width: 480px) {
      .hero { padding: 60px 0 40px; }
      .hero h1 { font-size: 1.8rem; }
      .service-list li { padding-left: 1.5rem; }
      .navbar-menu { flex-direction: column; gap: 0.5rem; }
      .area-item { padding: 0.5rem; }
    }
  </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a href="/" class="logo-link">
            <img src="../../img/hha_heart.png" alt="Heartland Heating + Air" class="logo">
            <div class="brand-name">
              <span class="logo-text">HEARTLAND</span>
              <span class="logo-tagline">HEATING <span class="plus-symbol">+</span> AIR</span>
            </div>
          </a>
        </div>
        <div class="navbar-menu">
          <a href="/" class="nav-link">Home</a>
          <a href="/#services" class="nav-link">Services</a>
          <a href="/#service-areas" class="nav-link">Service Areas</a>
          <a href="/#contact" class="nav-link">Contact</a>
          <a href="tel:(317) 555-0123" class="nav-link phone">(317) 555-0123</a>
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>${service.title} ${location.name} IN</h1>
            <p>${service.longDescription}</p>
            <a href="tel:(317) 555-0123" class="btn emergency">
                Call (317) 555-0123
            </a>
            <a href="/#contact" class="btn">
                Get Free Quote
            </a>
        </div>
    </section>

    <!-- Service Info -->
    <section class="service-info">
        <div class="container">
            <h2>Professional ${service.title} in ${location.name}</h2>
            <div class="service-grid">
                <div>
                    <ul class="service-list">
                        ${featuresList}
                    </ul>
                </div>
                <div class="service-image">
                    <img src="../../img/${service.image}" alt="${service.altImage} in ${location.name}">
                </div>
            </div>
        </div>
    </section>

    <!-- Trust Signals -->
    <section class="trust-signals">
        <div class="container">
            <h3>Why Choose Heartland Heating + Air in ${location.name}?</h3>
            <div class="trust-grid">
                <div class="trust-item">
                    <h4>🇺🇸 American Pride</h4>
                    <p>Patriotic values, American-made equipment, veteran-owned business</p>
                </div>
                <div class="trust-item">
                    <h4>⚡ ${service.serviceTime.includes('same') ? 'Same-Day Service' : 'Fast Service'}</h4>
                    <p>${service.serviceTime.includes('same') ? 'Emergency service when you need it most - no waiting' : 'Professional service with minimal disruption'}</p>
                </div>
                <div class="trust-item">
                    <h4>🛡️ Google Guaranteed</h4>
                    <p>Protected by Google's service guarantee for your peace of mind</p>
                </div>
                <div class="trust-item">
                    <h4>🏆 Certified Technicians</h4>
                    <p>EPA and NATE certified professionals with years of experience</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Service Area -->
    <section class="service-area">
        <div class="container">
            <h3>${location.name} Service Areas</h3>
            <p>We proudly serve ${location.name} and surrounding communities within ${location.radius}.</p>
            <div class="area-grid">
                ${areaGrid}
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="cta">
        <div class="container">
            <h3>Need ${service.shortTitle} in ${location.name}?</h3>
            <p>Contact Heartland Heating + Air today for reliable, efficient ${service.shortTitle.toLowerCase()} with American pride.</p>
            <a href="tel:(317) 555-0123" class="btn emergency">
                Call (317) 555-0123
            </a>
            <a href="/#contact" class="btn">
                Get Free Quote
            </a>
            <p class="cta-note">Serving ${location.name} and surrounding areas within ${location.radius} • 24/7 Emergency Service Available</p>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <a href="/" class="footer-logo-section" style="text-decoration: none;">
              <img src="../../img/hha_heart.png" alt="Heartland Heating + Air" class="footer-logo">
              <span class="footer-brand-name">HEARTLAND HEATING + AIR</span>
            </a>
            <p>Professional HVAC services in the heart of the Midwest</p>
          </div>
          <div class="footer-contact">
            <h3>Contact Us</h3>
            <p><a href="tel:(317) 555-0123">(317) 555-0123</a></p>
            <p><a href="mailto:info@heartlandheatingair.com">info@heartlandheatingair.com</a></p>
          </div>
          <div class="footer-services">
            <h3>Services</h3>
            <ul>
              <li><a href="/services/hvac-repair.html">HVAC Repair</a></li>
              <li><a href="/services/furnace-installation.html">Furnace Installation</a></li>
              <li><a href="/services/ac-repair.html">AC Service</a></li>
              <li><a href="/services/maintenance-plans.html">Maintenance</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 Heartland Heating + Air. All rights reserved.</p>
        </div>
      </div>
    </footer>
  
</body>
</html>`;
}

// Generate all location pages
function generateAllLocationPages() {
  const locationsDir = path.join(__dirname, '../public/locations');

  Object.keys(locations).forEach(locationKey => {
    const locationDir = path.join(locationsDir, locationKey);

    if (!fs.existsSync(locationDir)) {
      fs.mkdirSync(locationDir, { recursive: true });
    }

    Object.keys(services).forEach(serviceKey => {
      const filePath = path.join(locationDir, `${serviceKey}.html`);
      const content = generateLocationPage(locationKey, serviceKey);

      fs.writeFileSync(filePath, content);
      console.log(`Generated: ${locationKey}/${serviceKey}.html`);
    });
  });

  console.log('\n✅ All location pages have been optimized with:');
  console.log('• Long-tail SEO optimization');
  console.log('• Patriotic positioning elements');
  console.log('• Compact, modern design');
  console.log('• Local imagery integration');
  console.log('• Enhanced trust signals');
  console.log('• Improved service area information');
  console.log('• Completely redesigned area items with icons and better styling');
  console.log('• Fixed footer links to point to correct service pages');
  console.log('• Logo and brand name now link to main page only');
}

// Run the script
generateAllLocationPages(); 