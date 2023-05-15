import mongoose from "mongoose";

const productsSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            default: 0
        },
        description: {
            type: String,
            min: 3,
            max: 300
        },
        brand: {
            type: String
        },
        company: String,
        stock: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const productModel = mongoose.model("product", productsSchema);




export default productModel;

