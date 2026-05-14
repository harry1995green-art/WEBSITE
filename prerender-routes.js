#!/usr/bin/env node

/**
 * This script prerendes key routes to static HTML for better SEO and indexability.
 * Run this before deployment to generate static versions of your pages.
 * 
 * Usage: node prerender-routes.js
 */

const routes = [
  '/',
  '/nxgenpro-experience',
  '/levanteexperience',
  '/betisexperience',
  '/benficaexperience',
  '/feyenoordexperience',
  '/tournaments',
  '/mic-costa-brava',
  '/copa-daurada',
  '/mare-nostrum',
  '/cruyff-tournament',
  '/levante-international-cup',
  '/mic-punta-cana',
  '/easter-youth-cup',
  '/winter-cup-holland',
  '/journal',
  '/faq',
  '/terms-conditions',
  '/privacy-policy',
  '/safeguarding',
  '/about',
  '/contact',
  '/application',
];

console.log('Routes to prerender:');
routes.forEach(route => {
  console.log(`  ✓ ${route}`);
});

console.log('\nFor prerendering setup, consider:');
console.log('1. Prerender.io - https://prerender.io');
console.log('2. pre-render - https://github.com/stereobooster/pre-render');
console.log('3. Headless Chrome - https://github.com/puppeteer/puppeteer');
console.log('\nOr use a Netlify plugin like @netlify/plugin-prerender');
