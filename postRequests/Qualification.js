const express = require('express');
const database = require('../db')
const router = express.Router();

router
    .route('/CreateResume/Experience/qualification')
    .post((req, res) => {
        const degree = req.body.degree;
        const degreeCity = req.body.degreeCity;
        const school = req.body.school;
        const startDate = req.body.startDate;
        const endDate = req.body.endDate;
        const discription = req.body.discription
        const personal_id = req.body.personal_id

        database.db.query(

            "INSERT INTO qualifications (degree, degreeCity, school, startDate, endDate , discription, personal_id) VALUES (?,?,?,?,?,?,?) ",
            [degree, degreeCity, school, startDate, endDate, discription, personal_id],

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
