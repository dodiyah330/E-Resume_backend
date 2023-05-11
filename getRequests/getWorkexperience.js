
    const express = require('express');
    const database = require('../db')
    const router = express.Router();
    
    router
        .get('/getWorkexperience/:id', (req, res) => {
            var id = req.params.id
            database.db.query(
                "SELECT * FROM workexperience WHERE personal_id=?",
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
        
        .get('/getWorkexperience/:p_id/:id', (req, res) => {
            var id = req.params.id
            database.db.query(
                "SELECT * FROM workexperience WHERE id=?",
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
    