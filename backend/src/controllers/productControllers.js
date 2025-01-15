import "../models/productModels.js";
import Product from "../models/productModels.js";


export const addProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getProduct = async (req, res) => {
    try {
        const newProduct = await Product.find(req.body);
        res.status(200).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deletePrduct = async (req, res) => {
    const { id } = req.params;
    try {
        const newProduct = await Product.findByIdAndDelete(id);
        res.status(200).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}