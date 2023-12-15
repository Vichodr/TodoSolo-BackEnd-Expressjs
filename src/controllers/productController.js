// controllers/productController.js
const express = require('express');
const router = express.Router();
const ProductService = require('../services/ProductService'); // Asegúrate de ajustar la ruta según tu estructura
const productService = new ProductService();

router.get('/showAllProducts', async (req, res) => {
  try {
    const allProducts = await productService.listProducts();
    res.json(allProducts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/addProduct', async (req, res) => {
  const newProduct = req.body;
  try {
    const result = await productService.addProduct(newProduct);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/getProductById/:id', async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productService.getProductById(productId);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/deleteProductById/:id', async (req, res) => {
  const productId = req.params.id;
  try {
    const result = await productService.deleteProductById(productId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/random', async (req, res) => {
  try {
    const randomProducts = await productService.getRandomProducts();
    res.json(randomProducts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
