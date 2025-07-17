const fs = require('fs');
const path = require('path');

// Configuration
const locations = ['indianapolis', 'carmel', 'fishers', 'noblesville', 'westfield'];

// Define page types
const detailedServicePages = [
  'air-conditioning-service.html',
  'duct-cleaning.html',
  'furnace-installation.html',
  'hvac-maintenance.html',
  'hvac-repair.html'
];

const seoLandingPages = [
  'emergency-hvac.html',
  'furnace-repair.html',
  'air-conditioner-repair.html',
  'hvac-installation.html',
  'hvac-maintenance-plans.html',
  'indoor-air-quality.html'
];

function analyzeLocationDirectory(locationPath) {
  const files = fs.readdirSync(locationPath);
  const analysis = {
    location: path.basename(locationPath),
    detailedPages: [],
    seoPages: [],
    otherFiles: [],
    totalFiles: files.length
  };

  files.forEach(file => {
    if (detailedServicePages.includes(file)) {
      analysis.detailedPages.push(file);
    } else if (seoLandingPages.includes(file)) {
      analysis.seoPages.push(file);
    } else {
      analysis.otherFiles.push(file);
    }
  });

  return analysis;
}

function generateCleanupReport() {
  console.log('🔍 Location Pages Analysis Report\n');
  console.log('='.repeat(60));

  let totalDetailedPages = 0;
  let totalSeoPages = 0;
  let totalOtherFiles = 0;

  locations.forEach(location => {
    const locationPath = path.join(__dirname, '..', 'public', 'locations', location);

    if (!fs.existsSync(locationPath)) {
      console.log(`❌ Location directory not found: ${location}`);
      return;
    }

    const analysis = analyzeLocationDirectory(locationPath);

    console.log(`\n📍 ${location.toUpperCase()}`);
    console.log(`   Total files: ${analysis.totalFiles}`);
    console.log(`   📋 Detailed service pages: ${analysis.detailedPages.length}`);
    analysis.detailedPages.forEach(page => {
      console.log(`      - ${page}`);
    });

    console.log(`   🎯 SEO landing pages: ${analysis.seoPages.length}`);
    analysis.seoPages.forEach(page => {
      console.log(`      - ${page}`);
    });

    if (analysis.otherFiles.length > 0) {
      console.log(`   ⚠️  Other files: ${analysis.otherFiles.length}`);
      analysis.otherFiles.forEach(file => {
        console.log(`      - ${file}`);
      });
    }

    totalDetailedPages += analysis.detailedPages.length;
    totalSeoPages += analysis.seoPages.length;
    totalOtherFiles += analysis.otherFiles.length;
  });

  console.log('\n' + '='.repeat(60));
  console.log('📊 SUMMARY');
  console.log(`   Total detailed service pages: ${totalDetailedPages}`);
  console.log(`   Total SEO landing pages: ${totalSeoPages}`);
  console.log(`   Total other files: ${totalOtherFiles}`);
  console.log(`   Total files across all locations: ${totalDetailedPages + totalSeoPages + totalOtherFiles}`);

  // Check for missing pages
  console.log('\n🔍 MISSING PAGES ANALYSIS');
  locations.forEach(location => {
    const locationPath = path.join(__dirname, '..', 'public', 'locations', location);
    if (!fs.existsSync(locationPath)) return;

    const analysis = analyzeLocationDirectory(locationPath);

    const missingDetailed = detailedServicePages.filter(page =>
      !analysis.detailedPages.includes(page)
    );

    const missingSeo = seoLandingPages.filter(page =>
      !analysis.seoPages.includes(page)
    );

    if (missingDetailed.length > 0) {
      console.log(`\n   📋 ${location}: Missing detailed service pages:`);
      missingDetailed.forEach(page => console.log(`      - ${page}`));
    }

    if (missingSeo.length > 0) {
      console.log(`\n   🎯 ${location}: Missing SEO landing pages:`);
      missingSeo.forEach(page => console.log(`      - ${page}`));
    }
  });

  console.log('\n✅ Analysis complete!');
}

function createLocationIndexPage(location) {
  const locationPath = path.join(__dirname, '..', 'public', 'locations', location);
  const analysis = analyzeLocationDirectory(locationPath);

  const indexContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HVAC Services in ${location.charAt(0).toUpperCase() + location.slice(1)} | Heartland Heating + Air</title>
  <meta name="description" content="Professional HVAC services in ${location.charAt(0).toUpperCase() + location.slice(1)}, IN. Installation, repair, maintenance, and emergency service. Call (317) 555-0123.">
  
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
      padding: 80px 0;
      text-align: center;
    }
    
    .location-hero h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      font-weight: 800;
    }
    
    .location-hero p {
      font-size: 1.3rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }
    
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }
    
    .service-card {
      background: white;
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      text-align: center;
      transition: all 0.3s;
      border: 2px solid transparent;
    }
    
    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(0,0,0,0.15);
      border-color: #dc2626;
    }
    
    .service-card h3 {
      color: #1e3c72;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }
    
    .service-card p {
      color: #666;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
    
    .service-link {
      display: inline-block;
      padding: 10px 20px;
      background: #1e3c72;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 600;
      transition: all 0.3s;
    }
    
    .service-link:hover {
      background: #dc2626;
      transform: translateY(-2px);
    }
    
    .emergency-section {
      background: #dc2626;
      color: white;
      padding: 60px 0;
      margin-top: 3rem;
    }
    
    .emergency-section h2 {
      color: white;
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 2rem;
      font-weight: 700;
    }
    
    .emergency-cta {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 2rem;
    }
    
    .btn-emergency {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 15px 30px;
      background: #fbbf24;
      color: #1e3c72;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 700;
      font-size: 1.1rem;
      transition: all 0.3s;
    }
    
    .btn-emergency:hover {
      background: #f59e0b;
      transform: translateY(-2px);
    }
    
    @media (max-width: 768px) {
      .location-hero h1 {
        font-size: 2rem;
      }
      
      .location-hero p {
        font-size: 1.1rem;
      }
      
      .services-grid {
        grid-template-columns: 1fr;
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
      <h1>HVAC Services in ${location.charAt(0).toUpperCase() + location.slice(1)}</h1>
      <p>Professional heating and cooling services in ${location.charAt(0).toUpperCase() + location.slice(1)}, Indiana</p>
      <p>Licensed & Insured • 24/7 Emergency Service • Google Guaranteed</p>
    </div>
  </section>

  <!-- Services Section -->
  <section class="section" style="padding: 60px 0;">
    <div class="container">
      <h2 style="text-align: center; color: #1e3c72; font-size: 2.5rem; margin-bottom: 3rem; font-weight: 700;">
        Our Services in ${location.charAt(0).toUpperCase() + location.slice(1)}
      </h2>
      
      <div class="services-grid">
        ${analysis.detailedPages.map(page => {
    const serviceName = page.replace('.html', '').split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    return `
        <div class="service-card">
          <h3>${serviceName}</h3>
          <p>Professional ${serviceName.toLowerCase()} services in ${location.charAt(0).toUpperCase() + location.slice(1)} with experienced technicians and quality equipment.</p>
          <a href="${page}" class="service-link">Learn More</a>
        </div>`;
  }).join('')}
      </div>
    </div>
  </section>

  <!-- Emergency Section -->
  <section class="emergency-section">
    <div class="container">
      <h2>24/7 Emergency HVAC Service</h2>
      <p style="text-align: center; font-size: 1.2rem; margin-bottom: 2rem; opacity: 0.9;">
        Available anytime, day or night, for urgent heating and cooling emergencies in ${location.charAt(0).toUpperCase() + location.slice(1)}
      </p>
      
      <div class="emergency-cta">
        <a href="tel:3175550123" class="btn-emergency">
          <i class="fas fa-phone"></i>
          Call Now: (317) 555-0123
        </a>
        <a href="emergency-hvac.html" class="btn-emergency" style="background: rgba(255,255,255,0.2); color: white; border: 2px solid white;">
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
  console.log(`✅ Created index page for ${location}`);
}

// Main execution
if (require.main === module) {
  console.log('🧹 Location Pages Cleanup Script\n');

  // Generate analysis report
  generateCleanupReport();

  // Create index pages for each location
  console.log('\n📄 Creating location index pages...');
  locations.forEach(location => {
    const locationPath = path.join(__dirname, '..', 'public', 'locations', location);
    if (fs.existsSync(locationPath)) {
      createLocationIndexPage(location);
    }
  });

  console.log('\n✅ Cleanup complete!');
  console.log('\n📋 Next steps:');
  console.log('   1. Review the analysis report above');
  console.log('   2. Check that all location index pages were created');
  console.log('   3. Verify the new emergency page at /emergency');
  console.log('   4. Update navigation to include the emergency page');
}

module.exports = {
  analyzeLocationDirectory,
  generateCleanupReport,
  createLocationIndexPage
}; 