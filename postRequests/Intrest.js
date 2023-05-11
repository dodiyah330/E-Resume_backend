const express = require('express');
const database = require('../db')
const router = express.Router();

router
    .route('/CreateResume/Experience/intrest')
    .post( (req, res) => {
        const hobby = req.body.hobby
        const personal_id = req.body.personal_id
        
        database.db.query(

            "INSERT INTO intrest (hobby,personal_id) VALUES (?,?)",
            [hobby,personal_id],

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
    });
module.exports = router;
