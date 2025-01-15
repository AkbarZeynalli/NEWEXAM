import express from 'express';
import { addProduct, deletePrduct, getProduct } from '../controllers/productControllers.js';

const procuRouter = express.Router();

procuRouter.post("/", addProduct)
procuRouter.get("/", getProduct)
procuRouter.delete("/:id", deletePrduct)
export default procuRouter;