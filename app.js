const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const loanRoutes = require('./routes/loanRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const app = express();

app.use(bodyParser.json());

// Auth Middleware
const authenticateToken = require('./Middlewares/authMiddleware');

// Routes
app.use('/books', bookRoutes);
app.use('/users', userRoutes);
app.use('/loans', loanRoutes);
app.use('/reviews', reviewRoutes);
app.use('/categories', categoryRoutes);

// Login Route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // demo login validation
  if (username !== 'admin' || password !== 'password') {
    return res.status(401).send('Invalid credentials');
  }

  const user = { username };
  const token = jwt.sign(user, 'your_secret_key', { expiresIn: '1h' });

  res.json({ token });
});

// Server Setup
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
