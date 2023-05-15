import mongoose from "mongoose";

const productsSchema = mongoose.Schema(
    {
        title: String,
        price: Number,
        description: String,
        brand: String,
        company: String,
        stock: Number
    },
    {
        timestamps: true
    }
);

const productModel = mongoose.model("product", productsSchema);




export default productModel;

