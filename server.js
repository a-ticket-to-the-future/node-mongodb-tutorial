const { error } = require("console");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const foodRouter = require("./routes/foodRoutes");

app.use(foodRouter);

// データベース接続

mongoose.connect("mongodb+srv://ticketstothefuturekatakura:grandemilan2011@cluster0.h4knfxp.mongodb.net/food?retryWrites=true&w=majority")
.then(() => console.log("データベース接続に成功しました"))
.catch((error) => console.log(err));

app.listen(3000,() => {
    console.log("サーバーが起動しました");
});