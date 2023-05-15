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

// 수정
router.put("/:productId", async (req,res) => {

    const product = await productModel.findById(req.params.productId);

    if(product) {
        product.title = req.body.productTitle ? req.body.productTitle : product.title
        product.price = req.body.productPrice ? req.body.productPrice : product.price
        product.description = req.body.productDesc ? req.body.productDesc : product.description
        product.brand = req.body.productBrand ? req.body.productBrand : product.brand
        product.company = req.body.productCompany ? req.body.productCompany : product.company
        product.stock = req.body.productStock ? req.body.productStock : product.stock
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
    await productModel.findByIdAndDelete(req.params.productId)

    res.json({
        msg: `delete & product at ${req.params.productId}$`
    })
})
export default router;