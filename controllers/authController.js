// src/controllers/authController.js
const AuthService = require('../services/authService');
const authService = new AuthService();
const httpStatusCodes = require('../utils/httpStatusCodes');
const { successResponse, errorResponse } = require('../utils/responseHandler');
class authController {
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user  = await authService.login(email, password,);
            return successResponse(res, 'Login Successfully', user, httpStatusCodes.OK);
        } catch (err) {
            // Determine the status code from the error, or use a default
            const statusCode = err.statusCode || httpStatusCodes.INTERNAL_SERVER_ERROR;
            return errorResponse(res, err.message, [], statusCode);
        }
    }

    async register(req, res) {
        try {
            const { username, email, password , role, phone } = req.body;
            const user = await authService.register(username, email,password, role, phone);
            return successResponse(res, 'User registered successfully', user, httpStatusCodes.CREATED);
        } catch (err) {
            // Determine the status code from the error, or use a default
            const statusCode = err.statusCode || httpStatusCodes.INTERNAL_SERVER_ERROR;
            return errorResponse(res, err.message, [], statusCode);
        }
    }
}

module.exports = new authController();
