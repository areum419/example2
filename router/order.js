import express from "express";
import orderModel from "../models/order.js";

const router = express.Router();


// 전체 조회
router.get("/", async (req, res) => {

    const orders= await orderModel
        .find()
        .populate("product")

    res.json({
        msg: "order get all",
        orders
    })
})


router.post("/", async (req, res) => {
    const {product, qty, memo} = req.body;

    const newOrder = new orderModel({
        product, qty, memo
    })

    const createOrder = await newOrder.save();

    res.json({
        msg : "successful new order",
        order : createOrder
    })
})

export default router;