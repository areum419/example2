import express from "express";

import product from "../models/product.js";
import productModel from "../models/product.js";

const router = express.Router();

// CRUD 생성
router.get("/", async (req,res) => {

    const products = await productModel.find();

    res.json({
        msg : "product get all",
        count: products.length,
        products: products.map(item => {
            return {
                id: item._id,
                title: item.title,
                price: item.price
            }
        })
    })
})

// 상세 조회
router.get("/:productId", async (req,res) => {

    const product = await productModel.findById(req.params.productId);

    if(!product){
        res.json({
            msg: "no product"
        })
    }else{
        res.json({
            msg: `successful get ${req.params.productId}$`,
            product: product
        })
    }
})
router.post("/", async(req,res) => {
   // const userInput = {
   //     name : req.body.produtName,
   //     price : req.body.productPrice
   // }

    const userInput = new productModel({
        title: req.body.productTitle,
        price: req.body.productPrice,
        description: req.body.productDescription,
        brand: req.body.productBrnad,
        company: req.body.productCompany,
        stock: req.body.productStock
    })

    const newProduct = await userInput.save();

    res.json({
        msg : "create >  product",
        product : newProduct
    })
})

router.put("/", (req,res) => {
    res.json({
        msg : "update & product"
    })
})

router.delete("/", (req, res) => {
    res.json({
        msg : "delete & product"
    })
})


export default router;