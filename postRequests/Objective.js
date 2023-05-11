const express = require('express');
const database = require('../db')
const router = express.Router();

router
    .route('/CreateResume/Experience/objective')
    .post( (req, res) => {
        const objective = req.body.objective
        const personal_id = req.body.personal_id

        database.db.query(
            "INSERT INTO objective (objective,personal_id) VALUES (?,?)",
            [objective,personal_id],

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
