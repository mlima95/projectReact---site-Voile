'use strict';
var mongoose = require('mongoose');
var User = require('../models/Users');
const auth = require("../../services/AuthService");


exports.create_a_account = function (req, res) {
    var new_user = new User(req.body);
    new_user = {
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        Email: req.body.Email,
        Password: auth.getDefaultPassword(req.body.Password),
        Number: req.body.Number,
        Gender: req.body.Gender,
        Birthday: req.body.Birthday
    }
    User.findOne({
        Email: req.body.Email
    })
        .then(user => {
            if (!user) {
                User.create(new_user)
                    .then(user => {
                        res.json({ status: user.Email + ' : registered!' })
                    })
                    .catch(err => {
                        res.send('error:' + err)
                    })
            } else {
                res.json({ error: 'User already exists' })
            }
        })
        .catch(err => {
            res.send('error:' + err)
        })
};

exports.login = async function (req, res) {
    var new_user = new User(req.body);
    new_user = {
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        Email: req.body.email,
        Password: req.body.password
    }
    User.findOne({
        Email: req.body.email
        
    })
        .then(user => {
            if (user) {
                const admin = {user}
                if (req.body.password === user.Password) {
                    let accessToken = auth.generateToken(admin);
                    return res.send(JSON.stringify({
                        "status": 200, "error": null,
                        "response": {
                            token: accessToken,
                            user: user
                        }
                    }));
                } else {
                    res.json({ error: "User does not exist" })
                }
            } else {
                res.json({ error: "User does not exist" })
            }
        })
        .catch(err => {
            res.send('error:' + err)
        })
};