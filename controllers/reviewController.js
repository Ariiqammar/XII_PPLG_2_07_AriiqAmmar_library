const db = require('../Config/db');

// Create new review
exports.createReview = (req, res) => {
  const { book_id, user_id, rating, comment } = req.body;
  const query = 'INSERT INTO reviews (book_id, user_id, rating, comment, created_at) VALUES (?, ?, ?, ?, NOW())';
  db.query(query, [book_id, user_id, rating, comment], (err, result) => {
    if (err) throw err;
    res.send('Review added successfully');
  });
};

// Get all reviews
exports.getAllReviews = (req, res) => {
  db.query('SELECT * FROM reviews', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

// Update review by id
exports.updateReview = (req, res) => {
  const { id } = req.params;
  const { book_id, user_id, rating, comment } = req.body;
  const query = 'UPDATE reviews SET book_id = ?, user_id = ?, rating = ?, comment = ? WHERE id = ?';
  db.query(query, [book_id, user_id, rating, comment, id], (err, result) => {
    if (err) throw err;
    res.send('Review updated successfully');
  });
};

// Delete review by id
exports.deleteReview = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM reviews WHERE id = ?', [id], (err, result) => {
    if (err) throw err;
    res.send('Review deleted successfully');
  });
};
