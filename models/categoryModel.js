// models/categoryModel.js
const db = require("../Config/db");

// Fungsi untuk mendapatkan semua kategori
const getAllCategories = (callback) => {
  const query = "SELECT * FROM categories";
  db.query(query, (err, results) => {
    callback(err, results);
  });
};

// Fungsi untuk mendapatkan kategori berdasarkan ID
const getCategoryById = (id, callback) => {
  const query = "SELECT * FROM categories WHERE id = ?";
  db.query(query, [id], (err, result) => {
    callback(err, result);
  });
};

// Fungsi untuk membuat kategori baru
const createCategory = (data, callback) => {
  const query = "INSERT INTO categories (name, description) VALUES (?, ?)";
  db.query(query, [data.name, data.description], (err, result) => {
    callback(err, result);
  });
};

// Fungsi untuk update kategori
const updateCategory = (id, data, callback) => {
  const query = "UPDATE categories SET name = ?, description = ? WHERE id = ?";
  db.query(query, [data.name, data.description, id], (err, result) => {
    callback(err, result);
  });
};

// Fungsi untuk delete kategori
const deleteCategory = (id, callback) => {
  const query = "DELETE FROM categories WHERE id = ?";
  db.query(query, [id], (err, result) => {
    callback(err, result);
  });
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
