const User = require('../models/users');

const bcrypt = require('bcryptjs');

const { createToken } = require('../services/jwtService');

exports.registerNewUser = (req, res) => {

    User.findOne({ username: req.body.username }, (err, existingUser) => {
        if (err) {
            return res.status(500).json({ err });
        } 
        if (existingUser) {
            return res.status(400)
                .json({ message:"A user with this username already exists, please try another username"});
        }

        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username
        });

        // hash user password
        bcrypt.genSalt(10, (err, salt) => {
            if (err) return res.status(500).json({ err });
            bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
                if (err) return res.status(500).json({ err });

                // save password to user data
                newUser.password = hashedPassword;
                newUser.save((err, savedUser) => {
                    if (err) return res.status(500).json({ err });
                    let token = createToken(savedUser);
                    return res.status(200).json({ message: "Registration is successful", token });
                });
            });
        });
    });
};


exports.loginUser = (req, res) => {
    User.findOne({username: req.body.username}, (err, foundUser) => {
        if (err) return res.status(500).json({err});
        if (!foundUser) return res.status(401).json({ message: "User does not exist. Please check and try again." });
        let match = bcrypt.compareSync(req.body.password, foundUser.password);
        if (!match) return res.status(401).json({ message: "Incorrect password. Please check and try again."});

        // Create and send token to user
        let token = createToken(foundUser);
        return res.status(200).json({ message: "User logged in successfully", token });
    });
}