const fs = require('fs');
const path = require('path');

// Location pages to update
const locations = ['carmel', 'fishers', 'westfield', 'noblesville'];
const services = ['hvac-repair', 'furnace-installation', 'air-conditioning-service', 'hvac-maintenance', 'duct-cleaning'];

// Template for location pages
const locationPageTemplate = (locationName, serviceName) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${serviceName} in ${locationName}, IN | Heartland Heating + Air</title>
    <meta name="description" content="Professional ${serviceName.toLowerCase()} services in ${locationName}, Indiana. Heartland Heating + Air offers same day service with EPA Certified. Call (317) 555-0123!">
    <link rel="canonical" href="https://heartlandheatingair.com/locations/${locationName.toLowerCase()}/${serviceName.toLowerCase()}">
    
    <!-- Local SEO Meta Tags -->
    <meta name="geo.region" content="US-IN">
    <meta name="geo.placename" content="${locationName}">
    <meta name="geo.position" content="39.7684;-86.1581">
    <meta name="ICBM" content="39.7684, -86.1581">
    
    <!-- Open Graph -->
    <meta property="og:title" content="${serviceName} in ${locationName}, IN | Heartland Heating + Air">
    <meta property="og:description" content="Professional ${serviceName.toLowerCase()} services in ${locationName}, Indiana. Heartland Heating + Air offers same day service with EPA Certified. Call (317) 555-0123!">
    <meta property="og:url" content="https://heartlandheatingair.com/locations/${locationName.toLowerCase()}/${serviceName.toLowerCase()}">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="en_US">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${serviceName} in ${locationName}, IN | Heartland Heating + Air">
    <meta name="twitter:description" content="Professional ${serviceName.toLowerCase()} services in ${locationName}, Indiana. Heartland Heating + Air offers same day service with EPA Certified. Call (317) 555-0123!">
    
    <!-- Schema.org Local Business JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Heartland Heating + Air",
      "image": "https://heartlandheatingair.com/img/logo.png",
      "description": "Professional ${serviceName.toLowerCase()} services in ${locationName}, Indiana",
      "telephone": "(317) 555-0123",
      "email": "info@heartlandheatingair.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "${locationName}",
        "addressRegion": "IN",
        "postalCode": "46032",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 39.7684,
        "longitude": -86.1581
      },
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "$150-$400",
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 39.7684,
          "longitude": -86.1581
        },
        "geoRadius": "30 miles"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "${serviceName} Services",
        "itemListElement": {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "${serviceName}",
            "description": "Professional ${serviceName.toLowerCase()} services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Heartland Heating + Air"
            }
          }
        }
      }
    }
    </script>
    
    <!-- Styles -->
    <link rel="stylesheet" href="../../styles.css">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <a href="/" class="nav-logo">
                <i class="fas fa-snowflake"></i>
                Heartland Heating + Air
            </a>
            
            <ul class="nav-menu">
                <li><a href="/#services">Services</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#testimonials">Reviews</a></li>
                <li><a href="/#contact">Contact</a></li>
                <li><a href="tel:(317) 555-0123" class="nav-phone">
                    <i class="fas fa-phone"></i> (317) 555-0123
                </a></li>
            </ul>
        </div>
    </nav>

    <!-- Location Page Container -->
    <div id="location-page-container">
        <!-- Location Hero Section -->
        <div id="location-hero-container"></div>
        
        <!-- Location Content Section -->
        <div id="location-content-container"></div>
        
        <!-- Location Benefits Section -->
        <div id="location-benefits-container"></div>
        
        <!-- Service Details Section -->
        <div id="service-details-container"></div>
        
        <!-- Local CTA Section -->
        <div id="local-cta-container"></div>
        
        <!-- Location Trust Signals Section -->
        <div id="location-trust-container"></div>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Heartland Heating + Air</h3>
                    <p>Professional HVAC services in Indianapolis and surrounding areas.</p>
                    <div class="footer-contact">
                        <p><i class="fas fa-phone"></i> (317) 555-0123</p>
                        <p><i class="fas fa-envelope"></i> info@heartlandheatingair.com</p>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="/services/ac-repair.html">AC Repair</a></li>
                        <li><a href="/services/furnace-installation.html">Furnace Installation</a></li>
                        <li><a href="/services/emergency-service.html">Emergency Service</a></li>
                        <li><a href="/services/maintenance-plans.html">Maintenance Plans</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>Service Areas</h4>
                    <ul>
                        <li><a href="/locations/indianapolis/hvac-repair.html">Indianapolis</a></li>
                        <li><a href="/locations/carmel/hvac-repair.html">Carmel</a></li>
                        <li><a href="/locations/fishers/hvac-repair.html">Fishers</a></li>
                        <li><a href="/locations/westfield/hvac-repair.html">Westfield</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2025 Heartland Heating + Air. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Emergency Float Button -->
    <div class="emergency-float">
        <a href="tel:(317) 555-0123" class="emergency-btn">
            <i class="fas fa-phone"></i>
            Emergency Call
        </a>
    </div>

    <!-- Chat Widget -->
    <div class="chat-widget">
        <div class="chat-toggle" id="chatToggle">
            <i class="fas fa-comments"></i>
            <div class="chat-badge">1</div>
        </div>
        
        <div class="chat-popup" id="chatPopup">
            <div class="chat-header">
                <div class="chat-company">
                    <i class="fas fa-snowflake"></i>
                    Heartland Heating + Air
                </div>
                <button class="chat-close" id="chatClose">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="chat-content">
                <div class="chat-greeting">
                    <div class="greeting-avatar">
                        <i class="fas fa-user-tie"></i>
                    </div>
                    <div class="greeting-text">
                        <h4>Hi there! 👋</h4>
                        <p>How can we help you today?</p>
                    </div>
                </div>
                
                <div class="chat-options">
                    <div class="chat-option" data-action="call">
                        <i class="fas fa-phone"></i>
                        <span>Call Now</span>
                    </div>
                    <div class="chat-option" data-action="quote">
                        <i class="fas fa-calculator"></i>
                        <span>Get Quote</span>
                    </div>
                    <div class="chat-option" data-action="schedule">
                        <i class="fas fa-calendar"></i>
                        <span>Schedule Service</span>
                    </div>
                </div>
                
                <div class="chat-hours">
                    <p><i class="fas fa-clock"></i> Available 24/7 for emergencies</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Main JavaScript -->
    <script type="module" src="../../main.js"></script>
</body>
</html>`;

// Service name mappings
const serviceNames = {
  'hvac-repair': 'HVAC Repair',
  'furnace-installation': 'Furnace Installation',
  'air-conditioning-service': 'Air Conditioning Service',
  'hvac-maintenance': 'HVAC Maintenance',
  'duct-cleaning': 'Duct Cleaning'
};

// Update location pages
locations.forEach(location => {
  services.forEach(service => {
    const fileName = `${service}.html`;
    const filePath = path.join(__dirname, '../public/locations', location, fileName);
    const serviceName = serviceNames[service];

    if (serviceName) {
      // Ensure directory exists
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      const content = locationPageTemplate(location, serviceName);
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${location}/${fileName}`);
    }
  });
});

console.log('All location pages updated successfully!'); 