const express = require("express");
const router = express.Router();
const burger = require("../model/burger.js");

// Create routes
router.get("/", function (req, res) {
    console.log("GET is working");
    burger.selectAll(function (data) {
        const burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });


    router.post("/", function (req, res) {
        console.log("POST is working");
        burger.insertOne(req.body.burger_name, function(result) {
            console.log(result)
            res.json({ id: result.insertId });
            });
    });

    router.put("/:id", function (req, res) {
        console.log("PUT is working");
        burger.updateOne(req.params.id, function(result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
        }
            return    res.status(200).end();
        });
    });

    
});


module.exports = router;