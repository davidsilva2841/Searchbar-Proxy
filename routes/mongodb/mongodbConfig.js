const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testing', {useNewUrlParser: true})
    .then(result => {
        console.log(`FILE: mongodbConfig.js Connected to MongoDB...`);
    })
    .catch(error => {
    	console.error(`FILE: mongodbConfig.js () | ERROR: \n`, error);
    });

module.exports = {mongoose};
