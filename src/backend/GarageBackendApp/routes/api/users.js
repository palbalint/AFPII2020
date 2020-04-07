const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

const User = require("../../models/user");


router.post("/register", (req, res) => {
    const {errors, isValid} = validateRegisterInput(req.body);

    if(!isValid){
        return res.status(400).json(errors)
    }

    //megvizsgálom, hogy létezik e már az email cím
    User.findOne({ email: req.body.email })
        .then(returnedData => {
            if(returnedData) {
                return res.status(400).json({email: "Email already in use!"});
            }
        });
    
    //elmenteni az új felhasználót az adatbázisba
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    bcrypt.genSalt(10, (err, salt) =>{
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save().then(user => res.json(user))
                .catch(err => console.log(err));
        });
    });
});

router.post("/login", (req, res) => {
    const {errors, isValid} = validateLoginInput(req.body);

    if(!isValid){
        return res.status(400).json(errors)
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email })
        .then(user => {
            //ellenőrzés, hogy létezik-e a felhasználó
            if(!user){
                return res.status(404).json({emailnofound: "Email not found"});
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch){
                        const payload = { id: user.id, name: user.name };
                        //hozzárendeljük a tokent a userhez
                        jwt.sign(payload, keys.secretOrKey, {expiresIn: 3600},
                            (err, token) => {res.json({ success: true, token: "Bearer " + token })});
                    }
                    else {
                        return res.status(400).json({passwordincorrect: "Incorrect password"})
                    }
                });

        });
});

module.exports = router;