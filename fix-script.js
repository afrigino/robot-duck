#!/usr/bin/env node

/**
 * This script fixes navigation links in all HTML files
 * to ensure consistent navigation throughout the site.
 */

const fs = require('fs');
const path = require('path');

// Map of file names to their correct paths
const fileMap = {
  'index.html': 'index.html',
  'about-ducks.html': 'about-real-ducks-page.html',
  'about-real-ducks.html': 'about-real-ducks-page.html',
  'further-research.html': 'further-research-page.html',
  'duck-data.html': 'duck-data-page.html',
  'celebrity-ducks.html': 'celebrity-ducks-page.html',
  'fake-birds.html': 'fake-birds-page.html',
  'fh-king.html': 'fh-king-page.html',
  'shop.html': 'shop-page.html',
  'legal-policies.html': 'legal-policies-page.html',
  'sitemap.html': 'sitemap.html'
};

// Get all HTML files in the directory
const htmlFiles = fs.readdirSync('.')
  .filter(file => file.endsWith('.html'));

console.log(`Found ${htmlFiles.length} HTML files to process`);

// Process each file
htmlFiles.forEach(fileName => {
  console.log(`Processing ${fileName}...`);
  let content = fs.readFileSync(fileName, 'utf8');
  let originalContent = content;
  
  // Replace all navigation links
  Object.entries(fileMap).forEach(([oldName, newName]) => {
    // Create a regex pattern that matches href="oldName" but ensures it's an actual attribute
    const pattern = new RegExp(`href=["']${oldName}["']`, 'g');
    
    // Replace with the new path
    content = content.replace(pattern, `href="${newName}"`);
  });
  
  // Check if changes were made
  if (content !== originalContent) {
    // Write back the modified content
    fs.writeFileSync(fileName, content, 'utf8');
    console.log(`Updated links in ${fileName}`);
  } else {
    console.log(`No changes needed in ${fileName}`);
  }
});

console.log('\nNavigation links fixed successfully!');
console.log('Remember to also fix any hardcoded links in JavaScript code.');
