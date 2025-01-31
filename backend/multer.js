const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const filename = file.originalname.split(".")[0];
        cb(null,filename +"-" + uniqueSuffix + ".png");
    },
});

exports.upload = multer({ storage: storage });