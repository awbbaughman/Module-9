const express = require('express');
const router = express.Router();
const apiRoutesController = require('../controllers/apiController');

// Fetch data with query parameters, e.g., /api/posts?page=1

router.get('/Houses', apiRoutesController.getHouses);

// Update data using path parameters, e.g., /api/posts/1

router.put('/url', apiRoutesController.updateHouses);

module.exports = router;