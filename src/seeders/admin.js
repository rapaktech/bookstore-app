const User = require('../models/users');
const bcrypt = require('bcryptjs');
let password = 'admin123';

exports.seedAdmin = () => {

    User.findOne({ role: "admin" }, (err, admin) => {
        if (err) throw err;
        if (admin) {
            return console.info("Admin user already exists", admin);
        }

        User.create({
            firstName: "The",
            lastName: "Administrator",
            username: "admin",
            role: "admin"
        }, (err, admin) => {
            if (err) throw err;
            bcrypt.genSalt(10, (err, salt) => {
                if (err) throw err;
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) throw err;
                    admin.password = hash;
                    admin.save((err, savedAdmin) => {
                        if (err) throw err;
                        return console.info("Admin account has been created successfully", savedAdmin);
                    });
                });
            });
        });
    });
}