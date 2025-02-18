const db = require('../Config/db');

// Fungsi untuk menambahkan peminjaman
exports.addLoan = (loan, callback) => {
  const { book_id, user_id, loan_date, return_date, status } = loan;
  const query = 'INSERT INTO loans (book_id, user_id, loan_date, return_date, status) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [book_id, user_id, loan_date, return_date, status], callback);
};

// Fungsi untuk mendapatkan semua peminjaman
exports.getAllLoans = (callback) => {
  db.query('SELECT * FROM loans', callback);
};

// Fungsi untuk memperbarui peminjaman
exports.updateLoan = (id, loan, callback) => {
  const { book_id, user_id, loan_date, return_date, status } = loan;
  const query = 'UPDATE loans SET book_id = ?, user_id = ?, loan_date = ?, return_date = ?, status = ? WHERE id = ?';
  db.query(query, [book_id, user_id, loan_date, return_date, status, id], callback);
};

// Fungsi untuk menghapus peminjaman
exports.deleteLoan = (id, callback) => {
  db.query('DELETE FROM loans WHERE id = ?', [id], callback);
};
