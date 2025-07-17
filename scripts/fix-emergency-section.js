const fs = require('fs');
const path = require('path');

// Configuration
const locations = ['indianapolis', 'carmel', 'fishers', 'noblesville', 'westfield'];

function fixEmergencySection(location) {
  const locationPath = path.join(__dirname, '..', 'public', 'locations', location, 'index.html');

  if (!fs.existsSync(locationPath)) {
    console.log(`❌ Location index not found: ${location}`);
    return;
  }

  let content = fs.readFileSync(locationPath, 'utf8');

  // Fix the emergency section CSS
  content = content.replace(
    /\.emergency-section\s*\{[\s\S]*?background:\s*#dc2626;[\s\S]*?padding:\s*40px\s*0;[\s\S]*?margin-top:\s*0;[\s\S]*?\}/,
    `.emergency-section {
      background: #dc2626;
      color: white;
      padding: 40px 0;
      margin-top: 0;
      border-top: 1px solid rgba(255,255,255,0.1);
    }`
  );

  // Fix the services section to remove bottom margin
  content = content.replace(
    /\.services-section\s*\{[\s\S]*?padding:\s*40px\s*0;[\s\S]*?\}/,
    `.services-section {
      padding: 40px 0 0 0;
    }`
  );

  // Improve emergency section layout
  content = content.replace(
    /\.emergency-section h2\s*\{[\s\S]*?color:\s*white;[\s\S]*?text-align:\s*center;[\s\S]*?font-size:\s*2rem;[\s\S]*?margin-bottom:\s*1rem;[\s\S]*?font-weight:\s*700;[\s\S]*?\}/,
    `.emergency-section h2 {
      color: white;
      text-align: center;
      font-size: 2rem;
      margin-bottom: 1rem;
      font-weight: 700;
      text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }`
  );

  // Improve emergency section paragraph
  content = content.replace(
    /\.emergency-section p\s*\{[\s\S]*?text-align:\s*center;[\s\S]*?font-size:\s*1rem;[\s\S]*?margin-bottom:\s*1\.5rem;[\s\S]*?opacity:\s*0\.9;[\s\S]*?\}/,
    `.emergency-section p {
      text-align: center;
      font-size: 1rem;
      margin-bottom: 2rem;
      opacity: 0.9;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.5;
    }`
  );

  // Improve emergency CTA layout
  content = content.replace(
    /\.emergency-cta\s*\{[\s\S]*?display:\s*flex;[\s\S]*?gap:\s*1rem;[\s\S]*?justify-content:\s*center;[\s\S]*?flex-wrap:\s*wrap;[\s\S]*?margin-top:\s*1\.5rem;[\s\S]*?\}/,
    `.emergency-cta {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 2rem;
      align-items: center;
    }`
  );

  // Improve emergency button styling
  content = content.replace(
    /\.btn-emergency\s*\{[\s\S]*?display:\s*inline-flex;[\s\S]*?align-items:\s*center;[\s\S]*?gap:\s*0\.5rem;[\s\S]*?padding:\s*12px\s*24px;[\s\S]*?background:\s*#fbbf24;[\s\S]*?color:\s*#1e3c72;[\s\S]*?text-decoration:\s*none;[\s\S]*?border-radius:\s*6px;[\s\S]*?font-weight:\s*600;[\s\S]*?font-size:\s*1rem;[\s\S]*?transition:\s*all\s*0\.3s;[\s\S]*?white-space:\s*nowrap;[\s\S]*?\}/,
    `.btn-emergency {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 14px 28px;
      background: #fbbf24;
      color: #1e3c72;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 700;
      font-size: 1.1rem;
      transition: all 0.3s;
      white-space: nowrap;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      min-width: 200px;
      justify-content: center;
    }`
  );

  // Improve secondary button styling
  content = content.replace(
    /\.btn-emergency\.secondary\s*\{[\s\S]*?background:\s*rgba\(255,255,255,0\.2\);[\s\S]*?color:\s*white;[\s\S]*?border:\s*1px\s*solid\s*rgba\(255,255,255,0\.3\);[\s\S]*?\}/,
    `.btn-emergency.secondary {
      background: rgba(255,255,255,0.15);
      color: white;
      border: 2px solid rgba(255,255,255,0.4);
      backdrop-filter: blur(10px);
    }`
  );

  // Improve mobile responsiveness
  content = content.replace(
    /@media \(max-width:\s*768px\)\s*\{[\s\S]*?\.emergency-cta\s*\{[\s\S]*?flex-direction:\s*column;[\s\S]*?align-items:\s*center;[\s\S]*?\}[\s\S]*?\.btn-emergency\s*\{[\s\S]*?width:\s*100%;[\s\S]*?max-width:\s*280px;[\s\S]*?justify-content:\s*center;[\s\S]*?\}[\s\S]*?\}/,
    `@media (max-width: 768px) {
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
      
      .emergency-section {
        padding: 30px 0;
      }
      
      .emergency-section h2 {
        font-size: 1.75rem;
      }
      
      .emergency-cta {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
      
      .btn-emergency {
        width: 100%;
        max-width: 300px;
        justify-content: center;
        padding: 12px 20px;
        font-size: 1rem;
      }
    }`
  );

  fs.writeFileSync(locationPath, content);
  console.log(`✅ Fixed emergency section for ${location}`);
}

// Main execution
if (require.main === module) {
  console.log('🔧 Fixing Emergency Section Layout\n');

  locations.forEach(location => {
    fixEmergencySection(location);
  });

  console.log('\n✅ All emergency sections fixed!');
  console.log('\n📋 Improvements made:');
  console.log('   • Removed gap between services and emergency sections');
  console.log('   • Improved emergency section spacing and layout');
  console.log('   • Enhanced button styling and sizing');
  console.log('   • Better mobile responsiveness');
  console.log('   • Added subtle border and shadow effects');
}

module.exports = {
  fixEmergencySection
}; 