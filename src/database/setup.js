const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/bookapp';

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