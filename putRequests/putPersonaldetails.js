const express = require('express');
const database = require('../db')
const upload = require('../multer');
const app = express();
const router = express.Router();
app.use('/CreateResume', express.static('public/images'))

router
    .route('/CreateResume/:id')

    .put(upload.single('file'), (req, res) => {
        if (req.file) {
            var data = {
                reg_id: req.body.reg_id,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                contact: req.body.contact,
                city: req.body.city,
                linkedin: req.body.linkedin,
                image: req.file.filename
            }
        }
        else {
            var data = {
                reg_id: req.body.reg_id,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                contact: req.body.contact,
                city: req.body.city,
                linkedin: req.body.linkedin
            }
        }

        database.db.query(
            "UPDATE personaldetails set ? WHERE id = ?",
            [data, req.params.id],
            (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send("Updated")
                }
            }
        )
    })

module.exports = router