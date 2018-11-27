// Dependencies
var express = require("express");

// Imports
var burger = require("../models/burger.js");
var router = express.Router();

// GET all burgers
router.get("/", function(req, res) {
  burger.all(function(data) {
    var handlebarsObject = {
      burgers: data
    };
    res.render("index", handlebarsObject);
  });
});

// POST new burger
router.post("/api/burgers", function(req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

// PUT updated burger
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Exports
module.exports = router;
