import mysql from 'mysql2/promise';
import keys from './keys';

// const pool = mysql.createPool(keys.database);

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'eo-app'
});

pool.getConnection().then((connection) => {}).catch(error=>console.log(error))


export default pool;
