const express = require('express');
const router = express.Router();
const {searchTable} = require('./query.js');

// --------------------------------------------------------------------------------------------------

router.get('/', (req, res) => {
    res.send('postgresql');
});

router.get('/test', (req, res) => {
    searchTable('David Silva')
        .then(result => {
            res.send(result);
        })
        .catch(error => {
            console.error(`FILE: postgres.js | ERROR: \n`, error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    searchTable(req.body.Name)
        .then(result => {
            res.send(result);
        })
        .catch(error => {
            console.error(`FILE: postgres.js () | ERROR: \n`, error);
            res.sendStatus(500);
        });
});

module.exports = router;