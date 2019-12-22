const express = require('express');
const router = express.Router();
const {searchCollection} = require('./query');


router.get('/', (req, res) => {
	res.send('mongodb');
});

router.get('/test',(req, res) => {
	searchCollection('David Silva')
        .then(result => {
            // console.log('MongoDB Sending result...');
            res.send(result);
        })
        .catch(error => {
        	console.error(`FILE: mongodb.js () | ERROR: \n`, error);
        })
});


module.exports = router;
