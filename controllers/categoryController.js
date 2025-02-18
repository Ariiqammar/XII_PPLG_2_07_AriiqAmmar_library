// controllers/categoryController.js
const Category = require('../models/categoryModel');

// Mendapatkan semua kategori
const getAllCategories = (req, res) => {
  Category.getAllCategories((err, categories) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json(categories);
  });
};

// Mendapatkan kategori berdasarkan ID
const getCategoryById = (req, res) => {
  const { id } = req.params;
  Category.getCategoryById(id, (err, category) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
  });
};

// Membuat kategori baru
const createCategory = (req, res) => {
  const { name, description } = req.body;
  Category.createCategory({ name, description }, (err, result) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }
    res.status(201).json({ id: result.insertId, name, description });
  });
};

// Mengupdate kategori
const updateCategory = (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  Category.updateCategory(id, { name, description }, (err, result) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }
    if (result.affectedRows > 0) {
      return res.json({ message: 'Category updated successfully' });
    }
    res.status(404).json({ message: 'Category not found' });
  });
};

// Menghapus kategori
const deleteCategory = (req, res) => {
  const { id } = req.params;
  Category.deleteCategory(id, (err, result) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    if (result.affectedRows > 0) {
      return res.json({ message: 'Category deleted successfully' });
    }
    res.status(404).json({ message: 'Category not found' });
  });
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
};
