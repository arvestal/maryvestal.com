const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    metaDescription: 'Mary Vestal — an Arizona-based tribute to friends, family, and good company.',
  });
});

module.exports = router;
