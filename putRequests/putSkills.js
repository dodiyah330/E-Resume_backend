const express = require('express');
const database = require('../db')
const router = express.Router();

router
    .route('/CreateResume/Experience/skills/:pid/:id')
    .put((req, res) => {
        const data = {
            skills : req.body.skills,
            personal_id : req.body.personal_id,
            level : req.body.level
        }

        database.db.query(
            "UPDATE skills set ? WHERE id = ?",
            [data, req.params.id],

            (err, result) => {
                if (err) {
                    console.log(err)
                    res.send(err)
                }
                else {
                    res.send({ message: "Updated", result })
                }
            }
        );
    }
    );
module.exports = router;
