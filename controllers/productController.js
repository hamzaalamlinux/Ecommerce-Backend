const ProductService = require("../services/productService");
const productService = new ProductService();
const { createMulterUpload } = require('../config/multerConfig'); // Adjust the path if necessary
const httpStatusCodes = require('../utils/httpStatusCodes');
const { successResponse, errorResponse } = require('../utils/responseHandler');
const path = require('path');

class productController{
    
    async crerateProduct(req, res){
      
        const productImageType = req.body.productImageType || 'default'; 
        const uploadPath = `uploads/products/${productImageType}`; 

        try{
            const upload = createMulterUpload(uploadPath, 'ProductImage');
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
                const { productName, category, productDescription, price } = req.body;
                // File uploaded successfully
                const fullProductImagePath = req.file.path;
                const imagePath = path.basename(fullProductImagePath); 
                const product = await productService.createProduct({productName, imagePath, category, productDescription,price});
                return successResponse(res, 'Product Created Successfully', product, httpStatusCodes.OK);
    
            });
        }catch(err){
            const statusCode = err.statusCode || httpStatusCodes.INTERNAL_SERVER_ERROR;
            return errorResponse(res, err.message, [], statusCode);
        }
    }

    async getProductsById(req, res){
        const productId = req.params.id;  // Get the ID from the query string
        try{
            const product = await productService.getProductsByid(productId);
            return successResponse(res, '', product, httpStatusCodes.OK);
        }catch(err){
            const statusCode = err.statusCode || httpStatusCodes.INTERNAL_SERVER_ERROR;
            return errorResponse(res, err.message, [], statusCode);
        }
    }
}
module.exports = new productController();