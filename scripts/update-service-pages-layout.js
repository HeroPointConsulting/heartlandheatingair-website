const fs = require('fs');
const path = require('path');
const layoutTemplate = require('./layout-template.js');

// Service pages to update
const servicePages = [
  'ac-repair.html',
  'furnace-installation.html',
  'emergency-service.html',
  'maintenance-plans.html',
  'indoor-air-quality.html',
  'commercial-hvac.html'
];

// Update service page with new layout
function updateServicePageLayout(fileName) {
  const filePath = path.join(__dirname, '../public/services', fileName);
  
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${fileName}`);
    return;
  }

  // Read existing file
  const existingContent = fs.readFileSync(filePath, 'utf8');
  
  // Extract the service page container content
  const serviceContainerMatch = existingContent.match(/<div id="service-page-container">([\s\S]*?)<\/div>/);
  
  if (!serviceContainerMatch) {
    console.error(`Service container not found in ${fileName}`);
    return;
  }

  const serviceContent = serviceContainerMatch[1];
  
  // Generate new page with layout
  const title = extractTitle(existingContent);
  const description = extractDescription(existingContent);
  const canonicalUrl = `https://heartlandheatingair.com/services/${fileName.replace('.html', '')}`;
  
  const newPage = layoutTemplate.generatePage(serviceContent, title, description, canonicalUrl);
  
  // Write updated file
  fs.writeFileSync(filePath, newPage);
  console.log(`Updated service page: ${fileName}`);
}

// Extract title from existing content
function extractTitle(content) {
  const titleMatch = content.match(/<title>(.*?)<\/title>/);
  return titleMatch ? titleMatch[1] : 'Service | Heartland Heating + Air';
}

// Extract description from existing content
function extractDescription(content) {
  const descMatch = content.match(/<meta name="description" content="(.*?)">/);
  return descMatch ? descMatch[1] : 'Professional HVAC services in Indianapolis and surrounding areas.';
}

// Update all service pages
function updateAllServicePages() {
  console.log('Updating service pages with new layout...');
  
  servicePages.forEach(fileName => {
    updateServicePageLayout(fileName);
  });
  
  console.log('All service pages updated successfully!');
}

// Run the updater
updateAllServicePages(); 