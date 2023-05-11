const express = require('express');
const database = require('../db')
const router = express.Router();

router
    .route('/CreateResume/Experience/workexperience/:pid/:id')
    .put((req, res) => {
        const data = {
            jobTitle: req.body.jobTitle,
            jobCity: req.body.jobCity,
            employer: req.body.employer,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            discription: req.body.discription,
            personal_id: req.body.personal_id
        }

        database.db.query(
            "UPDATE workexperience set ? WHERE  id = ?",
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
