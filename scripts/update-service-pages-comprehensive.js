const fs = require('fs');
const path = require('path');

// Service configurations with comprehensive content
const services = {
  'ac-repair': {
    title: 'AC Repair & Replacement Indianapolis | Heartland Heating + Air',
    description: 'Professional AC repair and replacement in Indianapolis. Fast, reliable service for all air conditioning systems. Available 24/7 for emergencies!',
    canonicalUrl: 'https://heartlandheatingair.com/services/ac-repair',
    hero: {
      title: 'Professional AC Repair & Replacement',
      subtitle: 'American-Made Comfort Solutions for the Heart of the Midwest',
      features: ['24/7 Emergency Service', 'Same-Day Repairs', 'Google Guaranteed', 'EPA Certified Technicians']
    },
    content: {
      overview: 'Heartland Heating + Air delivers exceptional air conditioning repair and replacement services throughout the Midwest. Our certified technicians specialize in American-made equipment, providing reliable solutions that keep your family comfortable year-round.',
      services: [
        'Emergency AC repair and diagnostics',
        'Complete AC system replacement',
        'Refrigerant leak detection and repair',
        'Compressor and condenser unit service',
        'Thermostat installation and programming',
        'Ductwork inspection and repair',
        'Energy efficiency optimization',
        'Smart thermostat integration'
      ],
      benefits: [
        {
          icon: 'fas fa-certificate',
          title: 'Certified Excellence',
          description: 'EPA Certified, NATE Certified technicians with BBB A+ Rating'
        },
        {
          icon: 'fas fa-clock',
          title: '24/7 Emergency Response',
          description: 'Same-day service available for urgent cooling emergencies'
        },
        {
          icon: 'fas fa-shield-alt',
          title: 'Google Guaranteed',
          description: 'Service protection backed by Google for your peace of mind'
        },
        {
          icon: 'fas fa-dollar-sign',
          title: 'Transparent Pricing',
          description: 'Upfront pricing with no hidden fees or surprise charges'
        }
      ],
      pricing: {
        title: 'Transparent AC Service Pricing',
        ranges: [
          'AC Repair: $150 - $400',
          'AC Tune-Up: $89 - $149',
          'AC Replacement: $3,500 - $8,000',
          'Emergency Service: $200 - $500'
        ]
      }
    }
  },
  'furnace-installation': {
    title: 'Furnace Installation Indianapolis | Heartland Heating + Air',
    description: 'Professional furnace installation in Indianapolis. Fast, reliable service for all HVAC systems. Available 24/7 for emergencies!',
    canonicalUrl: 'https://heartlandheatingair.com/services/furnace-installation',
    hero: {
      title: 'Professional Furnace Installation',
      subtitle: 'American-Made Heating Solutions for Midwest Homes',
      features: ['High-Efficiency Systems', 'Same-Day Installation', 'Google Guaranteed', '10-Year Warranty']
    },
    content: {
      overview: 'Heartland Heating + Air specializes in premium furnace installation using American-made equipment. Our certified technicians ensure proper sizing, installation, and optimization for maximum efficiency and comfort in your Midwest home.',
      services: [
        'High-efficiency furnace installation',
        'Gas and electric furnace replacement',
        'Ductwork design and installation',
        'Thermostat upgrade and programming',
        'Energy efficiency consultation',
        'Smart home integration',
        'Warranty registration assistance',
        'Post-installation maintenance plans'
      ],
      benefits: [
        {
          icon: 'fas fa-fire',
          title: 'High-Efficiency Systems',
          description: 'Up to 98% AFUE rating for maximum energy savings'
        },
        {
          icon: 'fas fa-tools',
          title: 'Expert Installation',
          description: 'NATE Certified technicians with 10+ years experience'
        },
        {
          icon: 'fas fa-shield-alt',
          title: 'Extended Warranties',
          description: '10-year parts and labor warranty on all installations'
        },
        {
          icon: 'fas fa-home',
          title: 'American-Made Quality',
          description: 'Premium equipment from trusted American manufacturers'
        }
      ],
      pricing: {
        title: 'Furnace Installation Pricing',
        ranges: [
          'High-Efficiency Gas Furnace: $3,500 - $6,500',
          'Electric Furnace: $2,500 - $4,500',
          'Dual Fuel System: $5,500 - $8,500',
          'Ductwork Replacement: $2,000 - $5,000'
        ]
      }
    }
  },
  'emergency-service': {
    title: '24/7 Emergency HVAC Service Indianapolis | Heartland Heating + Air',
    description: '24/7 emergency HVAC service in Indianapolis. Fast response for heating and cooling emergencies. Available anytime, day or night!',
    canonicalUrl: 'https://heartlandheatingair.com/services/emergency-service',
    hero: {
      title: '24/7 Emergency HVAC Service',
      subtitle: 'Rapid Response When You Need It Most',
      features: ['24/7 Availability', '1-Hour Response', 'Google Guaranteed', 'Emergency Pricing']
    },
    content: {
      overview: 'When your comfort system fails, Heartland Heating + Air responds immediately. Our emergency service team is available 24/7, 365 days a year, providing rapid response and reliable solutions for urgent heating and cooling emergencies.',
      services: [
        '24/7 emergency heating repair',
        'Emergency AC repair and diagnostics',
        'No-heat emergency service',
        'Frozen pipe and burst pipe response',
        'Carbon monoxide detection and repair',
        'Emergency thermostat replacement',
        'Temporary heating solutions',
        'Emergency system bypass installation'
      ],
      benefits: [
        {
          icon: 'fas fa-phone',
          title: '1-Hour Response Time',
          description: 'Average response time of 60 minutes or less'
        },
        {
          icon: 'fas fa-clock',
          title: '24/7 Availability',
          description: 'Available every day, including holidays and weekends'
        },
        {
          icon: 'fas fa-truck',
          title: 'Fully Equipped',
          description: 'Service vehicles stocked with common repair parts'
        },
        {
          icon: 'fas fa-shield-alt',
          title: 'Emergency Protection',
          description: 'Google Guaranteed service with emergency pricing'
        }
      ],
      pricing: {
        title: 'Emergency Service Pricing',
        ranges: [
          'Emergency Diagnostic: $150 - $200',
          'Emergency Repair: $200 - $500',
          'After-Hours Service: +$100',
          'Holiday Emergency: +$150'
        ]
      }
    }
  },
  'commercial-hvac': {
    title: 'Commercial HVAC Services Indianapolis | Heartland Heating + Air',
    description: 'Professional commercial HVAC services in Indianapolis. Complete solutions for businesses and properties. Available 24/7 for emergencies!',
    canonicalUrl: 'https://heartlandheatingair.com/services/commercial-hvac',
    hero: {
      title: 'Commercial HVAC Solutions',
      subtitle: 'Reliable Climate Control for Midwest Businesses',
      features: ['Property Management', 'Multi-Site Service', 'Preventive Maintenance', 'Energy Audits']
    },
    content: {
      overview: 'Heartland Heating + Air provides comprehensive commercial HVAC solutions for property managers, business owners, and facility managers throughout the Midwest. Our scalable services ensure optimal performance and energy efficiency for your commercial properties.',
      services: [
        'Commercial HVAC installation and replacement',
        'Property management HVAC services',
        'Multi-site maintenance programs',
        'Energy efficiency audits and optimization',
        'Building automation system integration',
        'Indoor air quality solutions',
        'Emergency repair and response',
        'Preventive maintenance scheduling'
      ],
      benefits: [
        {
          icon: 'fas fa-building',
          title: 'Property Management Focus',
          description: 'Specialized services for multi-unit properties'
        },
        {
          icon: 'fas fa-chart-line',
          title: 'Energy Optimization',
          description: 'Reduce operating costs with efficiency audits'
        },
        {
          icon: 'fas fa-calendar-check',
          title: 'Preventive Programs',
          description: 'Customized maintenance schedules for your properties'
        },
        {
          icon: 'fas fa-map-marked-alt',
          title: 'Multi-Site Coverage',
          description: 'Consistent service across your entire portfolio'
        }
      ],
      pricing: {
        title: 'Commercial Service Pricing',
        ranges: [
          'Commercial Maintenance: $200 - $500/month',
          'Energy Audit: $500 - $1,500',
          'System Replacement: $15,000 - $50,000',
          'Emergency Service: $300 - $800'
        ]
      }
    }
  },
  'indoor-air-quality': {
    title: 'Indoor Air Quality Solutions Indianapolis | Heartland Heating + Air',
    description: 'Professional indoor air quality solutions in Indianapolis. Advanced purification and ventilation for healthier indoor air. Available 24/7!',
    canonicalUrl: 'https://heartlandheatingair.com/services/indoor-air-quality',
    hero: {
      title: 'Indoor Air Quality Solutions',
      subtitle: 'Breathe Easier with Advanced Air Purification',
      features: ['Whole-Home Purification', 'Allergy Relief', 'Virus Protection', 'Energy Efficient']
    },
    content: {
      overview: 'Heartland Heating + Air delivers advanced indoor air quality solutions that protect your family\'s health and comfort. Our comprehensive approach addresses allergens, pollutants, and airborne contaminants for cleaner, healthier indoor air.',
      services: [
        'Whole-home air purification systems',
        'UV germicidal light installation',
        'HEPA filtration system upgrades',
        'Humidity control and dehumidification',
        'Ventilation system optimization',
        'Allergen and pollutant removal',
        'Air quality monitoring and testing',
        'Smart air quality control systems'
      ],
      benefits: [
        {
          icon: 'fas fa-lungs',
          title: 'Healthier Air',
          description: 'Remove 99.97% of airborne particles and allergens'
        },
        {
          icon: 'fas fa-shield-virus',
          title: 'Virus Protection',
          description: 'UV-C technology eliminates bacteria and viruses'
        },
        {
          icon: 'fas fa-leaf',
          title: 'Allergy Relief',
          description: 'Advanced filtration reduces allergy symptoms'
        },
        {
          icon: 'fas fa-thermometer-half',
          title: 'Humidity Control',
          description: 'Optimal humidity levels for comfort and health'
        }
      ],
      pricing: {
        title: 'Air Quality Solution Pricing',
        ranges: [
          'Air Purifier Installation: $800 - $2,500',
          'UV Light System: $400 - $800',
          'Humidity Control: $1,200 - $3,000',
          'Whole-Home System: $2,500 - $5,000'
        ]
      }
    }
  },
  'maintenance-plans': {
    title: 'HVAC Maintenance Plans Indianapolis | Heartland Heating + Air',
    description: 'Professional HVAC maintenance plans in Indianapolis. Preventive care to extend equipment life and efficiency. Available 24/7 for emergencies!',
    canonicalUrl: 'https://heartlandheatingair.com/services/maintenance-plans',
    hero: {
      title: 'HVAC Maintenance Plans',
      subtitle: 'Protect Your Investment with Preventive Care',
      features: ['Priority Service', 'Energy Savings', 'Extended Equipment Life', 'Warranty Protection']
    },
    content: {
      overview: 'Heartland Heating + Air maintenance plans provide comprehensive preventive care to maximize your HVAC system\'s performance, efficiency, and lifespan. Our certified technicians ensure your equipment operates at peak condition year-round.',
      services: [
        'Bi-annual system inspections and tune-ups',
        'Priority scheduling for all service calls',
        'Energy efficiency optimization',
        'Filter replacement and air quality checks',
        'Warranty protection and registration',
        'Emergency service discounts',
        'Annual energy efficiency reports',
        'Equipment lifespan optimization'
      ],
      benefits: [
        {
          icon: 'fas fa-star',
          title: 'Priority Service',
          description: 'Jump to the front of the line for all service calls'
        },
        {
          icon: 'fas fa-piggy-bank',
          title: 'Energy Savings',
          description: 'Save 15-25% on energy costs with proper maintenance'
        },
        {
          icon: 'fas fa-clock',
          title: 'Extended Life',
          description: 'Add 3-5 years to your equipment\'s lifespan'
        },
        {
          icon: 'fas fa-shield-alt',
          title: 'Warranty Protection',
          description: 'Maintain manufacturer warranties with proper care'
        }
      ],
      pricing: {
        title: 'Maintenance Plan Pricing',
        ranges: [
          'Basic Plan: $199/year',
          'Standard Plan: $299/year',
          'Premium Plan: $399/year',
          'Commercial Plan: $500+/year'
        ]
      }
    }
  }
};

// Generate comprehensive service pages
function generateServicePages() {
  const servicesDir = path.join(__dirname, '../public/services');

  Object.entries(services).forEach(([serviceKey, serviceData]) => {
    const filename = `${serviceKey}.html`;
    const filepath = path.join(servicesDir, filename);

    const content = generateServiceContent(serviceData);
    const html = generateCompleteHTML(serviceData, content);

    fs.writeFileSync(filepath, html);
    console.log(`✅ Updated ${filename}`);
  });
}

// Generate complete HTML with main site navbar and footer
function generateCompleteHTML(serviceData, content) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${serviceData.title}</title>
    <meta name="description" content="${serviceData.description}">
    <link rel="canonical" href="${serviceData.canonicalUrl}">
    
    <!-- Local SEO Meta Tags -->
    <meta name="geo.region" content="US-IN">
    <meta name="geo.placename" content="Indiana">
    <meta name="geo.position" content="39.7684;-86.1581">
    <meta name="ICBM" content="39.7684, -86.1581">
    
    <!-- Open Graph -->
    <meta property="og:title" content="${serviceData.title}">
    <meta property="og:description" content="${serviceData.description}">
    <meta property="og:url" content="${serviceData.canonicalUrl}">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="en_US">
    
    <!-- Schema.org Local Business JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Heartland Heating + Air",
      "image": "https://heartlandheatingair.com/img/hha_heart.png",
      "description": "Professional HVAC services in the heart of the Midwest",
      "telephone": "(317) 555-0123",
      "email": "info@heartlandheatingair.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Indianapolis",
        "addressRegion": "IN",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 39.7684,
        "longitude": -86.1581
      },
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "$150-$6,000",
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 39.7684,
          "longitude": -86.1581
        },
        "geoRadius": "30 miles"
      }
    }
    </script>
    
    <!-- External CSS - Same as main site -->
    <link rel="stylesheet" href="../styles.css" />
    <link rel="stylesheet" href="../components/Navbar.css" />
    <link rel="stylesheet" href="../components/Footer.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Service Page Specific CSS -->
    <style>
    /* Service Page Specific Styles */
    .service-hero {
        background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
        color: white;
        padding: 120px 0 80px;
        text-align: center;
        margin-top: 80px;
    }
    
    .service-hero h1 {
        font-size: 3.5rem;
        margin-bottom: 1rem;
        font-weight: 700;
    }
    
    .service-hero p {
        font-size: 1.3rem;
        margin-bottom: 2rem;
        opacity: 0.9;
    }
    
    .hero-badges {
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
        margin: 2rem 0;
    }
    
    .badge {
        background: rgba(255, 255, 255, 0.2);
        padding: 0.75rem 1.5rem;
        border-radius: 25px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.9rem;
    }
    
    .hero-cta {
        margin-top: 2rem;
    }
    
    .btn {
        display: inline-block;
        padding: 12px 24px;
        background: white;
        color: #dc2626;
        text-decoration: none;
        border-radius: 5px;
        font-weight: 600;
        margin: 0 10px;
        transition: all 0.3s ease;
    }
    
    .btn:hover {
        background: #f1f5f9;
        transform: translateY(-2px);
    }
    
    .btn-secondary {
        background: transparent;
        border: 2px solid white;
        color: white;
    }
    
    .btn-secondary:hover {
        background: white;
        color: #dc2626;
    }
    
    .service-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 80px 20px;
    }
    
    .content-grid {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 4rem;
        margin-top: 3rem;
    }
    
    .main-content h2 {
        color: #1e3c72;
        margin-bottom: 1.5rem;
        font-size: 2.5rem;
    }
    
    .main-content h3 {
        color: #2a5298;
        margin-bottom: 1rem;
        font-size: 1.8rem;
    }
    
    .service-list {
        list-style: none;
        padding: 0;
        margin: 1.5rem 0;
    }
    
    .service-list li {
        padding: 0.5rem 0;
        padding-left: 1.5rem;
        position: relative;
    }
    
    .service-list li:before {
        content: "✓";
        color: #dc2626;
        font-weight: bold;
        position: absolute;
        left: 0;
    }
    
    .benefits-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin: 3rem 0;
    }
    
    .benefit {
        background: white;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        text-align: center;
        transition: transform 0.3s ease;
    }
    
    .benefit:hover {
        transform: translateY(-5px);
    }
    
    .benefit i {
        font-size: 2.5rem;
        color: #dc2626;
        margin-bottom: 1rem;
    }
    
    .benefit h4 {
        color: #1e3c72;
        margin-bottom: 0.5rem;
    }
    
    .pricing-section {
        background: #f8f9fa;
        padding: 60px 0;
    }
    
    .pricing-section h2 {
        color: #1e3c72;
        margin-bottom: 1.5rem;
        font-size: 2rem;
        text-align: center;
    }
    
    .pricing-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin: 2rem 0;
    }
    
    .pricing-item {
        background: white;
        padding: 2rem;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    
    .price-range {
        font-size: 1.2rem;
        font-weight: 600;
        color: #1e3c72;
    }
    
    .pricing-note {
        font-style: italic;
        opacity: 0.8;
        margin-top: 2rem;
        text-align: center;
    }
    
    .service-area {
        padding: 40px 0;
        background: #f8f9fa;
        text-align: center;
    }
    
    .service-area h3 {
        color: #1e3c72;
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }
    
    .areas-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
    }
    
    .area {
        background: white;
        padding: 1.5rem;
        border-radius: 8px;
        text-align: center;
        box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    }
    
    .area h4 {
        color: #1e3c72;
        margin-bottom: 0.5rem;
    }
    
    .cta {
        background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
        color: white;
        padding: 60px 0;
        text-align: center;
    }
    
    .cta h3 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    
    .cta p {
        margin-bottom: 2rem;
        opacity: 0.9;
    }
    
    .cta-buttons {
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
        margin: 2rem 0;
    }
    
    .cta-note {
        opacity: 0.8;
        font-style: italic;
        font-size: 0.9rem;
        margin-top: 2rem;
    }
    
    /* Responsive Design */
    @media (max-width: 768px) {
        .content-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
        
        .hero-badges {
            flex-direction: column;
            align-items: center;
        }
        
        .badge {
            width: 100%;
            max-width: 300px;
            justify-content: center;
        }
        
        .cta-buttons {
            flex-direction: column;
            align-items: center;
        }
        
        .btn {
            width: 100%;
            max-width: 300px;
        }
        
        .service-hero h1 {
            font-size: 2.5rem;
        }
        
        .service-hero p {
            font-size: 1.1rem;
        }
    }
    
    @media (max-width: 480px) {
        .service-hero {
            padding: 80px 0 60px;
        }
        
        .service-hero h1 {
            font-size: 2rem;
        }
        
        .service-content {
            padding: 60px 20px;
        }
    }
    </style>
</head>
<body>
    <!-- Navbar Component Container -->
    <div id="navbar-component-container"></div>

    <!-- Page Content -->
    ${content}

    <!-- Footer Component Container -->
    <footer></footer>

    <!-- Emergency Floating Button -->
    <a href="tel:+13175550123" class="floating-emergency">
      <i class="fas fa-phone"></i>
      <span>24/7 Emergency</span>
    </a>

    <!-- Interactive Chat Widget -->
    <div class="chat-widget">
      <div class="chat-toggle" id="chatToggle">
        <i class="fas fa-comments"></i>
        <span class="chat-badge">1</span>
      </div>
      
      <div class="chat-popup" id="chatPopup">
        <div class="chat-header">
          <div class="chat-company">
            <i class="fas fa-house-chimney-window"></i>
            <span>Heartland Heating + Air</span>
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
              <h4>Hi! How can we help you today?</h4>
              <p>Choose an option below to get started:</p>
            </div>
          </div>
          
          <div class="chat-options">
            <a href="#schedule" class="chat-option">
              <i class="fas fa-calendar-check"></i>
              <span>Schedule Service</span>
            </a>
            <a href="tel:+13175550123" class="chat-option">
              <i class="fas fa-phone"></i>
              <span>Call Now</span>
            </a>
            <a href="#contact" class="chat-option">
              <i class="fas fa-envelope"></i>
              <span>Send Message</span>
            </a>
            <a href="#reviews" class="chat-option">
              <i class="fas fa-star"></i>
              <span>Leave Review</span>
            </a>
          </div>
          
          <div class="chat-hours">
            <p><strong>Available 24/7</strong> for emergencies</p>
            <p>Business hours: Mon-Fri 7AM-7PM</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Main JavaScript with ES6 Modules -->
    <script src="../main.js" type="module"></script>
</body>
</html>`;
}

// Generate comprehensive service content
function generateServiceContent(serviceData) {
  return `
    <!-- Service Hero Section -->
    <section class="service-hero">
        <div class="container">
            <h1>${serviceData.hero.title}</h1>
            <p>${serviceData.hero.subtitle}</p>
            <div class="hero-badges">
                ${serviceData.hero.features.map(feature => `
                    <div class="badge">
                        <i class="fas fa-check"></i>
                        <span>${feature}</span>
                    </div>
                `).join('')}
            </div>
            <div class="hero-cta">
                <a href="tel:(317) 555-0123" class="btn">Call (317) 555-0123</a>
                <a href="#schedule" class="btn btn-secondary">Schedule Service</a>
            </div>
        </div>
    </section>

    <!-- Service Content Section -->
    <section class="service-content">
        <div class="container">
            <div class="content-grid">
                <div class="main-content">
                    <h2>Professional ${serviceData.hero.title}</h2>
                    <p>${serviceData.content.overview}</p>
                    
                    <h3>Our ${serviceData.hero.title} Services Include:</h3>
                    <ul class="service-list">
                        ${serviceData.content.services.map(service => `<li>${service}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="service-benefits">
                    <h3>Why Choose Heartland?</h3>
                    <div class="benefits-grid">
                        ${serviceData.content.benefits.map(benefit => `
                            <div class="benefit">
                                <i class="${benefit.icon}"></i>
                                <h4>${benefit.title}</h4>
                                <p>${benefit.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Pricing Section -->
    <section class="pricing-section">
        <div class="container">
            <h2>${serviceData.content.pricing.title}</h2>
            <p>Transparent, upfront pricing with no hidden fees. All prices include parts, labor, and warranty.</p>
            <div class="pricing-grid">
                ${serviceData.content.pricing.ranges.map(range => `
                    <div class="pricing-item">
                        <span class="price-range">${range}</span>
                    </div>
                `).join('')}
            </div>
            <p class="pricing-note">*Prices may vary based on system size, complexity, and specific requirements. Contact us for a detailed quote.</p>
        </div>
    </section>

    <!-- Service Areas -->
    <section class="service-area">
        <div class="container">
            <h3>Serving the Heart of the Midwest</h3>
            <p>Heartland Heating + Air proudly serves Indianapolis, Carmel, Fishers, Westfield, Noblesville, and surrounding areas throughout Central Indiana.</p>
            <div class="areas-grid">
                <div class="area">
                    <h4>Indianapolis</h4>
                    <p>Downtown, Broad Ripple, Meridian-Kessler, Irvington</p>
                </div>
                <div class="area">
                    <h4>Carmel</h4>
                    <p>Arts & Design District, Old Town, Clay Township</p>
                </div>
                <div class="area">
                    <h4>Fishers</h4>
                    <p>Downtown Fishers, Geist, Fall Creek Township</p>
                </div>
                <div class="area">
                    <h4>Westfield</h4>
                    <p>Grand Junction, Union Township, Hamilton County</p>
                </div>
                <div class="area">
                    <h4>Noblesville</h4>
                    <p>Historic Downtown, Morse Reservoir, White River</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
        <div class="container">
            <h3>Ready for Professional ${serviceData.hero.title}?</h3>
            <p>Join thousands of satisfied customers who trust Heartland Heating + Air for their HVAC needs. Call us today for fast, reliable service.</p>
            <div class="cta-buttons">
                <a href="tel:(317) 555-0123" class="btn">Call (317) 555-0123</a>
                <a href="#schedule" class="btn btn-secondary">Schedule Service</a>
            </div>
            <p class="cta-note">Available 24/7 for emergency service. Same-day appointments available for urgent needs.</p>
        </div>
    </section>
  `;
}

// Run the generation
generateServicePages();
console.log('🎉 All service pages updated with main site navbar and footer!'); 