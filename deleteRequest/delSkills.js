const express = require('express');
const database = require('../db')
const router = express.Router();

router
    .route('/Skillsdelete/:id')
    .delete((req, res) => {
        const id = req.params.id
        database.db.query("DELETE FROM skills WHERE id = ?", id, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        });
    });
module.exports = router;
