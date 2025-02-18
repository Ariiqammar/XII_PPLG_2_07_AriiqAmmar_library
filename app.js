// app.js
const express = require('express');
const bodyParser = require('body-parser');
const reviewRoutes = require('./routes/reviewRoutes');
const db = require('./db');  // Koneksi ke database

const app = express();
app.use(bodyParser.json()); // Parsing JSON
app.use('/api', reviewRoutes); // Prefix untuk semua route reviews

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});