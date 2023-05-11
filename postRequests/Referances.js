const express = require('express');
const database = require('../db')
const router = express.Router();

router
    .route('/CreateResume/Experience/referance')
    .post( (req, res) => {
        const companyName = req.body.companyName;
        const website = req.body.website;
        const phoneNumber = req.body.phoneNumber;
        const emailAddress = req.body.emailAddress;
        const personal_id = req.body.personal_id

        database.db.query(

            "INSERT INTO referances (companyName, website ,phoneNumber, emailAddress,personal_id) VALUES (?,?,?,?,?)",
            [companyName, website, phoneNumber, emailAddress,personal_id],

            (err, result) => {
                if (err) {
                    console.log(err)
                    res.send(err)
                }
                else {
                    res.send({ message: "saved", result })
                }
            }
        );
    }
    );
module.exports = router;
