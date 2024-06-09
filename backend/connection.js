//const Sequelize = require('sequelize');
const mariadb = require('mariadb');
require('dotenv').config();

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    connectTimeout: 30000,
});

module.exports = pool;




//getting this error message after a few seconds running node index.js:
// C:\Users\qt09n\Desktop\final project\gardening_manuals_page\backend\node_modules\mariadb\lib\misc\errors.js:66
//   return new SqlError(msg, sql, fatal, info, sqlState, errno, additionalStack, addHeader, cause);
//          ^

// SqlError: (conn:-1, no: 45028, SQLState: HY000) retrieve connection from pool timeout after 10012ms
//     (pool connections: active=10 idle=0 limit=10)
//     at module.exports.createError (C:\Users\qt09n\Desktop\final project\gardening_manuals_page\backend\node_modules\mariadb\lib\misc\errors.js:66:10)
//     at Pool._requestTimeoutHandler (C:\Users\qt09n\Desktop\final project\gardening_manuals_page\backend\node_modules\mariadb\lib\pool.js:353:26)
//     at listOnTimeout (node:internal/timers:573:17)
//     at process.processTimers (node:internal/timers:514:7) {
//   sqlMessage: 'retrieve connection from pool timeout after 10012ms\n' +
//     '    (pool connections: active=10 idle=0 limit=10)',
//     '    (pool connections: active=10 idle=0 limit=10)',
//   sql: null,
//     '    (pool connections: active=10 idle=0 limit=10)',
//   sql: null,
//   fatal: false,
//   errno: 45028,
//   sqlState: 'HY000',
//   code: 'ER_GET_CONNECTION_TIMEOUT'
// }

//stackoverflow.com/questions/53393660/cant-connect-node-js-to-remote-database-mariadb
//"For others with the same error message, particularly if the connection works the first few times but not after that
//the error can happen if you don't end the connection with conn.end" 

// so try adding conn.end() at the end of each query which has pool.connect()??