/**
 * Created by user on 08.06.2017.
 */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const jade = require("jade");
const serve = require('express-static');
const mongo = require("./mongo_requests.js")
const router = require("./route.js");
const moment = require("moment");



// app.use(express.static(__dirname + '/views'));
app.use(serve(__dirname + '/views'));
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev')); //before router
app.use("/", router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server started on port 3000 ...")
});