const db = require('../Config/db');

// Create new user
exports.createUser = (req, res) => {
  const { username, password, name, email, phone } = req.body;
  const query = 'INSERT INTO users (username, password, name, email, phone) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [username, password, name, email, phone], (err, result) => {
    if (err) throw err;
    res.send('User added successfully');
  });
};

// Get all users
exports.getAllUsers = (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

// Update user by id
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { username, password, name, email, phone } = req.body;
  const query = 'UPDATE users SET username = ?, password = ?, name = ?, email = ?, phone = ? WHERE id = ?';
  db.query(query, [username, password, name, email, phone, id], (err, result) => {
    if (err) throw err;
    res.send('User updated successfully');
  });
};

// Delete user by id
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM users WHERE id = ?', [id], (err, result) => {
    if (err) throw err;
    res.send('User deleted successfully');
  });
};
