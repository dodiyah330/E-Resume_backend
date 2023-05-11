const multer = require('multer');


    const storage = multer.diskStorage({
        destination: 'public/images/',
        filename: (req, file, cb) => {
            cb(null, Date.now() + '_' + file.originalname)
        }
    })
    const fileFilter = (req, file, cb) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(null, false);
        }
    }
    const upload = multer({
        storage: storage,
        // limits: { fieldSize: 2 * 1024 * 1024 },
        fileFilter: fileFilter
    });


module.exports = upload;