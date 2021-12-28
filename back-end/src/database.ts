import mysql from 'mysql';
// var mysql = require('mysql');
import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection((err, connection) => {
    if (err) {
     console.log('Error de conexion : ', err);
     // resolve(err);
    } else {
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


export default pool;
