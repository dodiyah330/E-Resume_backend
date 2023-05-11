const express = require('express');
const database = require('../db')
const router = express.Router();

router
    .route('/CreateResume/Experience/objective/:id')
    .put((req, res) => {
        const objective = req.body.objective
        const personal_id = req.body.personal_id

        database.db.query(
            "UPDATE objective set objective=? , personal_id=? WHERE id = ?",
            [objective, personal_id, req.params.id],

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
