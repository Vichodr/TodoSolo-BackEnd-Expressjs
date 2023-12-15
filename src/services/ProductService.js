// services/productService.js
const ProductModel = require('../models/ProductModel');

class ProductService {
  async addProduct(productModel) {
    try {
      const newProduct = await ProductModel.create(productModel);
      return 'Producto agregado correctamente';
    } catch (error) {
      throw new Error('Error al agregar el producto');
    }
  }

  async listProducts() {
    try {
      const allProducts = await ProductModel.findAll();
      return allProducts;
    } catch (error) {
      throw new Error('Error al obtener la lista de productos');
    }
  }

  async getProductById(id) {
    try {
      const product = await ProductModel.findByPk(id);
      return product;
    } catch (error) {
      throw new Error('Error al obtener el producto por ID');
    }
  }

  async deleteProductById(id) {
    try {
      const product = await ProductModel.findByPk(id);
      if (product) {
        await product.destroy();
        return 'Producto eliminado correctamente';
      } else {
        return 'Producto no encontrado';
      }
    } catch (error) {
      throw new Error('Error al eliminar el producto');
    }
  }

  async getRandomProducts() {
    try {
      const allProducts = await ProductModel.findAll();
      const numberOfRandomProducts = 5; // Cambia según tus necesidades
      const randomProducts = allProducts.sort(() => Math.random() - 0.5).slice(0, numberOfRandomProducts);
      return randomProducts;
    } catch (error) {
      throw new Error('Error al obtener productos aleatorios');
    }
  }
}

module.exports = ProductService;
