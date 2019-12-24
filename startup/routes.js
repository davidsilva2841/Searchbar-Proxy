// const mongodb = require('../routes/mongodb/mongodb.js');
// const mysql = require('../routes/mysql/mysql.js');
const postgres = require('../routes/postgres/postgres');


module.exports = function(app) {

    // app.use('/mongodb', mongodb);
    // app.use('/mysql', mysql);
    // app.use('/postgres', postgres);
    app.use('/proxy/postgres', postgres);
};

