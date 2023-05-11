const express = require('express');
const database = require('../db')
const router = express.Router();

router
    .get('/getskills/:id', (req, res) => {
        var id = req.params.id
        database.db.query(
            "SELECT * FROM skills WHERE personal_id=?",
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
    .get('/getskills/:p_id/:id', (req, res) => {

        var id = req.params.id
        database.db.query(
            "SELECT * FROM skills WHERE id=?",
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
