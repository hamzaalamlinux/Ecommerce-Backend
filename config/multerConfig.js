// multerConfig.js
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Function to create dynamic multer storage configuration
const createMulterStorage = (uploadPath) => {
    return multer.diskStorage({
        destination: (req, file, cb) => {
            // Create directory if it doesn't exist
            if (!fs.existsSync(uploadPath)) {
                fs.mkdirSync(uploadPath, { recursive: true });
            }
            cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
            // Set the filename to include a timestamp and original file extension
            cb(null, Date.now() + path.extname(file.originalname));
        },
    });
};

// Function to create dynamic multer instance
const createMulterUpload = (uploadPath, fieldName, fileSizeLimit = 5 * 1024 * 1024) => {
    return multer({
        storage: createMulterStorage(uploadPath),
        limits: { fileSize: fileSizeLimit }, // Default 5 MB file size limit
        fileFilter: (req, file, cb) => {
            // Allow only image files
            if (file.mimetype.startsWith('image/')) {
                cb(null, true);
            } else {
                cb(new Error('Not an image! Please upload an image.'), false);
            }
        },
    }).single(fieldName); // Expecting a single file upload with the field name 'sliderImage'
};

module.exports = { createMulterUpload };
