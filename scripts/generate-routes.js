import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  'about',
  'about/company',
  'about/mission',
  'about/team',
  'about/stories',
  'services',
  'services/wealth-creation',
  'services/wealth-protection',
  'services/wealth-preservation',
  'services/stock-market-services',
  'resources',
  'gallery',
  'contact',
  'calculators',
  'team',
  'careers',
  'blogs',
  'faq',
  'coming-soon'
];

const distDir = path.resolve(__dirname, '../dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('Build template index.html not found in dist. Run vite build first.');
  process.exit(1);
}

const indexHtml = fs.readFileSync(templatePath, 'utf8');

// Meta/SEO configurations for each page
const pageMetadata = {
  'about': {
    title: 'About Us | Blueant Finserv',
    description: 'Learn about Blueant Finserv, our values, our vision, and why we are India\'s trusted financial growth partner.'
  },
  'about/company': {
    title: 'Company Overview | Blueant Finserv',
    description: 'Discover Blueant Finserv\'s story, who we are, and our journey as a leading financial advisory services provider.'
  },
  'about/mission': {
    title: 'Vision & Values | Blueant Finserv',
    description: 'Explore the core mission, vision, and values that drive financial trust and transparency at Blueant Finserv.'
  },
  'about/team': {
    title: 'Leadership Team | Blueant Finserv',
    description: 'Meet the expert leadership team at Blueant Finserv, dedicated to guiding your financial growth journey.'
  },
  'about/stories': {
    title: 'Why BlueAnt - Built on Trust | Blueant Finserv',
    description: 'Read about why clients trust Blueant Finserv as their primary partner for wealth and investment advisory.'
  },
  'services': {
    title: 'Our Financial Services | Blueant Finserv',
    description: 'Explore our comprehensive range of financial services including Wealth Creation, Protection, Preservation, and Stock Market advisory.'
  },
  'services/wealth-creation': {
    title: 'Wealth Creation Solutions | Blueant Finserv',
    description: 'Strategic investment planning and mutual funds advisory tailored to achieve long-term prosperity and growth.'
  },
  'services/wealth-protection': {
    title: 'Wealth Protection & Insurance | Blueant Finserv',
    description: 'Secure your life, family, and financial assets with robust risk management and insurance planning services.'
  },
  'services/wealth-preservation': {
    title: 'Wealth Preservation Strategies | Blueant Finserv',
    description: 'Ensure long-term capital preservation, succession planning, and stability for your family\'s assets.'
  },
  'services/stock-market-services': {
    title: 'Stock Market Advisory Services | Blueant Finserv',
    description: 'Research-driven stock market insights, portfolio advisory, and active trading support from certified specialists.'
  },
  'resources': {
    title: 'Financial Resources & Tools | Blueant Finserv',
    description: 'Access expert insights, blogs, FAQs, and interactive tools to make informed decisions for your financial path.'
  },
  'gallery': {
    title: 'Gallery - Our Journey | Blueant Finserv',
    description: 'Take a look at the milestone events, team workshops, and highlights from Blueant Finserv\'s history.'
  },
  'contact': {
    title: 'Contact Us | Blueant Finserv',
    description: 'Get in touch with the expert financial advisors at Blueant Finserv. We are here to answer your questions and help you grow.'
  },
  'calculators': {
    title: 'Financial Calculators - SIP, EMI & More | Blueant Finserv',
    description: 'Use our easy online SIP, EMI, and retirement calculators to plan your savings and investment goals.'
  },
  'careers': {
    title: 'Careers - Join Our Team | Blueant Finserv',
    description: 'Explore job openings, career growth opportunities, and the corporate culture at Blueant Finserv.'
  },
  'blogs': {
    title: 'Expert Financial Blogs | Blueant Finserv',
    description: 'Read expert financial articles, market updates, investment tips, and advisory news on our blog.'
  },
  'faq': {
    title: 'Frequently Asked Questions | Blueant Finserv',
    description: 'Find answers to common questions about mutual funds, SIP, business loans, tax planning, and advisory services.'
  },
  'coming-soon': {
    title: 'Coming Soon | Blueant Finserv',
    description: 'Exciting new financial products and services are coming soon to Blueant Finserv.'
  }
};

// Helper function to replace metadata in the HTML template in-place
function customizeHtml(html, route) {
  const meta = pageMetadata[route];
  if (!meta) return html;

  const url = `https://blueantfinserv.com/${route}`;

  let customized = html;

  // Replace title tag
  customized = customized.replace(
    /<title>[^]*?<\/title>/i,
    `<title>${meta.title}</title>`
  );

  // Replace description meta tag
  customized = customized.replace(
    /<meta\s+name="description"\s+content="[^]*?"\s*\/?>/i,
    `<meta name="description" content="${meta.description}" />`
  );

  // Replace canonical URL tag
  customized = customized.replace(
    /<link\s+rel="canonical"\s+href="[^]*?"\s*\/?>/i,
    `<link rel="canonical" href="${url}" />`
  );

  // Replace og:title tag
  customized = customized.replace(
    /<meta\s+property="og:title"\s+content="[^]*?"\s*\/?>/i,
    `<meta property="og:title" content="${meta.title}" />`
  );

  // Replace og:description tag
  customized = customized.replace(
    /<meta\s+property="og:description"\s+content="[^]*?"\s*\/?>/i,
    `<meta property="og:description" content="${meta.description}" />`
  );

  // Replace og:url tag
  customized = customized.replace(
    /<meta\s+property="og:url"\s+content="[^]*?"\s*\/?>/i,
    `<meta property="og:url" content="${url}" />`
  );

  return customized;
}

// 1. Create subfolders and write customized index.html files
for (const route of routes) {
  const routeDir = path.join(distDir, route);
  fs.mkdirSync(routeDir, { recursive: true });

  const customized = customizeHtml(indexHtml, route);
  fs.writeFileSync(path.join(routeDir, 'index.html'), customized, 'utf8');
  console.log(`Generated customized index.html for route: /${route}`);
}

// 2. Generate 404.html fallback at root
fs.copyFileSync(templatePath, path.join(distDir, '404.html'));
console.log('Generated 404.html fallback (copy of template index.html)');
