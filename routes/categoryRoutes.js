// routes/categoryRoutes.js
const express = require('express');
const categoryController = require('../controllers/categoryController');
const router = express.Router();

// Route CRUD
router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.post('/', categoryController.createCategory);
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;