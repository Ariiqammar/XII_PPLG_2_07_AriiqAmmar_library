// controllers/reviewController.js
const Review = require('../models/reviewModel');

// Ambil semua reviews
exports.getAllReviews = (req, res) => {
    Review.getAllReviews((err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error fetching reviews' });
        }
        res.json(results);
    });
};

// Ambil review berdasarkan ID
exports.getReviewById = (req, res) => {
    const id = req.params.id;
    Review.getReviewById(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error fetching review' });
        }
        if (result.length === 0) {
            return res.status(404).json({ error: 'Review not found' });
        }
        res.json(result[0]);
    });
};

// Buat review baru
exports.createReview = (req, res) => {
    const newReview = req.body;
    Review.createReview(newReview, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error creating review' });
        }
        res.status(201).json({ message: 'Review created successfully' });
    });
};

// Update review
exports.updateReview = (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    Review.updateReview(id, updatedData, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error updating review' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Review not found' });
        }
        res.json({ message: 'Review updated successfully' });
    });
};

// Delete review
exports.deleteReview = (req, res) => {
    const id = req.params.id;
    Review.deleteReview(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error deleting review' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Review not found' });
        }
        res.json({ message: 'Review deleted successfully' });
    });
};
