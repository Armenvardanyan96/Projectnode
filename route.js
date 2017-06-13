/**
 * Created by user on 08.06.2017.
 */
const express = require("express");
const router = express.Router();

router.get("/index", (req, res) => {
    res.render("index")
});

router.post("/login", (req, res) => {
    console.log(req.body);
    res.send("WELCOME")
});
module.exports = router;
