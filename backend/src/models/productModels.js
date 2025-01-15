import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
}, { collection: "Product", timestamps: true });

const Product = mongoose.model("Product", productSchema);

export default Product;