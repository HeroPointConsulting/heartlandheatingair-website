const fs = require('fs');
const path = require('path');

// Configuration
const sourceDir = 'public/locations';
const targetDir = 'public';
const cities = ['carmel', 'fishers', 'indianapolis', 'noblesville', 'westfield'];
const services = [
  'air-conditioning-service',
  'duct-cleaning',
  'furnace-installation',
  'hvac-maintenance',
  'hvac-repair'
];

// Create a mapping of old paths to new paths
const fileMappings = [];

cities.forEach(city => {
  services.forEach(service => {
    const oldPath = path.join(sourceDir, city, `${service}.html`);
    const newPath = path.join(targetDir, `${city}-${service}.html`);
    fileMappings.push({ oldPath, newPath, city, service });
  });
});

console.log('Moving location pages to root directory...\n');

let movedCount = 0;
let errorCount = 0;

fileMappings.forEach(({ oldPath, newPath, city, service }) => {
  try {
    // Check if source file exists
    if (fs.existsSync(oldPath)) {
      // Read the file content
      let content = fs.readFileSync(oldPath, 'utf8');

      // Update internal links to use new structure
      // Update relative paths for images, CSS, JS files
      content = content.replace(/\.\.\/\.\.\//g, './');
      content = content.replace(/\.\.\//g, './');

      // Update any remaining location-specific paths
      content = content.replace(/href="\/locations\//g, 'href="/');
      content = content.replace(/src="\/locations\//g, 'src="/');

      // Write the file to new location
      fs.writeFileSync(newPath, content, 'utf8');

      console.log(`✅ Moved: ${city}/${service}.html → ${city}-${service}.html`);
      movedCount++;
    } else {
      console.log(`❌ Source file not found: ${oldPath}`);
      errorCount++;
    }
  } catch (error) {
    console.log(`❌ Error moving ${oldPath}: ${error.message}`);
    errorCount++;
  }
});

console.log(`\n📊 Summary:`);
console.log(`   Moved: ${movedCount} files`);
console.log(`   Errors: ${errorCount} files`);

if (movedCount > 0) {
  console.log(`\n🎉 Successfully moved ${movedCount} location pages to root directory!`);
  console.log(`\n📝 Next steps:`);
  console.log(`   1. Update any internal links in your main pages to point to the new URLs`);
  console.log(`   2. Update your sitemap.xml to reflect the new structure`);
  console.log(`   3. Consider removing the old /locations/ directory after testing`);
  console.log(`   4. Update any hardcoded links in your components or navigation`);
} 