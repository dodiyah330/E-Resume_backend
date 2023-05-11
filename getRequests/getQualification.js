const express = require('express');
const database = require('../db')
const router = express.Router();

router
    .get('/getqualification/:id', (req, res) => {
        var id = req.params.id
        database.db.query(  
            "SELECT * FROM qualifications WHERE personal_id=?",
            [id],

            (err, result) => {
                if (err) {
                    console.log(err)
                }
                else {
                    res.send(result)
                }
            })
    })
    .get('/getqualification/:p_id/:id', (req, res) => {
        var id = req.params.id
        database.db.query(
            "SELECT * FROM qualifications WHERE id=?",
        [id],
        
         (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(result)
            }
        })
    });

module.exports = router;
