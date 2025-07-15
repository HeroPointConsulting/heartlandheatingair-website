#!/usr/bin/env node
/**
 * Location Page Generator for Long-Tail SEO
 * Generates static HTML pages for each location-service combination
 */

const fs = require('fs');
const path = require('path');

// Location data embedded directly in the script
const locations = {
  indianapolis: {
    name: "Indianapolis",
    state: "Indiana",
    stateAbbr: "IN",
    zipCodes: ["46201", "46202", "46203", "46204", "46205"],
    coordinates: { lat: 39.7684, lng: -86.1581 },
    population: "887,000",
    nickname: "Circle City",
    serviceRadius: "30 miles",
    keyNeighborhoods: ["Downtown", "Broad Ripple", "Fountain Square", "Mass Ave", "Meridian-Kessler"],
    localLandmarks: ["Indianapolis Motor Speedway", "Monument Circle", "White River State Park"]
  },
  carmel: {
    name: "Carmel",
    state: "Indiana", 
    stateAbbr: "IN",
    zipCodes: ["46032", "46033", "46074"],
    coordinates: { lat: 39.9784, lng: -86.1180 },
    population: "99,000",
    nickname: "The Roundabout City",
    serviceRadius: "25 miles",
    keyNeighborhoods: ["Arts & Design District", "Village of WestClay", "Meridian Hills"],
    localLandmarks: ["Carmel Arts & Design District", "Clay Terrace", "Monon Trail"]
  },
  fishers: {
    name: "Fishers",
    state: "Indiana",
    stateAbbr: "IN", 
    zipCodes: ["46037", "46038"],
    coordinates: { lat: 39.9568, lng: -85.9685 },
    population: "95,000",
    nickname: "The Entrepreneurial City",
    serviceRadius: "25 miles",
    keyNeighborhoods: ["Geist", "Hamilton Southeastern", "Fishers Station"],
    localLandmarks: ["Geist Reservoir", "Conner Prairie", "Fishers Event Center"]
  },
  westfield: {
    name: "Westfield",
    state: "Indiana",
    stateAbbr: "IN",
    zipCodes: ["46074"],
    coordinates: { lat: 40.0431, lng: -86.1276 },
    population: "45,000",
    nickname: "Welcome Home",
    serviceRadius: "20 miles",
    keyNeighborhoods: ["Grand Park", "Chatham Hills", "Wood Valley"],
    localLandmarks: ["Grand Park Sports Complex", "Westfield Washington Township"]
  },
  noblesville: {
    name: "Noblesville",
    state: "Indiana",
    stateAbbr: "IN",
    zipCodes: ["46060", "46061", "46062"],
    coordinates: { lat: 40.0456, lng: -86.0086 },
    population: "69,000",
    nickname: "The Heart of Hamilton County",
    serviceRadius: "25 miles",
    keyNeighborhoods: ["Old Town", "Harbour Trees", "Pebble Brook"],
    localLandmarks: ["Conner Prairie", "Ruoff Music Center", "White River"]
  }
};

const services = {
  "hvac-repair": {
    name: "HVAC Repair",
    shortName: "HVAC Repair",
    description: "Professional heating and cooling system repair services",
    longTailKeywords: [
      "emergency hvac repair",
      "furnace repair",
      "air conditioner repair", 
      "heating system repair",
      "cooling system repair",
      "hvac technician",
      "same day hvac repair"
    ],
    urgencyLevel: "emergency",
    averagePrice: "$150-$400",
    serviceTime: "Same day"
  },
  "furnace-installation": {
    name: "Furnace Installation",
    shortName: "Furnace Installation",
    description: "Complete furnace installation and replacement services",
    longTailKeywords: [
      "new furnace installation",
      "furnace replacement",
      "high efficiency furnace",
      "gas furnace installation",
      "electric furnace installation",
      "furnace upgrade"
    ],
    urgencyLevel: "planned",
    averagePrice: "$3,000-$6,000",
    serviceTime: "1-2 days"
  },
  "air-conditioning-service": {
    name: "Air Conditioning Service",
    shortName: "AC Service",
    description: "Complete air conditioning installation, repair, and maintenance",
    longTailKeywords: [
      "ac installation",
      "central air conditioning",
      "air conditioner replacement",
      "ac maintenance",
      "cooling system service",
      "ac unit repair"
    ],
    urgencyLevel: "seasonal",
    averagePrice: "$200-$500",
    serviceTime: "Same day"
  },
  "hvac-maintenance": {
    name: "HVAC Maintenance",
    shortName: "HVAC Maintenance", 
    description: "Preventive maintenance to keep your HVAC system running efficiently",
    longTailKeywords: [
      "hvac tune up",
      "seasonal maintenance",
      "preventive maintenance",
      "hvac inspection",
      "system cleaning",
      "maintenance plan"
    ],
    urgencyLevel: "routine",
    averagePrice: "$150-$300",
    serviceTime: "2-4 hours"
  },
  "duct-cleaning": {
    name: "Duct Cleaning",
    shortName: "Duct Cleaning",
    description: "Professional air duct cleaning and sanitization services",
    longTailKeywords: [
      "air duct cleaning",
      "ductwork cleaning",
      "dryer vent cleaning",
      "indoor air quality",
      "duct sanitization",
      "air quality improvement"
    ],
    urgencyLevel: "maintenance",
    averagePrice: "$300-$600",
    serviceTime: "3-5 hours"
  }
};

const businessInfo = {
  name: "Heartland Heating & Air",
  phone: "(317) 555-0123",
  email: "info@heartlandheatingair.com",
  address: "123 Main Street, Indianapolis, IN 46201",
  hours: "24/7 Emergency Service",
  established: "2015",
  googleGuarantee: true,
  certifications: ["EPA Certified", "NATE Certified", "BBB A+ Rating"],
  emergencyService: true
};

// HTML Template for location-service pages
function generateLocationServicePage(locationKey, serviceKey, location, service) {
  const pageTitle = `${service.name} in ${location.name}, ${location.stateAbbr} | ${businessInfo.name}`;
  const metaDescription = `Professional ${service.shortName.toLowerCase()} services in ${location.name}, ${location.state}. ${businessInfo.name} offers ${service.serviceTime.toLowerCase()} ${service.shortName.toLowerCase()} with ${businessInfo.certifications[0]}. Call ${businessInfo.phone}!`;

  const canonicalUrl = `https://heartlandheatingair.com/locations/${locationKey}/${serviceKey}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageTitle}</title>
    <meta name="description" content="${metaDescription}">
    <link rel="canonical" href="${canonicalUrl}">
    
    <!-- Local SEO Meta Tags -->
    <meta name="geo.region" content="US-${location.stateAbbr}">
    <meta name="geo.placename" content="${location.name}">
    <meta name="geo.position" content="${location.coordinates.lat};${location.coordinates.lng}">
    <meta name="ICBM" content="${location.coordinates.lat}, ${location.coordinates.lng}">
    
    <!-- Open Graph -->
    <meta property="og:title" content="${pageTitle}">
    <meta property="og:description" content="${metaDescription}">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="en_US">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${pageTitle}">
    <meta name="twitter:description" content="${metaDescription}">
    
    <!-- Schema.org Local Business JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "${businessInfo.name}",
      "image": "https://heartlandheatingair.com/img/logo.png",
      "description": "${service.description} in ${location.name}, ${location.state}",
      "telephone": "${businessInfo.phone}",
      "email": "${businessInfo.email}",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "${location.name}",
        "addressRegion": "${location.stateAbbr}",
        "postalCode": "${location.zipCodes[0]}",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": ${location.coordinates.lat},
        "longitude": ${location.coordinates.lng}
      },
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "${service.averagePrice}",
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
        "name": "${service.name} Services",
        "itemListElement": {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "${service.name}",
            "description": "${service.description}",
            "provider": {
              "@type": "LocalBusiness",
              "name": "${businessInfo.name}"
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
                Heartland Heating & Air
            </a>
            
            <ul class="nav-menu">
                <li><a href="/#services">Services</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#testimonials">Reviews</a></li>
                <li><a href="/#contact">Contact</a></li>
                <li><a href="tel:${businessInfo.phone}" class="nav-phone">
                    <i class="fas fa-phone"></i> ${businessInfo.phone}
                </a></li>
            </ul>
        </div>
    </nav>

    <!-- Location-Service Hero Section -->
    <section class="location-hero">
        <div class="container">
            <div class="hero-content">
                <h1>${service.name} in ${location.name}, ${location.state}</h1>
                <p class="hero-subtitle">
                    Professional ${service.shortName.toLowerCase()} services for ${location.name} residents and businesses. 
                    ${businessInfo.name} provides ${service.serviceTime.toLowerCase()} service with ${businessInfo.certifications.join(', ')}.
                </p>
                
                <div class="hero-features">
                    <div class="feature">
                        <i class="fas fa-clock"></i>
                        <span>${service.serviceTime}</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-dollar-sign"></i>
                        <span>${service.averagePrice}</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-shield-alt"></i>
                        <span>Google Guaranteed</span>
                    </div>
                </div>
                
                <div class="hero-cta">
                    <a href="tel:${businessInfo.phone}" class="btn btn-primary">
                        <i class="fas fa-phone"></i> Call Now: ${businessInfo.phone}
                    </a>
                    <a href="#contact" class="btn btn-secondary">Get Free Quote</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Service Details -->
    <section class="service-details">
        <div class="container">
            <h2>Professional ${service.name} Services in ${location.name}</h2>
            
            <div class="service-grid">
                <div class="service-info">
                    <h3>What We Offer</h3>
                    <p>${service.description} for ${location.name} homeowners and businesses. Our certified technicians provide:</p>
                    <ul>
                        ${service.longTailKeywords.map(keyword => `<li>${keyword.charAt(0).toUpperCase() + keyword.slice(1)}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="location-info">
                    <h3>Serving ${location.name}, ${location.state}</h3>
                    <p>We proudly serve ${location.name} (${location.nickname}) and surrounding areas within ${location.serviceRadius}.</p>
                    
                    <div class="location-details">
                        <div class="detail">
                            <strong>Population:</strong> ${location.population}
                        </div>
                        <div class="detail">
                            <strong>Key Areas:</strong> ${location.keyNeighborhoods.join(', ')}
                        </div>
                        <div class="detail">
                            <strong>Service Area:</strong> ${location.serviceRadius} radius
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-choose">
        <div class="container">
            <h2>Why Choose ${businessInfo.name} for ${service.name} in ${location.name}?</h2>
            
            <div class="benefits-grid">
                <div class="benefit">
                    <i class="fas fa-certificate"></i>
                    <h3>Certified Technicians</h3>
                    <p>${businessInfo.certifications.join(', ')} certified professionals</p>
                </div>
                <div class="benefit">
                    <i class="fas fa-clock"></i>
                    <h3>${service.serviceTime}</h3>
                    <p>Fast, reliable service when you need it most</p>
                </div>
                <div class="benefit">
                    <i class="fas fa-map-marker-alt"></i>
                    <h3>Local Expertise</h3>
                    <p>Serving ${location.name} since ${businessInfo.established}</p>
                </div>
                <div class="benefit">
                    <i class="fas fa-shield-alt"></i>
                    <h3>Google Guaranteed</h3>
                    <p>100% satisfaction guarantee on all work</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section">
        <div class="container">
            <h2>Ready for Professional ${service.name} in ${location.name}?</h2>
            <p>Contact ${businessInfo.name} today for fast, reliable ${service.shortName.toLowerCase()} service in ${location.name}, ${location.state}.</p>
            
            <div class="cta-buttons">
                <a href="tel:${businessInfo.phone}" class="btn btn-primary btn-large">
                    <i class="fas fa-phone"></i> Call ${businessInfo.phone}
                </a>
                <a href="#contact" class="btn btn-secondary btn-large">
                    <i class="fas fa-calendar"></i> Schedule Service
                </a>
            </div>
        </div>
    </section>

    <!-- Contact Form -->
    <section id="contact" class="contact-section">
        <div class="container">
            <h2>Get Your Free ${service.name} Quote</h2>
            
            <form class="contact-form" action="#" method="POST">
                <div class="form-group">
                    <input type="text" name="name" placeholder="Your Name*" required>
                </div>
                <div class="form-group">
                    <input type="tel" name="phone" placeholder="Phone Number*" required>
                </div>
                <div class="form-group">
                    <input type="email" name="email" placeholder="Email Address">
                </div>
                <div class="form-group">
                    <select name="service" required>
                        <option value="">Select Service*</option>
                        <option value="${serviceKey}">${service.name}</option>
                        <option value="hvac-repair">HVAC Repair</option>
                        <option value="furnace-installation">Furnace Installation</option>
                        <option value="air-conditioning-service">AC Service</option>
                        <option value="hvac-maintenance">HVAC Maintenance</option>
                        <option value="duct-cleaning">Duct Cleaning</option>
                    </select>
                </div>
                <div class="form-group">
                    <textarea name="details" placeholder="Project Details (Optional)" rows="4"></textarea>
                </div>
                <div class="form-group">
                    <input type="hidden" name="location" value="${location.name}">
                    <button type="submit" class="btn btn-primary">
                        <i class="fas fa-paper-plane"></i> Get Free Quote
                    </button>
                </div>
            </form>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>${businessInfo.name}</h3>
                    <p>Professional HVAC services in ${location.name} and surrounding areas.</p>
                    <p><i class="fas fa-phone"></i> ${businessInfo.phone}</p>
                    <p><i class="fas fa-envelope"></i> ${businessInfo.email}</p>
                </div>
                
                <div class="footer-section">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="hvac-repair.html">HVAC Repair</a></li>
                        <li><a href="furnace-installation.html">Furnace Installation</a></li>
                        <li><a href="air-conditioning-service.html">AC Service</a></li>
                        <li><a href="hvac-maintenance.html">HVAC Maintenance</a></li>
                        <li><a href="duct-cleaning.html">Duct Cleaning</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>Service Areas</h4>
                    <ul>
                        <li><a href="../indianapolis/">Indianapolis</a></li>
                        <li><a href="../carmel/">Carmel</a></li>
                        <li><a href="../fishers/">Fishers</a></li>
                        <li><a href="../westfield/">Westfield</a></li>
                        <li><a href="../noblesville/">Noblesville</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} ${businessInfo.name}. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script type="module" src="../../main.js"></script>
    
    <style>
        /* Location-specific styles */
        .location-hero {
            background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
            color: white;
            padding: 6rem 0 4rem;
            text-align: center;
        }
        
        .location-hero h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            font-weight: 700;
        }
        
        .hero-subtitle {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .hero-features {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
        }
        
        .feature {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(255, 255, 255, 0.1);
            padding: 0.8rem 1.5rem;
            border-radius: 2rem;
            backdrop-filter: blur(10px);
        }
        
        .hero-cta {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
        }
        
        .service-details {
            padding: 4rem 0;
            background: #f8fafc;
        }
        
        .service-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            margin-top: 2rem;
        }
        
        .location-details {
            margin-top: 1rem;
        }
        
        .detail {
            margin: 0.5rem 0;
        }
        
        .why-choose {
            padding: 4rem 0;
        }
        
        .benefits-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        
        .benefit {
            text-align: center;
            padding: 2rem;
            background: white;
            border-radius: 1rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .benefit i {
            font-size: 2.5rem;
            color: #3b82f6;
            margin-bottom: 1rem;
        }
        
        .cta-section {
            background: #1e3a8a;
            color: white;
            padding: 4rem 0;
            text-align: center;
        }
        
        .cta-buttons {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 2rem;
            flex-wrap: wrap;
        }
        
        .btn-large {
            font-size: 1.2rem;
            padding: 1rem 2rem;
        }
        
        @media (max-width: 768px) {
            .service-grid {
                grid-template-columns: 1fr;
            }
            
            .hero-features {
                flex-direction: column;
                align-items: center;
            }
            
            .location-hero h1 {
                font-size: 2rem;
            }
        }
    </style>
</body>
</html>`;
}

// Create directories and generate pages
function generateAllPages() {
  const publicDir = path.join(__dirname, '..', 'public');
  const locationsDir = path.join(publicDir, 'locations');

  // Create locations directory if it doesn't exist
  if (!fs.existsSync(locationsDir)) {
    fs.mkdirSync(locationsDir, { recursive: true });
  }

  let generatedPages = 0;

  // Generate pages for each location-service combination
  Object.entries(locations).forEach(([locationKey, location]) => {
    const locationDir = path.join(locationsDir, locationKey);

    // Create location directory
    if (!fs.existsSync(locationDir)) {
      fs.mkdirSync(locationDir, { recursive: true });
    }

    // Generate service pages for this location
    Object.entries(services).forEach(([serviceKey, service]) => {
      const pageContent = generateLocationServicePage(locationKey, serviceKey, location, service);
      const filePath = path.join(locationDir, `${serviceKey}.html`);

      fs.writeFileSync(filePath, pageContent);
      generatedPages++;

      console.log(`Generated: /locations/${locationKey}/${serviceKey}.html`);
    });
  });

  console.log(`\n✅ Generated ${generatedPages} location-service pages`);
  console.log(`📁 Pages created in: ${locationsDir}`);
}

// Generate sitemap
function generateSitemap() {
  const baseUrl = 'https://heartlandheatingair.com';
  const sitemapEntries = [`${baseUrl}/`];

  // Add location-service pages
  Object.keys(locations).forEach(locationKey => {
    Object.keys(services).forEach(serviceKey => {
      sitemapEntries.push(`${baseUrl}/locations/${locationKey}/${serviceKey}`);
    });
  });

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), sitemapXml);
  console.log(`📄 Generated sitemap.xml with ${sitemapEntries.length} URLs`);
}

// Run the generator
if (require.main === module) {
  console.log('🚀 Starting Location Page Generator...\n');
  generateAllPages();
  generateSitemap();
  console.log('\n🎉 Location SEO pages generated successfully!');
}

module.exports = { generateAllPages, generateSitemap }; 