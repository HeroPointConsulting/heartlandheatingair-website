const fs = require('fs');
const path = require('path');

// Configuration
const locations = ['indianapolis', 'carmel', 'fishers', 'noblesville', 'westfield'];

// Location-specific data
const locationData = {
  indianapolis: {
    name: 'Indianapolis',
    description: 'Circle City HVAC experts serving downtown, Broad Ripple, Fountain Square, and all of Indianapolis',
    neighborhoods: 'Downtown, Broad Ripple, Fountain Square, Mass Ave, Meridian-Kessler, Irvington, Speedway',
    population: '887,000+',
    serviceArea: '30-mile radius from downtown'
  },
  carmel: {
    name: 'Carmel',
    description: 'Premier HVAC services in Carmel, Indiana\'s most livable city with luxury homes and modern amenities',
    neighborhoods: 'Carmel Arts & Design District, Old Town, Clay Township, Home Place',
    population: '99,000+',
    serviceArea: '25-mile radius from Carmel'
  },
  fishers: {
    name: 'Fishers',
    description: 'Fast-growing Fishers HVAC specialists serving new construction and established neighborhoods',
    neighborhoods: 'Fishers Station, Geist, Fall Creek, Conner Prairie, Nickel Plate District',
    population: '95,000+',
    serviceArea: '25-mile radius from Fishers'
  },
  noblesville: {
    name: 'Noblesville',
    description: 'Historic Noblesville HVAC services combining traditional charm with modern comfort solutions',
    neighborhoods: 'Historic Downtown, Morse Lake, White River, Forest Park, Promise Road',
    population: '69,000+',
    serviceArea: '20-mile radius from Noblesville'
  },
  westfield: {
    name: 'Westfield',
    description: 'Family-focused HVAC services in Westfield, serving growing families and established communities',
    neighborhoods: 'Grand Junction, Union Township, Cool Creek, Monon Trail, Westfield Washington',
    population: '46,000+',
    serviceArea: '20-mile radius from Westfield'
  }
};

function createImprovedLocationIndexPage(location) {
  const locationPath = path.join(__dirname, '..', 'public', 'locations', location);
  const data = locationData[location];

  const indexContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HVAC Services in ${data.name} | Heartland Heating + Air</title>
  <meta name="description" content="Professional HVAC services in ${data.name}, IN. Installation, repair, maintenance, and emergency service. Call (317) 555-0123.">
  
  <!-- CSS -->
  <link rel="stylesheet" href="/styles.css">
  <link rel="stylesheet" href="/components/Navbar.css">
  <link rel="stylesheet" href="/components/Footer.css">
  <link rel="stylesheet" href="/components/FloatingButtons.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <style>
    .location-hero {
      background: linear-gradient(135deg, #1e3c72 0%, #1e40af 100%);
      color: white;
      padding: 40px 0;
      text-align: center;
      margin-top: 0;
    }
    
    .location-hero h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      font-weight: 800;
    }
    
    .location-hero p {
      font-size: 1.1rem;
      margin-bottom: 1rem;
      opacity: 0.9;
    }
    
    .location-hero .trust-badges {
      font-size: 0.9rem;
      opacity: 0.8;
      white-space: nowrap;
    }
    
    .location-hero .trust-badges .separator {
      margin: 0 8px;
      opacity: 0.6;
    }
    
    .location-info {
      background: #f8f9fa;
      padding: 40px 0;
      border-bottom: 1px solid #e5e7eb;
    }
    
    .location-info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
    
    .info-card {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    
    .info-card h3 {
      color: #1e3c72;
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }
    
    .info-card p {
      color: #666;
      font-size: 0.9rem;
      line-height: 1.5;
    }
    
    .services-section {
      padding: 40px 0;
    }
    
    .services-section h2 {
      text-align: center;
      color: #1e3c72;
      font-size: 2rem;
      margin-bottom: 2rem;
      font-weight: 700;
    }
    
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }
    
    .service-card {
      background: white;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      text-align: center;
      transition: all 0.3s;
      border: 1px solid #e5e7eb;
    }
    
    .service-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 16px rgba(0,0,0,0.1);
      border-color: #dc2626;
    }
    
    .service-card h3 {
      color: #1e3c72;
      font-size: 1.2rem;
      margin-bottom: 0.75rem;
      font-weight: 600;
    }
    
    .service-card p {
      color: #666;
      margin-bottom: 1rem;
      line-height: 1.5;
      font-size: 0.9rem;
    }
    
    .service-link {
      display: inline-block;
      padding: 8px 16px;
      background: #1e3c72;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-weight: 500;
      font-size: 0.9rem;
      transition: all 0.3s;
    }
    
    .service-link:hover {
      background: #dc2626;
      transform: translateY(-1px);
    }
    
    .emergency-section {
      background: #dc2626;
      color: white;
      padding: 40px 0;
      margin-top: 0;
    }
    
    .emergency-section h2 {
      color: white;
      text-align: center;
      font-size: 2rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }
    
    .emergency-section p {
      text-align: center;
      font-size: 1rem;
      margin-bottom: 1.5rem;
      opacity: 0.9;
    }
    
    .emergency-cta {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 1.5rem;
    }
    
    .btn-emergency {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 12px 24px;
      background: #fbbf24;
      color: #1e3c72;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 600;
      font-size: 1rem;
      transition: all 0.3s;
      white-space: nowrap;
    }
    
    .btn-emergency:hover {
      background: #f59e0b;
      transform: translateY(-1px);
    }
    
    .btn-emergency.secondary {
      background: rgba(255,255,255,0.2);
      color: white;
      border: 1px solid rgba(255,255,255,0.3);
    }
    
    .btn-emergency.secondary:hover {
      background: rgba(255,255,255,0.3);
    }
    
    @media (max-width: 768px) {
      .location-hero {
        padding: 30px 0;
      }
      
      .location-hero h1 {
        font-size: 2rem;
      }
      
      .location-hero p {
        font-size: 1rem;
      }
      
      .location-hero .trust-badges {
        font-size: 0.8rem;
      }
      
      .services-grid {
        grid-template-columns: 1fr;
      }
      
      .emergency-cta {
        flex-direction: column;
        align-items: center;
      }
      
      .btn-emergency {
        width: 100%;
        max-width: 280px;
        justify-content: center;
      }
    }
  </style>
</head>
<body>
  <!-- Navbar Component Container -->
  <div id="navbar-component-container"></div>

  <!-- Location Hero Section -->
  <section class="location-hero">
    <div class="container">
      <h1>HVAC Services in ${data.name}</h1>
      <p>${data.description}</p>
      <div class="trust-badges">
        <span>Licensed & Insured</span>
        <span class="separator">•</span>
        <span>24/7 Emergency Service</span>
        <span class="separator">•</span>
        <span>Google Guaranteed</span>
      </div>
    </div>
  </section>

  <!-- Location Info Section -->
  <section class="location-info">
    <div class="container">
      <h2 style="text-align: center; color: #1e3c72; font-size: 1.8rem; margin-bottom: 1rem; font-weight: 700;">
        Serving ${data.name}, Indiana
      </h2>
      <p style="text-align: center; color: #666; margin-bottom: 2rem;">
        Professional HVAC services throughout ${data.name} and surrounding communities
      </p>
      
      <div class="location-info-grid">
        <div class="info-card">
          <h3><i class="fas fa-map-marker-alt" style="color: #dc2626; margin-right: 8px;"></i>Service Area</h3>
          <p>${data.serviceArea} covering ${data.name} and nearby communities</p>
        </div>
        
        <div class="info-card">
          <h3><i class="fas fa-users" style="color: #dc2626; margin-right: 8px;"></i>Population</h3>
          <p>Serving ${data.population} residents in the ${data.name} area</p>
        </div>
        
        <div class="info-card">
          <h3><i class="fas fa-home" style="color: #dc2626; margin-right: 8px;"></i>Neighborhoods</h3>
          <p>${data.neighborhoods}</p>
        </div>
        
        <div class="info-card">
          <h3><i class="fas fa-clock" style="color: #dc2626; margin-right: 8px;"></i>Response Time</h3>
          <p>Same-day service available, emergency response within 2-4 hours</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="services-section">
    <div class="container">
      <h2>Our Services in ${data.name}</h2>
      
      <div class="services-grid">
        <div class="service-card">
          <h3>Air Conditioning Service</h3>
          <p>Professional AC installation, repair, and maintenance in ${data.name} with experienced technicians and quality equipment.</p>
          <a href="air-conditioning-service.html" class="service-link">Learn More</a>
        </div>
        
        <div class="service-card">
          <h3>Duct Cleaning</h3>
          <p>Comprehensive duct cleaning services in ${data.name} to improve indoor air quality and system efficiency.</p>
          <a href="duct-cleaning.html" class="service-link">Learn More</a>
        </div>
        
        <div class="service-card">
          <h3>Furnace Installation</h3>
          <p>Expert furnace installation and replacement in ${data.name} with American-made equipment and professional service.</p>
          <a href="furnace-installation.html" class="service-link">Learn More</a>
        </div>
        
        <div class="service-card">
          <h3>HVAC Maintenance</h3>
          <p>Preventive maintenance plans and tune-ups in ${data.name} to keep your system running efficiently year-round.</p>
          <a href="hvac-maintenance.html" class="service-link">Learn More</a>
        </div>
        
        <div class="service-card">
          <h3>HVAC Repair</h3>
          <p>Fast, reliable HVAC repair services in ${data.name} with same-day service and emergency availability.</p>
          <a href="hvac-repair.html" class="service-link">Learn More</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Emergency Section -->
  <section class="emergency-section">
    <div class="container">
      <h2>24/7 Emergency HVAC Service</h2>
      <p>Available anytime, day or night, for urgent heating and cooling emergencies in ${data.name}</p>
      
      <div class="emergency-cta">
        <a href="tel:3175550123" class="btn-emergency">
          <i class="fas fa-phone"></i>
          Call Now: (317) 555-0123
        </a>
        <a href="emergency-hvac.html" class="btn-emergency secondary">
          <i class="fas fa-exclamation-triangle"></i>
          Emergency Service
        </a>
      </div>
    </div>
  </section>

  <!-- Footer Component Container -->
  <footer></footer>

  <!-- Main JavaScript -->
  <script src="/main.js" type="module"></script>
</body>
</html>`;

  const indexPath = path.join(locationPath, 'index.html');
  fs.writeFileSync(indexPath, indexContent);
  console.log(`✅ Updated index page for ${location}`);
}

// Main execution
if (require.main === module) {
  console.log('🔧 Updating Location Index Pages\n');

  locations.forEach(location => {
    const locationPath = path.join(__dirname, '..', 'public', 'locations', location);
    if (fs.existsSync(locationPath)) {
      createImprovedLocationIndexPage(location);
    } else {
      console.log(`❌ Location directory not found: ${location}`);
    }
  });

  console.log('\n✅ All location index pages updated!');
  console.log('\n📋 Improvements made:');
  console.log('   • Reduced hero section padding (40px instead of 80px)');
  console.log('   • Fixed "Google Guaranteed" text wrapping with nowrap');
  console.log('   • Made layout more compact throughout');
  console.log('   • Added location-specific data and neighborhoods');
  console.log('   • Improved emergency section styling');
  console.log('   • Better mobile responsiveness');
}

module.exports = {
  createImprovedLocationIndexPage,
  locationData
}; 