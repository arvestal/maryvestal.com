const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    metaDescription: 'Mary Vestal — an Arizona-based tribute to friends, family, and good company.',
  });
});

router.get('/about', (req, res) => {
  res.render('about', {
    pageTitle: 'About',
    metaDescription: 'About Mary Vestal — Arizona-based, and a firm believer that friends make everything better.',
  });
});

router.get('/contact', (req, res) => {
  res.render('contact', {
    pageTitle: 'Contact',
    metaDescription: 'Get in touch with Mary Vestal.',
  });
});

router.get('/sitemap.xml', (req, res) => {
  const base = 'https://maryvestal.com';
  const today = new Date().toISOString().split('T')[0];
  const paths = ['/', '/about', '/contact'];
  const urls = paths.map((path) => `
  <url><loc>${base}${path}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq></url>`).join('');
  res.set('Content-Type', 'application/xml');
  res.send(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`);
});

module.exports = router;
