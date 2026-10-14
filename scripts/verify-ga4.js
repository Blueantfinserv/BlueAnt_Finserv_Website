import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

if (!fs.existsSync(distDir)) {
  console.error('dist directory does not exist! Run npm run build first.');
  process.exit(1);
}

const htmlFiles = getHtmlFiles(distDir);
console.log(`Auditing ${htmlFiles.length} generated HTML files in ${distDir}...\n`);

const MEASUREMENT_ID = 'G-1J2HZG079E';
const results = [];

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(distDir, file).replace(/\\/g, '/');

  const hasScriptTag = content.includes(`googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`);
  const hasConfig = content.includes(`gtag('config', '${MEASUREMENT_ID}'`);
  const hasConsent = content.includes("gtag('consent', 'default'");
  const hasSendPageViewFalse = content.includes('send_page_view: false');

  const matches = content.match(new RegExp(MEASUREMENT_ID, 'g')) || [];
  const idCount = matches.length;

  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  const canonicalMatch = content.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);

  const isPass = hasScriptTag && hasConfig && hasConsent && hasSendPageViewFalse && idCount === 2;

  results.push({
    Page: relPath,
    Title: titleMatch ? titleMatch[1] : 'N/A',
    Canonical: canonicalMatch ? canonicalMatch[1] : 'N/A',
    'Script Tag': hasScriptTag ? 'YES' : 'NO',
    'Config Tag': hasConfig ? 'YES' : 'NO',
    'Consent Mode': hasConsent ? 'YES' : 'NO',
    'ID Count': idCount,
    Status: isPass ? 'PASS' : 'FAIL'
  });
}

console.table(results.map(r => ({
  Page: r.Page,
  Title: r.Title.length > 35 ? r.Title.substring(0, 32) + '...' : r.Title,
  'Script Tag': r['Script Tag'],
  'Config Tag': r['Config Tag'],
  'Consent': r['Consent Mode'],
  'ID Count': r['ID Count'],
  Status: r.Status
})));

const failed = results.filter(r => r.Status === 'FAIL');
console.log(`\nAudit Complete: ${results.length - failed.length}/${results.length} files passed.`);
if (failed.length > 0) {
  console.error(`FAILED PAGES (${failed.length}):`, failed.map(f => f.Page));
  process.exit(1);
} else {
  console.log('ALL generated route HTML files successfully contain the official Google Analytics tag without duplicates.');
}
