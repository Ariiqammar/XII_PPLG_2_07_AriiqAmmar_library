const db = require('../Config/db');

// Fungsi untuk menambahkan buku
exports.addBook = (book, callback) => {
  const { title, writer, user_id, category_id, publisher, year } = book;
  const query = 'INSERT INTO books (title, writer, user_id, category_id, publisher, year) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [title, writer, user_id, category_id, publisher, year], callback);
};

// Fungsi untuk mendapatkan semua buku
exports.getAllBooks = (callback) => {
  db.query('SELECT * FROM books', callback);
};

// Fungsi untuk memperbarui buku
exports.updateBook = (id, book, callback) => {
  const { title, writer, user_id, category_id, publisher, year } = book;
  const query = 'UPDATE books SET title = ?, writer = ?, user_id = ?, category_id = ?, publisher = ?, year = ? WHERE id = ?';
  db.query(query, [title, writer, user_id, category_id, publisher, year, id], callback);
};

// Fungsi untuk menghapus buku
exports.deleteBook = (id, callback) => {
  db.query('DELETE FROM books WHERE id = ?', [id], callback);
};
