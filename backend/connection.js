//const Sequelize = require('sequelize');
const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host:'localhost',
    user: 'root',
    password: 'ghostsoap',
    database: 'gardening_manuals',
    port: 3360
})

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