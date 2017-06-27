/**
 * Created by user on 08.06.2017.
 */
const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const {userModel} = require("./mongo_models.js");

mongoose.connect('mongodb://localhost/Armendb');

const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err);
});
db.once('open', () => {
    console.log("mongo is connected");
});

router.get("/", (req, res) => {
    res.render("index", {
        title: "Fill in to register"
    })
});

router.post("/register", (req, res) => {
    userModel.create(req.body).then(doc => {
        console.log(req.body);
    });
    res.send("Registered")
});

router.get("/login", (req, res) => {
    res.render("login.jade");
});
router.post("/login", (req, res) => {
    console.log(req.body.login);

   /*userModel.find({login: req.body.login}, null, {lean: true}).then(doc => {
        console.log(Object.keys(doc));
    });*/
    userModel.find({login: req.body.login}).then(doc => {
        console.log(doc);
    });
    res.send("Login Done")
});

module.exports = router;
