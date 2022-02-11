var db = require("./db");

// exports.list = function (callback) {
//   let sql = `select * from users`;
//   db.query(sql, function (err, d) {
//     callback(d);
//   });
// };

// exports.create = function (data, callback) {
//   let sql = `insert into users set ?`;
//   db.query(sql, data, (err, d) => {
//     callback(d);
//   });
// };

// exports.update = function (id, data, callback) {
//   let sql = `update users set ? where idUser = ? `;
//   db.query(sql, [data, id], (err, d) => {
//     if (err) throw err;
//     callback();
//   });
// };

// exports.read = function (id, callback) {
//   let sql = `select * from users where idUser = ?`;
//   db.query(sql, id, (err, d) => {
//     data = d[0];
//     callback(data);
//   });
// };
