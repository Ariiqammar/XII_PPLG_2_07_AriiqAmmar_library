const db = require('../Config/db');

// Create new book
exports.createBook = (req, res) => {
  const { title, writer, user_id, category_id, publisher, year } = req.body;
  const query = 'INSERT INTO books (title, writer, user_id, category_id, publisher, year) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [title, writer, user_id, category_id, publisher, year], (err, result) => {
    if (err) throw err;
    res.send('Book added successfully');
  });
};

// Get all books
exports.getAllBooks = (req, res) => {
  db.query('SELECT * FROM books', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

// Update book by id
exports.updateBook = (req, res) => {
  const { id } = req.params;
  const { title, writer, user_id, category_id, publisher, year } = req.body;
  const query = 'UPDATE books SET title = ?, writer = ?, user_id = ?, category_id = ?, publisher = ?, year = ? WHERE id = ?';
  db.query(query, [title, writer, user_id, category_id, publisher, year, id], (err, result) => {
    if (err) throw err;
    res.send('Book updated successfully');
  });
};

// Delete book by id
exports.deleteBook = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM books WHERE id = ?', [id], (err, result) => {
    if (err) throw err;
    res.send('Book deleted successfully');
  });
};
