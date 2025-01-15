import express from 'express';
import "dotenv/config";
import "./src/db/dbConnection.js";
import productRouter from "./src/routers/productRouter.js";

const port = process.env.PORT || 5001;

const app = express();
app.use(express.json());
app.use("/api/Product", productRouter);


app.get("/", (req, res) => { console.log("imtahandan ən yüksək nəticəni alacam") })

app.listen(port, () => {
    console.log(`Server is running on port localhost:${port}`)
})