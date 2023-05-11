const express = require('express');
const database = require('../db')
const upload = require('../multer');
const app = express();
const router = express.Router();
app.use('/Profpic/', express.static('public/images/'))

router
    .route('/CreateResume')

    .post(upload.single('file'), (req, res) => {
        const reg_id = req.body.reg_id;
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const contact = req.body.contact;
        const city = req.body.city;
        const file = req.file.filename;
        const linkedin = req.body.linkedin;

        database.db.query(

            "INSERT INTO personaldetails (reg_id , firstname, lastname, email ,contact, city, image , linkedin) VALUES (?,?,?,?,?,?,?,?)",
            [reg_id, firstname, lastname, email, contact, city, file, linkedin],

            (err, result) => {
                if (err) {
                    console.log(err)
                    res.send(err)
                }
                else {
                    
                    res.send({
                        message: "saved", result, image_url: `http://localhost:3001/Profpic/${req.file.filename}`
                    })
                }
            }
        );
    }
    );

module.exports = router;
