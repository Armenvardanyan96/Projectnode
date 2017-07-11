/**
 * Created by armen.vardanyan on 6/20/2017.
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
},{
    versionKey: false,
    strict: false
});

const productsSchema = new Schema({
   id: {type: Number,
       required: true},
    type: {type: String},
    price: {type: Number},
    os: {type: Array}
});

const newsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: String,
    date: {
        type: Number,
    },
    tags: Array
    });
const userModel = mongoose.model('Users', usersSchema, "users");

const addProducts = mongoose.model("Products", productsSchema, "products");

const newsModel = mongoose.model("News", newsSchema, "news");
module.exports = {userModel};
module.exports = addProducts;
module.exports = newsModel;