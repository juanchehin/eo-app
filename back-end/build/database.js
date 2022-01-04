"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mysql_1 = __importDefault(require("mysql"));
// const pool = mysql.createPool(keys.database);
var pool = mysql_1["default"].createPool({
    host: 'localhost',
    user: 'root',
    password: ''
});
pool.getConnection(function (err, connection) {
    if (err) {
        console.log('Error de conexion : ', err);
        // resolve(err);
    }
    else {
        // pool.releaseConnection(connection);
        console.log('Conexion de BD exitosa ');
    }
});
// pool.getConnection((err, connection) => {
//     .then(connection => {
//         pool.releaseConnection(connection);
//         console.log('Base de datos conectada');
//     })
// });
exports["default"] = pool;
