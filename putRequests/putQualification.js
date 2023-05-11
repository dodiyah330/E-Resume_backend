const express = require('express');
const database = require('../db')
const router = express.Router();

router
    .route('/CreateResume/Experience/qualification/:pid/:id')
    .put((req, res) => {
        const data = {
            degree: req.body.degree,
            degreeCity: req.body.degreeCity,
            school: req.body.school,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            discription: req.body.discription,
            personal_id: req.body.personal_id
        }

        database.db.query(
            "UPDATE qualifications set ? WHERE  id = ?",
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
