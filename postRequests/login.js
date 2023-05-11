const express = require('express');
const database = require('../db')
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
router
    .route('/Login')

    .post((req, res) => {
        const email = req.body.email
        const password = req.body.password

        database.db.query(

            "SELECT * FROM registration WHERE email=?",
            email,

            (err, result) => {
                if (err) {
                    console.log(err)
                    res.send(err)
                }
                if (result.length > 0) {
                    bcrypt.compare(password, result[0].password, (error, response) => {

                        if (response) {
                            const id = result[0].id;
                            const token = jwt.sign({ id }, "jwtsecret", {
                                expiresIn: 300,
                            })
                            res.json({ auth: true, token: token, result: result })
                        } else {
                            res.json({
                                auth: false,
                                message: "wrong email/password combination!"
                            })
                        }
                    })
                }

                else {
                    res.json({
                        auth: false,
                        message: "User doesn't exist"
                    })
                }
            }
        );
    }
    )



module.exports = router;
