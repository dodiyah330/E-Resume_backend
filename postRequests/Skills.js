const express = require('express');
const database = require('../db')
const router = express.Router();

router
    .route('/CreateResume/Experience/skills')
    .post( (req, res) => {
        const skills = req.body.skills
        const level = req.body.level
        const personal_id = req.body.personal_id

        database.db.query(

            "INSERT INTO skills (skills,level,personal_id) VALUES (?,?,?)",
            [skills,level,personal_id],

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
