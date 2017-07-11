/**
 * Created by user on 08.06.2017.
 */
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const {userModel} = require("./mongo_models.js");
const addProducts = require("./mongo_models.js");
const newsModel = require("./mongo_models.js");
const moment = require("moment");


mongoose.connect('mongodb://localhost/node');

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
//LOGIN
router.get("/login", (req, res) => {
    res.render("login.jade");
});

router.post("/login", (req, res) => {
    console.log(req.body.login);

   /*userModel.find({login: req.body.login}, null, {lean: true}).then(doc => {
        console.log(Object.keys(doc));
    });*/
   let response = {error: 0, message: ""};
   userModel.findOne({login: req.body.login}, null, {lean: true}).then(doc => {
       console.log(doc);
       if (doc) {
           if(doc.password==req.body.password){
               response = doc;
           }
           else {
               response.error = 1;
               response.message = "Incorrect Password";
           }
       } else {
           response.error = 1;
           response.message = "Length Fail";
       }
       res.send(response);
   });
});



router.post("/addProducts", (req, res) => {
    addProducts.create(req.body)
        .then(doc => {
            console.log(req.body);
            res.send("Saved")
    })
        .catch(err => {
            res.send("error:" + err)
    });
});

router.get("/products", (req, res) => {
    addProducts.find({type: req.query.type}, null, {lean: true})
        .then(doc => {
            res.send(doc);
        })
});

router.post("/add/news", (req, res) => {
    let newsObj = req.body;
    if(newsObj){
        //newsObj.date = new Date();
        newsObj.date = moment().format("X");
        newsModel.create(newsObj)
            .then(doc => {
                console.log(newsObj);
                res.send("Saved")
            })
            .catch(err => {
                res.send("error:" + err)
            });
    };
});
module.exports = router;
