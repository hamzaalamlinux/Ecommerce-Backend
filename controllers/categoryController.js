const CategoryService = require("../services/categoryService");
const categoryService = new CategoryService();
const httpStatusCodes = require('../utils/httpStatusCodes');
const { successResponse, errorResponse } = require('../utils/responseHandler');
class categoryController{
     async store(req, res){
        try{
            const { categoryName, description } = req.body;
            const category = await categoryService.createCategory(categoryName, description);
            return successResponse(res, 'Category Created Successfully', category, httpStatusCodes.OK);
        }catch(err){
            const statusCode = err.statusCode || httpStatusCodes.INTERNAL_SERVER_ERROR;
            return errorResponse(res, err.message, [], statusCode);
        }
     }
}

module.exports = new categoryController();