const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
    name:{
        type: String,
        require:true,
        trim:true, //空白削除
        lowercase :true,
    },
    calories: {
        type: Number,
        default: 0,
        validata(value){
            if(value < 0) throw new Error("マイナスのカロリーは存在しません");
        },

    },
});


const Food = mongoose.model("Food", FoodSchema);

module.exports = Food;