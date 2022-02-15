var db = require("./db");

exports.listCate = function (callback) {
  let sql = `select * from categories ;`;
  db.query(sql, function (err, d) {
    callback(d);
  });
};

exports.nameCateById = function (id, callback) {
  let sql = `select * from categories where cate_id = ? ;`;
  db.query(sql, id, (err, d) => {
    data = d[0];
    callback(data);
  });
};

exports.nameCateByIdForProduct = function (id, callback) {
  let sql = `select * from categories join products where categories.cate_id = ?;`;
  db.query(sql, id, (err, d) => {
    data = d[0];
    callback(data);
    // console.log(data);
  });
};
