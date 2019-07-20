var express = require('express');
var router = express.Router();

var burger = require("..models/burger.js")

router.get("/", function (req, res) {
    burger.selectall(function (data) {


    });
});
router.post("/api/burgers", function (req, res) {
    burger.updateOne(

    );
});
router.insertOne("/api/burgers/:id", function (req, res) {
    burger.update(
    );
});