// models/reviewModel.js
const db = require('../db');

// Fungsi untuk mendapatkan semua reviews
const getAllReviews = (callback) => {
    const query = 'SELECT * FROM reviews';
    db.query(query, (err, results) => {
        callback(err, results);
    });
};

// Fungsi untuk mendapatkan review berdasarkan ID
const getReviewById = (id, callback) => {
    const query = 'SELECT * FROM reviews WHERE id = ?';
    db.query(query, [id], (err, result) => {
        callback(err, result);
    });
};

// Fungsi untuk membuat review baru
const createReview = (data, callback) => {
    const query = 'INSERT INTO reviews (book_id, user_id, rating, comment, created_at) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [data.book_id, data.user_id, data.rating, data.comment, new Date()], (err, result) => {
        callback(err, result);
    });
};

// Fungsi untuk update review
const updateReview = (id, data, callback) => {
    const query = 'UPDATE reviews SET rating = ?, comment = ? WHERE id = ?';
    db.query(query, [data.rating, data.comment, id], (err, result) => {
        callback(err, result);
    });
};

// Fungsi untuk delete review
const deleteReview = (id, callback) => {
    const query = 'DELETE FROM reviews WHERE id = ?';
    db.query(query, [id], (err, result) => {
        callback(err, result);
    });
};

module.exports = {
    getAllReviews,
    getReviewById,
    createReview,
    updateReview,
    deleteReview
};