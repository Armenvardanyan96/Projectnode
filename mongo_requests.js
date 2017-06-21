/**
 * Created by armen.vardanyan on 6/20/2017.
 */
const mongoose = require("mongoose");
const {userModel} = require("./mongo_models.js");

mongoose.connect('mongodb://localhost/Armendb');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("mongo is connected");
});

setTimeout(() => {
    userModel.find({})
        .then(doc => {
            console.log(doc);
        })
},1000)

