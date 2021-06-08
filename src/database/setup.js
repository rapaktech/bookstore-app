const dotenv = require('dotenv').config();

const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

module.exports = function () {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }, (err) => {
        if (err) throw err;
        else console.log('Database connection is successful');
    });
}