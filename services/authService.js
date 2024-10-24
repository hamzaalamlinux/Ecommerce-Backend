// src/services/authService.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const httpStatusCodes = require('../utils/httpStatusCodes');
const { successResponse, errorResponse } = require('../utils/responseHandler');
const UserRepository = require('../repositories/UserRepository');
const JwtHelper = require('../helper/JwtHelper');
const { BadRequestError, InternalServerError, NotFoundError } = require('../helper/customHelper');


class AuthService {
    constructor() {
        this.userRepository = new UserRepository();
    }
    async login(email, password) {
        const user = await this.userRepository.findByEmail(email);
        if (!user) throw new NotFoundError("User Not Found");  
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)   throw new BadRequestError('Email or Password is wrong!');

        const token = JwtHelper.signToken({d: user._id, role: user.role});
        user.token = token;
        return user;
    }

    async register(username, email, password, role, phone) {
        const isuserExist = await this.userRepository.findByEmail(email);
        if (isuserExist)   throw new BadRequestError('Email already exists!');
    
        const user = await this.userRepository.create({ username, email,  password, role, phone });
        const token = JwtHelper.signToken({d: user._id, role: user.role});
        user.token  = token;
        return user;
    }
}

module.exports = AuthService;
