import mongoose from '../config/dbConfig';
import { Schema } from 'mongoose';

const productSchema = new Schema({
    productId: {
        type: Number,
    },
    productName: {
        type: String,
    },
    productQuantity:{
        type: Number,
    },
    productPrice: {
        type: Number,
    }
});

const productModel = mongoose.model('product', productSchema);

export default productModel;