const express = require('express');
const database = require('../db')
const router = express.Router();

router
    .get('/getObjective/:id', (req, res) => {
        var id = req.params.id
        database.db.query(
            "SELECT * FROM objective WHERE personal_id=?",
        [id],
        
         (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(result[0])
            }
        })
    });
module.exports = router;
