/**
 * Created by user on 08.06.2017.
 */
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", {
        title: "Fill in to register"
    })
});

router.post("/login", (req, res) => {
    console.log(req.body);
    res.send("Registered")
});

module.exports = router;
