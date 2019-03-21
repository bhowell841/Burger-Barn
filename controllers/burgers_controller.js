const express = require("express");
const router = express.Router();
const burger = require("../model/burger.js");

// Create routes
router.get("/", function(req, res) {
    burger.all(function(data) {
        const burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create("burger_name", req.body.burger_name, function(result) {
        res.status(200).end()
    });
});

router.put("/api/burger/:id", function(req, res) {
    const condition = "id = " + req.params.id
    console.log("id: " + condition);
    burger.update("devoured", req.body.devoured, condition, function(result){
        res.status(200).end();
    });
});


module.exports = router;