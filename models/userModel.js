const db = require('../Config/db');

// Fungsi untuk menambahkan pengguna
exports.addUser = (user, callback) => {
  const { username, password, name, email, phone } = user;
  const query = 'INSERT INTO users (username, password, name, email, phone) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [username, password, name, email, phone], callback);
};

// Fungsi untuk mendapatkan semua pengguna
exports.getAllUsers = (callback) => {
  db.query('SELECT * FROM users', callback);
};

// Fungsi untuk memperbarui pengguna
exports.updateUser = (id, user, callback) => {
  const { username, password, name, email, phone } = user;
  const query = 'UPDATE users SET username = ?, password = ?, name = ?, email = ?, phone = ? WHERE id = ?';
  db.query(query, [username, password, name, email, phone, id], callback);
};

// Fungsi untuk menghapus pengguna
exports.deleteUser = (id, callback) => {
  db.query('DELETE FROM users WHERE id = ?', [id], callback);
};
