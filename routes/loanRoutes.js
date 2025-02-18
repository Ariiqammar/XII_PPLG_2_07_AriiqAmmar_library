const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');
const authenticateToken = require('../Middlewares/authMiddleware');

// Routes untuk peminjaman
router.post('/', authenticateToken, loanController.createLoan);
router.get('/', authenticateToken, loanController.getAllLoans);
router.put('/:id', authenticateToken, loanController.updateLoan);
router.delete('/:id', authenticateToken, loanController.deleteLoan);

module.exports = router;
