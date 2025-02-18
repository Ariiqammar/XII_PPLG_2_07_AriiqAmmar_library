const mysql = require('mysql2');

// Konfigurasi koneksi ke MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',  // Ganti dengan password MySQL Anda
  database: 'testing',     // Nama database yang digunakan
});

// Connect ke database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = db;
