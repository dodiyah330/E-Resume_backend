const express = require('express');
const database = require('../db')
const router = express.Router();

router
    .route('/Resumedelete/:id')
    .delete((req, res) => {
        const id = req.params.id
        database.db.query("DELETE FROM personaldetails WHERE id = ?", id, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        });
    });
module.exports = router;
