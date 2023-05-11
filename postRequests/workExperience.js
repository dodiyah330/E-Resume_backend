const express = require('express');
const database = require('../db')
const router = express.Router();

router
    .route('/CreateResume/Experience/workexperience')
    .post( (req, res) => {
        const jobTitle = req.body.jobTitle;
        const jobCity = req.body.jobCity;
        const employer = req.body.employer;
        const startDate = req.body.startDate;
        const endDate = req.body.endDate;
        const discription = req.body.discription;
        const personal_id = req.body.personal_id


        database.db.query(

            "INSERT INTO workexperience (jobTitle, jobCity, employer, startDate, endDate , discription,personal_id) VALUES (?,?,?,?,?,?,?)",
            [jobTitle, jobCity, employer, startDate, endDate, discription,personal_id],

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
