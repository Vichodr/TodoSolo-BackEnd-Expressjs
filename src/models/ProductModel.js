// models/ProductModel.js
const { DataTypes } = require('sequelize');
const db = require('../config/database'); // Asegúrate de ajustar la ruta según tu estructura

const ProductModel = db.define('product', {
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productDescription: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imgUrl: {
    type: DataTypes.STRING,
  },
});

module.exports = ProductModel;
