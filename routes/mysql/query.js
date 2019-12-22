const Bluebird = require('bluebird');
const {connection} = require('./sqlConfig.js');

// --------------------------------------------------------------------------------------------------

connection.connect();   // Connect to DB
connection.escape();    // Prevent SQL injection attacks
const db = Bluebird.promisifyAll(connection);   // Promisify all library functions

// --------------------------------------------------------------------------------------------------

const searchTable = (value) => {
    return db.queryAsync(`SELECT * FROM Testing.Products WHERE Name = '${value}';`);
    // return db.queryAsync(`SELECT * FROM Testing.Products WHERE Name LIKE '${value}%';`);
};

module.exports = {
    searchTable
};