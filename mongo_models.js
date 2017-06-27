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

const userModel = mongoose.model('Users', usersSchema, "users");

module.exports = {userModel};