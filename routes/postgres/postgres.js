const express = require('express');
const router = express.Router();
const {searchTable} = require('./query.js');

// --------------------------------------------------------------------------------------------------

const logger = require('../../logger/logger');

// --------------------------------------------------------------------------------------------------
router.get('/', (req, res) => {
    logger.info({message: `GET /postgres PID: ${process.pid}`, file: __file, func: __function, line: __line, });
    res.send('postgresql');
});

router.get('/test', (req, res) => {
    searchTable('David Silva')
        .then(result => {
            // logger.info({message: `GET /postgres/test | PID: ${process.pid}`, file: __file, func: __function, line: __line, });
            res.send(result);
        })
        .catch(error => {
            logger.error({message: `ERROR GET /postgres/test PID: ${process.pid} | ERROR: ${error}`, file: __file, func: __function, line: __line, });
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    searchTable(req.body.Name)
        .then(result => {
            res.send(result);
        })
        .catch(error => {
            logger.error({message: `ERROR POST /postgres PID: ${process.pid} | ERROR: ${error}`, file: __file, func: __function, line: __line, });

            res.sendStatus(500);
        });
});


module.exports = router;