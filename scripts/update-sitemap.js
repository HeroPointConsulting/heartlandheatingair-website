const fs = require('fs');
const path = require('path');

// Configuration
const sitemapPath = 'public/sitemap.xml';
const cities = ['carmel', 'fishers', 'indianapolis', 'noblesville', 'westfield'];
const services = [
  'air-conditioning-service',
  'duct-cleaning',
  'furnace-installation',
  'hvac-maintenance',
  'hvac-repair'
];

// Read the current sitemap
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// Create new location URLs
const newLocationUrls = [];

cities.forEach(city => {
  services.forEach(service => {
    const newUrl = `https://heartlandheatingair.com/${city}-${service}`;
    newLocationUrls.push(newUrl);
  });
});

// Replace all old location URLs with new ones
let updatedContent = sitemapContent;

// Remove all old location URLs (lines containing /locations/)
const lines = updatedContent.split('\n');
const filteredLines = lines.filter(line => !line.includes('/locations/'));

// Reconstruct the sitemap with new URLs
let newSitemap = filteredLines.slice(0, -1); // Remove the closing </urlset>

// Add the new location URLs
newLocationUrls.forEach(url => {
  newSitemap.push('  <url>');
  newSitemap.push(`    <loc>${url}</loc>`);
  newSitemap.push('    <lastmod>2025-01-15T15:35:22.790Z</lastmod>');
  newSitemap.push('    <changefreq>weekly</changefreq>');
  newSitemap.push('    <priority>0.8</priority>');
  newSitemap.push('  </url>');
});

// Add the closing tag
newSitemap.push('</urlset>');

// Write the updated sitemap
fs.writeFileSync(sitemapPath, newSitemap.join('\n'), 'utf8');

console.log('✅ Updated sitemap.xml with new location URLs');
console.log(`📊 Updated ${newLocationUrls.length} location URLs`);
console.log('\n📝 New URL format:');
console.log('   Old: /locations/carmel/hvac-repair');
console.log('   New: /carmel-hvac-repair'); 