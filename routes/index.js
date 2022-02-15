var express = require("express");
var Product = require("../models/product");
var Category = require("../models/category");

var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  Product.listNoiBat((spNoiBat) => {
    Category.listCate((listCate) => {
      res.render("main", {
        spNoiBat: spNoiBat,
        listCate: listCate,
        view: "home",
      });
    });
  });
});

router.get("/categories/:id", (req, res) => {
  id = req.params.id;
  Product.productByCate(id, (listSpByCate) => {
    Category.listCate((listCate) => {
      Category.nameCateById(id, (nameCateById) => {
        res.render("main", {
          listSpByCate: listSpByCate,
          listCate: listCate,
          nameCateById: nameCateById,
          view: "categories",
        });
      });
    });
  });
});

router.get("/product/:id", (req, res) => {
  id = req.params.id;
  Product.read(id, (sp) => {
    Category.listCate((listCate) => {
      Category.nameCateByIdForProduct(sp.cate_id, (nameCateById) => {
        console.log(sp.cate_id);
        // console.log(`ID`, id, `DATA`, nameCateById);
        res.render("main", {
          sp: sp,
          listCate: listCate,
          nameCateById: nameCateById,
          view: "product",
        });
      });
    });
  });
});
module.exports = router;
