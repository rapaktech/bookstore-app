require('dotenv').config();

const mongoose = require('mongoose');

const connectionString = process.env.DB_URL;

module.exports = function () {
    mongoose.connect(connectionString, {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
        }, (err) => {
            if (err) throw err;
            else console.log('Database connection is successful');
        }
    ); 
}