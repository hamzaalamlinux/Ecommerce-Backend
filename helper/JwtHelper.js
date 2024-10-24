const jwt = require('jsonwebtoken');

class JwtHelper {
    static signToken(payload, expiresIn = '1h') {
        return jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn,
        });
    }

    static verifyToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            return null; // You can handle errors differently if needed
        }
    }

    static decodeToken(token) {
        return jwt.decode(token);
    }
}

module.exports = JwtHelper;
