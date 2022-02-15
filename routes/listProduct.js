var express = require("express");
var db = require("../models/db");
var modelProduct = require("../models/product");
var router = express.Router();

/* GET products listing. */
router.get("/", function (req, res, next) {
  modelProduct.listNoiBat((listProduct) => {
    res.json(listProduct);
    // console.log(listProduct);
  });
});

module.exports = router;
