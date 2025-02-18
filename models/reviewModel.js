const db = require('../Config/db');

// Fungsi untuk menambahkan ulasan
exports.addReview = (review, callback) => {
  const { book_id, user_id, rating, comment } = review;
  const query = 'INSERT INTO reviews (book_id, user_id, rating, comment, created_at) VALUES (?, ?, ?, ?, NOW())';
  db.query(query, [book_id, user_id, rating, comment], callback);
};

// Fungsi untuk mendapatkan semua ulasan
exports.getAllReviews = (callback) => {
  db.query('SELECT * FROM reviews', callback);
};

// Fungsi untuk memperbarui ulasan
exports.updateReview = (id, review, callback) => {
  const { book_id, user_id, rating, comment } = review;
  const query = 'UPDATE reviews SET book_id = ?, user_id = ?, rating = ?, comment = ? WHERE id = ?';
  db.query(query, [book_id, user_id, rating, comment, id], callback);
};

// Fungsi untuk menghapus ulasan
exports.deleteReview = (id, callback) => {
  db.query('DELETE FROM reviews WHERE id = ?', [id], callback);
};
