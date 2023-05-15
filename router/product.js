import express from "express";

import product from "../models/product.js";
import productModel from "../models/product.js";

const router = express.Router();

// CRUD 생성
router.get("/", (req,res) => {
    res.json({
        msg : "product get all"
    })
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
        msg : "create ____ product",
        product : newProduct
    })
})

router.put("/update", (req,res) => {
    res.json({
        msg : "update & product"
    })
})

router.delete("/delete", (req, res) => {
    res.json({
        msg : "delete & product"
    })
})


export default router;