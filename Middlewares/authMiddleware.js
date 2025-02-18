const jwt = require('jsonwebtoken');

// Fungsi untuk autentikasi token
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization') && req.header('Authorization').split(' ')[1]; // Mengambil token dari header 'Authorization'
  
  if (!token) return res.status(401).send('Access Denied. No token provided.');

  jwt.verify(token, 'your_secret_key', (err, user) => {
    if (err) return res.status(403).send('Invalid Token');
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
