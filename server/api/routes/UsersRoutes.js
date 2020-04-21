const express = require("express")
const users = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const crypt = require("bcrypt")


const User = require("../models/Users")
users.use(cors())

process.env.SECRET_KEY = "secret"

users.post('/register', (req, res) => {
    const userData = {
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        Email: req.body.Email,
        Password: req.body.Password,
        Number: req.body.Number,
        Gender: req.body.Gender,
        Birthday: req.body.Birthday
    }

    User.findOne({
        Email: req.body.Email
    })
        .then(user => {
            if (!user) {
                crypt.hash(req.body.Password, 10, (err, hash) => {
                    userData.Password = hash
                    User.create(userData)
                        .then(user => {
                            res.json({ status: user.Email + ' : registered!' })
                        })
                        .catch(err => {
                            res.send('error:' + err)
                        })
                })
            } else {
                res.json({ error: 'User already exists' })
            }
        })
        .catch(err => {
            res.send('error:' + err)
        })
})

users.post('/login', (req, res) => {
    User.findOne({
        Email: req.body.Email
    })
        .then(user => {
            if (user) {
                if (crypt.compareSync(req.body.Password, user.Password)) {
                    const payload = {
                        _id: user._id,
                        Firstname: users.Firstname,
                        Lastname: users.Lastname,
                        Email: users.Email
                    }
                    let token = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token)
                } else {
                    res.json({ error: "User does not exist" })
                }
            } else {
                res.json({ error: "User does not exist" })
            }
        })
        .catch(err => {
            res.send('error:'+ err)
        })
})

users.get('/profile', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    User.findOne({
        _id: decoded._id
    })
    .then(user =>{
        if(user) {
            res.json(user)
        }else{
            res.send("User does not exist")
        }
    })
    .catch(err => {
        res.send('error: '+err)
    })

})

module.exports = users
