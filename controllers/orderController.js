const OrderSevice = require("../services/orderService");
const orderService = new OrderSevice(); 
const generatedOrderId = require("../helper/orderIdGenerationHelper");
const httpStatusCodes = require('../utils/httpStatusCodes');
const { successResponse, errorResponse } = require('../utils/responseHandler');
class orderController{
    
    async createOrder(req, res){
        try{
            const { user, shipperName, shipperAddress, shipperContact, shipperEmail,category, quantity, total, orderDetails } = req.body;
            // Generate new orderId
            const orderId = await generatedOrderId();
             // Create order data object
            const orderData = {
                orderId,
                shipperName,
                shipperAddress,
                shipperContact,
                shipperEmail,
                user,
                category,
                quantity,
                total
            };
           
            const saveOrder = await orderService.createOrder(orderData, orderDetails);
            return successResponse(res, 'Order Created Successfully', saveOrder, httpStatusCodes.OK);
        }catch(err){
            const statusCode = err.statusCode || httpStatusCodes.INTERNAL_SERVER_ERROR;
            return errorResponse(res, err.message, [], statusCode);
        }
    }
}

module.exports = new orderController();