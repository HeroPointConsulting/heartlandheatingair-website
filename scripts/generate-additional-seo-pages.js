const fs = require('fs');
const path = require('path');

// Import location data
const { locations, businessInfo } = require('../public/data/locations.js');

// Additional SEO pages to generate
const additionalPages = [
  {
    slug: 'furnace-repair',
    title: 'Furnace Repair',
    description: 'Professional furnace repair services',
    keywords: ['furnace repair', 'heating repair', 'gas furnace repair', 'electric furnace repair', 'furnace not working']
  },
  {
    slug: 'air-conditioner-repair',
    title: 'Air Conditioner Repair',
    description: 'Professional air conditioner repair services',
    keywords: ['air conditioner repair', 'ac repair', 'central air repair', 'ac not cooling', 'air conditioner not working']
  },
  {
    slug: 'hvac-installation',
    title: 'HVAC Installation',
    description: 'Complete HVAC system installation services',
    keywords: ['hvac installation', 'new hvac system', 'hvac replacement', 'central air installation', 'heating installation']
  },
  {
    slug: 'hvac-maintenance-plans',
    title: 'HVAC Maintenance Plans',
    description: 'Comprehensive HVAC maintenance plans and service agreements',
    keywords: ['hvac maintenance plan', 'maintenance agreement', 'hvac service plan', 'preventive maintenance', 'tune up plan']
  },
  {
    slug: 'indoor-air-quality',
    title: 'Indoor Air Quality',
    description: 'Indoor air quality solutions and air purification systems',
    keywords: ['indoor air quality', 'air purification', 'air filtration', 'duct cleaning', 'air quality testing']
  }
];

// Generate additional SEO pages for each location
function generateAdditionalPages() {
  console.log('Generating additional SEO pages...');

  Object.keys(locations).forEach(locationSlug => {
    const location = locations[locationSlug];

    additionalPages.forEach(page => {
      const seoPage = createSEOPage(location, page);

      // Create location directory if it doesn't exist
      const locationDir = path.join(__dirname, '../public/locations', locationSlug);
      if (!fs.existsSync(locationDir)) {
        fs.mkdirSync(locationDir, { recursive: true });
      }

      // Write the SEO page
      const filePath = path.join(locationDir, `${page.slug}.html`);
      fs.writeFileSync(filePath, seoPage);
      console.log(`Created: ${filePath}`);
    });
  });

  console.log('Additional SEO pages generated successfully!');
}

function createSEOPage(location, page) {
  const title = `${page.title} ${location.name}, ${location.stateAbbr} | ${businessInfo.name}`;
  const description = `${page.description} in ${location.name}, ${location.stateAbbr}. Professional service, same-day availability, American-made equipment. Call ${businessInfo.phone} today.`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="keywords" content="${page.keywords.join(', ')}, ${location.name} ${page.slug}, ${location.name} hvac">
  
  <!-- Open Graph -->
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://heartlandheatingair.com/locations/${location.name.toLowerCase()}/${page.slug}">
  
  <!-- Schema Markup -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "${businessInfo.name}",
    "description": "${page.title} in ${location.name}, ${location.stateAbbr}",
    "telephone": "${businessInfo.phone}",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "${location.name}",
      "addressRegion": "${location.stateAbbr}",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": ${location.coordinates.lat},
      "longitude": ${location.coordinates.lng}
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": ${location.coordinates.lat},
        "longitude": ${location.coordinates.lng}
      },
      "geoRadius": "${location.serviceRadius}"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "${page.title}",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "${page.title}",
            "description": "${page.description}"
          }
        }
      ]
    }
  }
  </script>
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://heartlandheatingair.com/locations/${location.name.toLowerCase()}/${page.slug}">
  
  <!-- CSS -->
  <link rel="stylesheet" href="/styles.css">
  <link rel="stylesheet" href="/components/Navbar.css">
  <link rel="stylesheet" href="/components/ServicePage.css">
  <link rel="stylesheet" href="/components/Footer.css">
  <link rel="stylesheet" href="/components/FloatingButtons.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body>
  <!-- Navbar Component Container -->
  <div id="navbar-component-container"></div>

  <!-- Hero Section -->
  <section class="service-hero">
    <div class="service-hero-background">
      <img src="/img/slideshow-1.png" alt="${page.title} ${location.name}" class="service-hero-image">
      <div class="service-hero-overlay"></div>
    </div>
    
    <div class="service-hero-layout">
      <div class="service-hero-content">
        <div class="service-hero-text">
          <h1 class="service-hero-headline">
            ${page.title} in ${location.name}
          </h1>
          <div class="service-hero-meta">
            <p class="service-hero-subtitle">
              ${page.description}
            </p>
            <p class="service-hero-tagline">
              24/7 Emergency Service • Licensed & Insured • Google Guaranteed
            </p>
          </div>
        </div>
        
        <div class="service-hero-actions">
          <a href="tel:${businessInfo.phone.replace(/[()\s-]/g, '')}" class="btn btn-secondary btn-hero">
            <i class="fas fa-phone"></i>
            Call Now: ${businessInfo.phone}
          </a>
          <a href="/contact.html" class="btn btn-outline btn-hero">
            <i class="fas fa-calendar"></i>
            Get Quote
          </a>
          <div class="service-hero-location">
            <span>Serving ${location.name} & Surrounding Areas</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Service Content -->
  <section class="service-content">
    <div class="container">
      <div class="content-grid">
        <div class="main-content">
          <h2>${page.title} Services in ${location.name}</h2>
          <p>Professional ${page.title.toLowerCase()} services in ${location.name}, ${location.stateAbbr}. Our experienced technicians provide reliable, efficient service with American-made equipment and parts.</p>
          
          <h3>Why Choose Heartland for ${page.title} in ${location.name}?</h3>
          <div class="benefits-grid">
            <div class="benefit">
              <div class="benefit-icon">
                <i class="fas fa-clock"></i>
              </div>
              <h4>24/7 Availability</h4>
              <p>Emergency service available anytime, day or night.</p>
            </div>
            <div class="benefit">
              <div class="benefit-icon">
                <i class="fas fa-tools"></i>
              </div>
              <h4>Expert Technicians</h4>
              <p>Licensed, certified professionals with years of experience.</p>
            </div>
            <div class="benefit">
              <div class="benefit-icon">
                <i class="fas fa-star"></i>
              </div>
              <h4>Quality Service</h4>
              <p>American-made equipment and parts for lasting reliability.</p>
            </div>
            <div class="benefit">
              <div class="benefit-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <h4>Local Service</h4>
              <p>Serving ${location.name} and surrounding areas with fast response times.</p>
            </div>
          </div>
          
          <h3>Service Areas</h3>
          <p>We provide ${page.title.toLowerCase()} services throughout ${location.name} and the surrounding areas. Our service radius covers ${location.serviceRadius} from ${location.name}.</p>
          
          <ul class="service-list">
            <li>${location.name} - ${location.nickname}</li>
            ${location.keyNeighborhoods.map(neighborhood => `<li>${neighborhood}</li>`).join('')}
            <li>Surrounding communities within ${location.serviceRadius}</li>
          </ul>
        </div>
        
        <div class="sidebar">
          <div class="pricing-card">
            <h3>Service Pricing</h3>
            <div class="pricing-item">
              <span class="pricing-label">Service Call</span>
              <span class="pricing-value">$150</span>
            </div>
            <div class="pricing-item">
              <span class="pricing-label">Repair</span>
              <span class="pricing-value">$200-$500</span>
            </div>
            <div class="pricing-item">
              <span class="pricing-label">Installation</span>
              <span class="pricing-value">$3,000-$6,000</span>
            </div>
            <p class="pricing-note">Pricing varies based on system size and requirements. Contact us for a free estimate.</p>
          </div>
          
          <div class="service-areas">
            <h3>Service Areas</h3>
            <div class="areas-list">
              <span class="area-tag">${location.name}</span>
              ${location.keyNeighborhoods.map(neighborhood => `<span class="area-tag">${neighborhood}</span>`).join('')}
              <span class="area-tag">${location.serviceRadius} Radius</span>
            </div>
          </div>
          
          <div class="cta-card">
            <h3>Ready to Get Started?</h3>
            <p>Contact us today for professional ${page.title.toLowerCase()} services in ${location.name}.</p>
            <a href="tel:${businessInfo.phone.replace(/[()\s-]/g, '')}" class="btn btn-primary">Call Now</a>
            <a href="/contact.html" class="btn btn-secondary">Get Quote</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer Component Container -->
  <footer></footer>

  <!-- Main JavaScript -->
  <script src="/main.js" type="module"></script>
</body>
</html>`;
}

// Run the generator
generateAdditionalPages(); 