const express = require('express');
const database = require('../db')
const router = express.Router();

router
    .route('/CreateResume/Experience/intrest/:id')
    .put((req, res) => {
        const hobby = req.body.hobby
        const personal_id = req.body.personal_id

        database.db.query(
            "UPDATE intrest set hobby=? , personal_id=? WHERE id = ?",
            [hobby, personal_id, req.params.id],

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
