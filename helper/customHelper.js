class BadRequestError extends Error {
    constructor(message = "Bad Request") {
        super(message);
        this.name = "BadRequestError";
        this.statusCode = 400;
    }
}

class UnauthorizedError extends Error {
    constructor(message = "Unauthorized") {
        super(message);
        this.name = "UnauthorizedError";
        this.statusCode = 401;
    }
}

class ForbiddenError extends Error {
    constructor(message = "Forbidden") {
        super(message);
        this.name = "ForbiddenError";
        this.statusCode = 403;
    }
}

class NotFoundError extends Error {
    constructor(message = "Not Found") {
        super(message);
        this.name = "NotFoundError";
        this.statusCode = 404;
    }
}

class MethodNotAllowedError extends Error {
    constructor(message = "Method Not Allowed") {
        super(message);
        this.name = "MethodNotAllowedError";
        this.statusCode = 405;
    }
}

class ConflictError extends Error {
    constructor(message = "Conflict") {
        super(message);
        this.name = "ConflictError";
        this.statusCode = 409;
    }
}

class UnprocessableEntityError extends Error {
    constructor(message = "Unprocessable Entity") {
        super(message);
        this.name = "UnprocessableEntityError";
        this.statusCode = 422;
    }
}

class InternalServerError extends Error {
    constructor(message = "Internal Server Error") {
        super(message);
        this.name = "InternalServerError";
        this.statusCode = 500;
    }
}

class NotImplementedError extends Error {
    constructor(message = "Not Implemented") {
        super(message);
        this.name = "NotImplementedError";
        this.statusCode = 501;
    }
}

class BadGatewayError extends Error {
    constructor(message = "Bad Gateway") {
        super(message);
        this.name = "BadGatewayError";
        this.statusCode = 502;
    }
}

class ServiceUnavailableError extends Error {
    constructor(message = "Service Unavailable") {
        super(message);
        this.name = "ServiceUnavailableError";
        this.statusCode = 503;
    }
}

class GatewayTimeoutError extends Error {
    constructor(message = "Gateway Timeout") {
        super(message);
        this.name = "GatewayTimeoutError";
        this.statusCode = 504;
    }
}
module.exports = {
    BadRequestError,
    UnauthorizedError,
    ForbiddenError,
    NotFoundError,
    MethodNotAllowedError,
    ConflictError,
    UnprocessableEntityError,
    InternalServerError,
    NotImplementedError,
    BadGatewayError,
    ServiceUnavailableError,
    GatewayTimeoutError,
};