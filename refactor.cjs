const fs = require('fs');
const path = require('path');
const dir = 'src';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
  let p = path.join(dir, f);
  let content = fs.readFileSync(p, 'utf8');
  let original = content;

  // Replace section padding with section class
  content = content.replace(/className="(py-12 lg:py-20|py-16 lg:py-20|py-20 mt-\[60px\])\s/g, 'className="section ');
  
  // Replace containers
  content = content.replace(/className="max-w-\[1200px\] mx-auto[^">]*"/g, 'className="container"');
  content = content.replace(/className="max-w-\[1600px\] mx-auto[^">]*"/g, 'className="container"');
  content = content.replace(/className="container mx-auto[^">]*"/g, 'className="container"');

  // Replace grid
  content = content.replace(/grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[^"]*"/g, 'fintech-grid"');
  
  // Clean up headings and subtitles to use global classes
  content = content.replace(/mb-5/g, 'fintech-heading');
  content = content.replace(/mb-10/g, 'fintech-subtitle');
  content = content.replace(/mb-16/g, 'fintech-subtitle');

  if (content !== original) {
    fs.writeFileSync(p, content);
    console.log('Updated ' + f);
  }
});
