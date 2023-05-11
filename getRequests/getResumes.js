
    const express = require('express');
    const database = require('../db')
    const router = express.Router();
    
    router
        .get('/getResumes/:id', (req, res) => {
            var id = req.params.id
            database.db.query(
                "SELECT * FROM personaldetails WHERE reg_id=?",
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
    