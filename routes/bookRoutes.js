const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authenticateToken = require('../Middlewares/authMiddleware');

// Routes untuk buku
router.post('/', authenticateToken, bookController.createBook);
router.get('/', authenticateToken, bookController.getAllBooks);
router.put('/:id', authenticateToken, bookController.updateBook);
router.delete('/:id', authenticateToken, bookController.deleteBook);

module.exports = router;
