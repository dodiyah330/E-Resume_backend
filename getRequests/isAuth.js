const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"]
    if (!token) {
        res.send("yo, we need a token ,please give it to us next time")
    } else {
        jwt.verify(token, "jwtsecret", (err, decoded) => {
            if (err) {
                res.json({ auth: false, message: "U failed to authentication" })
            } else {
                req.userId = decoded.id;
                next()
            }
        });
    }
}


router
    .route('/isAuth')
    .get(verifyJWT, (req, res) => {
        res.send("yo.. you are authenticated congrats")
    });

module.exports = router;
