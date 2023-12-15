// app.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const ProductController = require('./src/controllers/productController.js');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración CORS
app.use(cors());

// Conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err.message);
  } else {
    console.log('Conexión a la base de datos MySQL establecida');
  }
});

// Configuración de rutas
app.use('/product', ProductController);

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
