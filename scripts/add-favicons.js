const fs = require('fs');
const path = require('path');

// Favicon links to add
const faviconLinks = `
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-title" content="Heartland Heating & Air" />
    <link rel="manifest" href="/site.webmanifest" />
`;

// Function to recursively find all HTML files
function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Function to add favicon links to an HTML file
function addFaviconsToFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if favicon links already exist
    if (content.includes('favicon-96x96.png')) {
      console.log(`✅ Favicons already exist in: ${filePath}`);
      return;
    }

    // Find the position after the meta description
    const metaDescriptionPattern = /<meta name="description"[^>]*>/;
    const match = content.match(metaDescriptionPattern);

    if (match) {
      // Insert favicon links after the meta description
      const insertPosition = content.indexOf(match[0]) + match[0].length;
      const before = content.substring(0, insertPosition);
      const after = content.substring(insertPosition);

      // Add a newline and the favicon links
      const newContent = before + '\n    ' + faviconLinks.trim() + after;

      fs.writeFileSync(filePath, newContent);
      console.log(`✅ Added favicons to: ${filePath}`);
    } else {
      // If no meta description, try to insert after the title
      const titlePattern = /<title>[^<]*<\/title>/;
      const titleMatch = content.match(titlePattern);

      if (titleMatch) {
        const insertPosition = content.indexOf(titleMatch[0]) + titleMatch[0].length;
        const before = content.substring(0, insertPosition);
        const after = content.substring(insertPosition);

        const newContent = before + '\n    ' + faviconLinks.trim() + after;

        fs.writeFileSync(filePath, newContent);
        console.log(`✅ Added favicons to: ${filePath}`);
      } else {
        console.log(`⚠️  Could not find insertion point in: ${filePath}`);
      }
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('🚀 Adding favicon links to all HTML files...\n');

const publicDir = path.join(__dirname, '..', 'public');
const htmlFiles = findHtmlFiles(publicDir);

console.log(`Found ${htmlFiles.length} HTML files to process:\n`);

htmlFiles.forEach(filePath => {
  const relativePath = path.relative(process.cwd(), filePath);
  addFaviconsToFile(filePath);
});

console.log('\n✨ Favicon addition complete!');
console.log('\n📝 Summary:');
console.log('- Added favicon links to HTML files that didn\'t have them');
console.log('- Skipped files that already had favicon links');
console.log('- Favicon files should be placed in the public/ directory'); 