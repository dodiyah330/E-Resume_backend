const express = require('express');
const database = require('../db')
const router = express.Router();
const bcrypt = require("bcrypt")

const saltRounds = 10

router
    .route('/Registration')
    .post((req, res) => {
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password
        const contact = req.body.contact

        bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) {
                console.log(err)
            }
            database.db.query(
                "SELECT * FROM registration WHERE email=?",
                email,
                (err, result) => {
                    if (result.length > 0) {
                        res.send({message:"Sorry... this email is already exist"})
                        // res.send(result)
                    }
                    else {
                        database.db.query(

                            "INSERT INTO registration (name,email,password,contact) VALUES (?,?,?,?)",
                            [name, email, hash, contact],

                            (err, result) => {
                                if (err) {
                                    console.log(err)
                                    res.send(err)
                                }

                                else {
                                    res.send({message:"Registrated",result})
                                }
                            }
                        )
                    }
                })
        }
        );
    })

module.exports = router;
