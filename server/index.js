const express = require('express');
const PORT = 5000;
const app = express();
const multer = require('multer');
const cors = require('cors')
const path = require('path')

//Middlewares
app.use(cors())
app.use(express.json());



// multer storage configuration
const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        cb(null, path.join(__dirname, '/images'));
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '_') + file.originalname );
    }
});

// const fileFilter = (req, file, cb) => {
//     // reject a file
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//       cb(null, true);
//     } else {
//       cb(null, false);
//     }
//   };

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 500000
    },
    // fileFilter: fileFilter
})

//routes

app.post('/upload-img', upload.single('myphoto'), async(req, res, next) => {
    return res.send({"success": true});
})

app.listen(PORT, () => {
    console.log(`app is running on PORT: ${PORT}`);
})