const swaggerJsdoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Admin API Documentation',
    version: '1.0.0',
    description: 'API documentation for the admin routes',
  },
  servers: [
    {
      url: 'http://localhost:3000', // Update with your actual server URL
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Path to the admin routes
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
