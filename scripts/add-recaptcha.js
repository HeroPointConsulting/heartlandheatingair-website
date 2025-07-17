// Script to add reCAPTCHA configuration for careers forms
// This script should be run to update the reCAPTCHA site key in the JobDetail component

const fs = require('fs');
const path = require('path');

// Read the JobDetail component
const jobDetailPath = path.join(__dirname, '../public/components/JobDetail.js');
let jobDetailContent = fs.readFileSync(jobDetailPath, 'utf8');

// Replace the placeholder reCAPTCHA site key with a note
const updatedContent = jobDetailContent.replace(
  'data-sitekey="6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"',
  'data-sitekey="YOUR_RECAPTCHA_SITE_KEY_HERE"'
);

// Write the updated content back
fs.writeFileSync(jobDetailPath, updatedContent);

console.log('✅ Updated JobDetail component with reCAPTCHA placeholder');
console.log('📝 Please replace "YOUR_RECAPTCHA_SITE_KEY_HERE" with your actual reCAPTCHA site key');
console.log('🔗 Get your reCAPTCHA site key from: https://www.google.com/recaptcha/admin'); 