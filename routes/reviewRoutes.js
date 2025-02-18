// routes/reviewRoutes.js
const express = require('express');
const reviewController = require('../controllers/reviewController');
const router = express.Router();

// Route CRUD
router.get('/reviews', reviewController.getAllReviews);
router.get('/reviews/:id', reviewController.getReviewById);
router.post('/reviews', reviewController.createReview);
router.put('/reviews/:id', reviewController.updateReview);
router.delete('/reviews/:id', reviewController.deleteReview);

module.exports = router;