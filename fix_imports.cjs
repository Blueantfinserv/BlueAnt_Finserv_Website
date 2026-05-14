const fs = require('fs');
const path = require('path');
const dir = 'src';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
  let p = path.join(dir, f);
  let content = fs.readFileSync(p, 'utf8');
  let original = content;

  // Remove missing CSS imports
  content = content.replace(/import\s+['"].\/(ServicePage\.css|TeamSection\.css|ServicesCards\.css|gallery\.css)['"];?\n?/g, '');
  
  // Replace /public/ with / for images
  content = content.replace(/src=["']\/public\/([^"']+)["']/g, 'src="/$1"');

  if (content !== original) {
    fs.writeFileSync(p, content);
    console.log('Fixed imports and public image paths in ' + f);
  }
});
