const {pool} = require('./postgresConfig.js');

const searchTable = (value) => {
    return pool.query({text: `select * from testing.products where name = '${value}';`})
};

module.exports = {
    searchTable
};
