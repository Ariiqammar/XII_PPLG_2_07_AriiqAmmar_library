const db = require('../Config/db');

// Create new loan
exports.createLoan = (req, res) => {
  const { book_id, user_id, loan_date, return_date, status } = req.body;
  const query = 'INSERT INTO loans (book_id, user_id, loan_date, return_date, status) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [book_id, user_id, loan_date, return_date, status], (err, result) => {
    if (err) throw err;
    res.send('Loan added successfully');
  });
};

// Get all loans
exports.getAllLoans = (req, res) => {
  db.query('SELECT * FROM loans', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

// Update loan by id
exports.updateLoan = (req, res) => {
  const { id } = req.params;
  const { book_id, user_id, loan_date, return_date, status } = req.body;
  const query = 'UPDATE loans SET book_id = ?, user_id = ?, loan_date = ?, return_date = ?, status = ? WHERE id = ?';
  db.query(query, [book_id, user_id, loan_date, return_date, status, id], (err, result) => {
    if (err) throw err;
    res.send('Loan updated successfully');
  });
};

// Delete loan by id
exports.deleteLoan = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM loans WHERE id = ?', [id], (err, result) => {
    if (err) throw err;
    res.send('Loan deleted successfully');
  });
};
