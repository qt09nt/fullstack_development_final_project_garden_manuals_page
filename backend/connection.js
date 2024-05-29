//const Sequelize = require('sequelize');
const mariadb = require('mariadb');
require('dotenv').config();

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});

module.exports = pool;

// const databaseName = 'roboschoolapp';
// const username = 'root';
// const password = 'ghostsoap';
// const dbConfig = new Sequelize(databaseName, username, password, {dialect: 'mariadb'});

//Test DB connection
// dbConfig.authenticate().then(() => {
//     console.log('Database is connected');

//     // //Create database tables
//     // dbConfig.sync().then(() => {
//     //     console.log('Tables created')
//     // }).catch((err) => {
//     //     console.log(err);
//     // });

// }).catch((err) => {
//     console.log(err)
// });


// module.exports = dbConfig;