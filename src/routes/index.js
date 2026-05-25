const express = require('express');
const router = express.Router();

// Example route
router.get('/status', (req, res) => {
  res.json({ 
    status: 'operational',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
