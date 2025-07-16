const fs = require('fs');
const path = require('path');

// Configuration
const cities = ['carmel', 'fishers', 'indianapolis', 'noblesville', 'westfield'];
const services = [
  'air-conditioning-service',
  'duct-cleaning',
  'furnace-installation',
  'hvac-maintenance',
  'hvac-repair'
];

console.log('Updating location page URLs...\n');

let updatedCount = 0;

cities.forEach(city => {
  services.forEach(service => {
    const fileName = `${city}-${service}.html`;
    const filePath = path.join('public', fileName);

    try {
      if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');

        // Update canonical URL
        const oldCanonical = `https://heartlandheatingair.com/locations/${city}/${service}`;
        const newCanonical = `https://heartlandheatingair.com/${city}-${service}`;

        content = content.replace(
          new RegExp(`href="${oldCanonical}"`, 'g'),
          `href="${newCanonical}"`
        );

        // Update og:url
        content = content.replace(
          new RegExp(`content="${oldCanonical}"`, 'g'),
          `content="${newCanonical}"`
        );

        // Write the updated content back
        fs.writeFileSync(filePath, content, 'utf8');

        console.log(`✅ Updated: ${fileName}`);
        updatedCount++;
      }
    } catch (error) {
      console.log(`❌ Error updating ${fileName}: ${error.message}`);
    }
  });
});

console.log(`\n📊 Summary:`);
console.log(`   Updated: ${updatedCount} files`);
console.log(`\n🎉 Successfully updated all location page URLs!`); 