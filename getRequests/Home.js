const express = require('express');
const database = require('../db')
const router = express.Router();

router
    .get('/Home', (req, res) => {
        database.db.query("SELECT * from personaldetails ORDER BY id DESC LIMIT 1",
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
