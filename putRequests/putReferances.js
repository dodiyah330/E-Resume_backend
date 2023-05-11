const express = require('express');
const database = require('../db')
const router = express.Router();

router
    .route('/CreateResume/Experience/referance/:id')
    .put((req, res) => {
        const data = {
            companyName: req.body.companyName,
            website: req.body.website,
            phoneNumber: req.body.phoneNumber,
            emailAddress: req.body.emailAddress,
            personal_id: req.body.personal_id
        }

        database.db.query(
            "UPDATE referances set ? WHERE id = ?",
            [data, req.params.id],
            (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send({ message: "Updated", result })
                }
            }
        )
    })
module.exports = router;
