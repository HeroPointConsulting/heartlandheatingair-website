const fs = require('fs');
const path = require('path');

// reCAPTCHA script to add
const recaptchaScript = `
    <!-- reCAPTCHA -->
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>`;

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

// Function to add reCAPTCHA script to an HTML file
function addRecaptchaToFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if reCAPTCHA script already exists
    if (content.includes('google.com/recaptcha/api.js')) {
      console.log(`✅ reCAPTCHA already exists in: ${filePath}`);
      return;
    }

    // Find the position after the last script tag or before closing head tag
    const headClosingPattern = /<\/head>/;
    const headMatch = content.match(headClosingPattern);

    if (headMatch) {
      // Insert reCAPTCHA script before closing head tag
      const insertPosition = content.indexOf(headMatch[0]);
      const before = content.substring(0, insertPosition);
      const after = content.substring(insertPosition);

      // Add the reCAPTCHA script
      const newContent = before + recaptchaScript.trim() + '\n  ' + after;

      fs.writeFileSync(filePath, newContent);
      console.log(`✅ Added reCAPTCHA to: ${filePath}`);
    } else {
      console.log(`⚠️  Could not find </head> tag in: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('🚀 Adding reCAPTCHA script to all HTML files...\n');

const publicDir = path.join(__dirname, '..', 'public');
const htmlFiles = findHtmlFiles(publicDir);

console.log(`Found ${htmlFiles.length} HTML files to process:\n`);

htmlFiles.forEach(filePath => {
  const relativePath = path.relative(process.cwd(), filePath);
  addRecaptchaToFile(filePath);
});

console.log('\n✨ reCAPTCHA addition complete!');
console.log('\n📝 Summary:');
console.log('- Added reCAPTCHA script to HTML files that didn\'t have it');
console.log('- Skipped files that already had reCAPTCHA script');
console.log('- Remember to set up your reCAPTCHA keys in .env file'); 