const httpStatusCodes = require('../utils/httpStatusCodes');
const { successResponse, errorResponse } = require('../utils/responseHandler');
const ProductService = require("../services/productService");
const SliderService = require("../services/sliderService");
const sliderService = new SliderService();
const productService = new ProductService();
class homeController{
    
    async homeDetails(req, res){
        try{
            const sliders = await sliderService.getSlider();
            const products = await productService.getProducts();
            const responseData = {
                sliders,
                products
            };
            return successResponse(res, '', responseData, httpStatusCodes.OK);
        }catch(error){
            const statusCode = err.statusCode || httpStatusCodes.INTERNAL_SERVER_ERROR;
            return errorResponse(res, err.message, [], statusCode);
        }
    } 
}

module.exports = new homeController();