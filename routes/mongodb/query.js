const {mongoose} = require('./mongodbConfig.js');

const collection2 = mongoose.model(
    'collection2',
    new mongoose.Schema({
        id: Number,
        Name: String
    })
);

const searchCollection = (value) => {
    return collection2.find({Name: value});
};

module.exports = {searchCollection};

