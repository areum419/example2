import express from "express";
import cors from "cors";
import morgan from "morgan";

import productRoute from "./router/product.js"; // produect.js 만든다음에 여기에 import 꼭 생성


const app = express();

app.use(cors()); //외부접근 라이브러리
app.use(morgan("dev")); //미들웨어 설정 (로그 작성)

app.use("/product", productRoute);

const port = 8080;
app.get("/test", (req,res) => {
    res.json({
        msg : "test api"
    })
})



app.listen(port, console.log("server start"));

