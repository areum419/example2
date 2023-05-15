import express from "express";
import cors from "cors";
import morgan from "morgan";

import bodyParser from "body-parser";

import dotenv from "dotenv";

import connectDB from "./config/database.js";

dotenv.config();

import productRoute from "./router/product.js"; // produect.js 만든다음에 여기에 import 꼭 생성

import orderRoute from "./router/order.js";


const app = express();

connectDB()

app.use(cors()); //외부접근 라이브러리
app.use(morgan("dev")); //미들웨어 설정 (로그 작성)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}))

app.use("/product", productRoute); // post 맨 product 경로
app.use("/order", orderRoute);

//const port = 8080;
const port = process.env.PORT || 9090

app.get("/test", (req,res) => {
    res.json({
        msg : "test api"
    })
})


app.listen(port, console.log(`server started at ${port}`));