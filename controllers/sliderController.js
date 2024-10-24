const { createMulterUpload } = require('../config/multerConfig'); // Adjust the path if necessary
const httpStatusCodes = require('../utils/httpStatusCodes');
const { successResponse, errorResponse } = require('../utils/responseHandler');
const SliderService = require("../services/sliderService");
const path = require('path');
const sliderService = new SliderService();
class sliderController{
    async createSlider(req, res){
        try{
            const sliderType = req.body.sliderType || 'default'; 
            const uploadPath = `uploads/sliders/${sliderType}`; 
            const upload = createMulterUpload(uploadPath, 'sliderImage');
            upload(req, res, async (err) => {
                if (err) {
                    console.log(err);
                    // Handle multer-specific errors
                    return errorResponse(res, 'File uploading error.',[], httpStatusCodes.BAD_REQUEST);
                }

                // If no file was uploaded, handle it accordingly
                if (!req.file) {
                    return errorResponse(res, 'No image file uploaded',[], httpStatusCodes.BAD_REQUEST);

                }

                // File uploaded successfully
                const fullSliderImagePath = req.file.path;
                const sliderImagePath = path.basename(fullSliderImagePath); 
                const slider = await  sliderService.saveSlider(sliderImagePath, sliderType);
                return successResponse(res, 'Slider Created Successfully', slider, httpStatusCodes.OK);

            });
        }
        catch(err){
           // Determine the status code from the error, or use a default
            const statusCode = err.statusCode || httpStatusCodes.INTERNAL_SERVER_ERROR;
            return errorResponse(res, err.message, [], statusCode);
        }
    }

    async getSlider(req, res){
        try{
            const slider = await  sliderService.getSlider();
            return successResponse(res, 'Success', slider, httpStatusCodes.OK);
        }
        catch(err){
            // Determine the status code from the error, or use a default
             const statusCode = err.statusCode || httpStatusCodes.INTERNAL_SERVER_ERROR;
             return errorResponse(res, "Something went wrong", [], statusCode);
         }
    }
}

module.exports = new sliderController();