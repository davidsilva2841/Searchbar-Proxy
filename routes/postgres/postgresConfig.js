const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'ds',
    port: 5432,
    database: 'postgres',
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

pool.connect()
    .then(result => {
        console.log(`FILE: postgresConfig.js Connected to PostgresSQL...`);
    })
    .catch(error => {
        console.error(`FILE: postgresConfig.js Failed connecting to PostgresSQL | ERROR: \n`, error);
    });

module.exports = {pool};
