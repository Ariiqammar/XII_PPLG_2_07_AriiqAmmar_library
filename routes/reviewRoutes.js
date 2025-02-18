const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const authenticateToken = require('../Middlewares/authMiddleware');

// Routes untuk ulasan
router.post('/', authenticateToken, reviewController.createReview);
router.get('/', authenticateToken, reviewController.getAllReviews);
router.put('/:id', authenticateToken, reviewController.updateReview);
router.delete('/:id', authenticateToken, reviewController.deleteReview);

module.exports = router;
