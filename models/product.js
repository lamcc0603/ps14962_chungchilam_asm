var db = require("./db");

exports.listNoiBat = function (callback) {
  let sql = `select * from products where noiBat = 1  ORDER BY price DESC limit 8;`;
  db.query(sql, function (err, d) {
    callback(d);
  });
};

exports.productByCate = function (id, callback) {
  let sql = `select * from products left join categories on products.cate_id = categories.cate_id where categories.cate_id = ? ;`;
  db.query(sql, id, function (err, d) {
    callback(d);
  });
};

// exports.create = function (data, callback) {
//   let sql = `insert into products set ?`;
//   db.query(sql, data, (err, d) => {
//     callback(d);
//   });
// };

// exports.update = function (id, data, callback) {
//   let sql = `update products set ? where id = ? `;
//   db.query(sql, [data, id], (err, d) => {
//     if (err) throw err;
//     callback();
//   });
// };

exports.read = function (id, callback) {
  let sql = `select * from products where id = ?`;
  db.query(sql, id, (err, d) => {
    data = d[0];
    callback(data);
    console.log(data);
  });
};
