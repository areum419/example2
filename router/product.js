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

 //   const product = await productModel.findById(req.params.productId);
    const {productId} = req.params
    const product = await productModel.findById(productId);

    if(!product){
        res.json({
            msg: "no product"
        })
    }else{
        res.json({
            // msg: `successful get ${req.params.productId}$`,
            // product: product
            msg: `successful get ${productId}$`,
            product
        })
    }
})
router.post("/", async(req,res) => {
   // const userInput = {
   //     name : req.body.produtName,
   //     price : req.body.productPrice
   // }

    const {titme, price, description, brand, company, stock} = req.body;

    const userInput = new productModel({
        title, price, description,  brand, company, stock
    })

    const newProduct = await userInput.save();

    res.json({
        msg : "create >  product",
        product : newProduct
    })
})

// 수정
router.put("/:productId", async (req,res) => {

//    const product = await productModel.findById(req.params.productId);

    const {title, price, description, brand, company, stock} = req.body;

    const {productId} = req.params
    const product = await productModel.findById(productId);

    if(product) {
        product.title = title ? title : product.title
        product.price = price ? price : product.price
        product.description = description ? description : product.description
        product.brand = brand ? brand : product.brand
        product.company = company ? company : product.company
        product.stock = stock ? stock : product.stock
    }

    const updateProduct = await product.save(); // db commit 역활

    res.json({
        msg : `update & product at ${req.params.productId}$`,
        product : updateProduct
    })
})

// 전체삭제
router.delete("/", async (req, res) => {

    await productModel.deleteMany()

    res.json({
        msg : "delete & product"
    })
})

//단건 삭제
router.delete("/:productId", async(req,res) => {
    //await productModel.findByIdAndDelete(req.params.productId)
    const product = await productModel.findById(productId)
    await productModel.findByIdAndDelete(productId)

    res.json({
        msg: `delete & product at ${productId}$`
    })
})
export default router;