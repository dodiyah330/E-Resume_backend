const express = require('express');
const database = require('../db')
const router = express.Router();
const app = express();



router
    .get('/getPersonaldetails/:id', (req, res) => {
        var id = req.params.id
        database.db.query(
            "SELECT * FROM personaldetails WHERE id=?",
        [id],
        
         (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send({
                    result:result[0],
                    image_url: `http://localhost:3001/Profpic/${result[0].image}`
                    })
            }
        })
    });
module.exports = router;
