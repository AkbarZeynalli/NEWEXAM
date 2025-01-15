import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Database connection is successful")
}).catch(() => {
    console.log("Database connection is failed")
})
