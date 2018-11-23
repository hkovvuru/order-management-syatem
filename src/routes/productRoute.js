import { Router } from 'express';
import productMethods from '../controllers/productController';

const productRoute = new Router();

// Get all product details 
productRoute.get('/get-products', productMethods.allProducts);

// add Product details 
productRoute.post('/add-product', productMethods.addProduct);

// buy product
productRoute.get('/buy-product/:id', productMethods.buyProduct);

export default productRoute;