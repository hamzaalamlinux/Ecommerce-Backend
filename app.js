// src/app.js
const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const app = express();
const path = require("path");
const adminRoutes = require('./routes/adminRoute');  // Import the admin routes
const userRoute = require('./routes/userRoute');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');



app.use('/sliders', express.static(path.join(__dirname, 'uploads', 'sliders', 'default')));
app.use('/products', express.static(path.join(__dirname, 'uploads', 'products', 'default')));
connectDB();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/admin', adminRoutes); // Use the admin routes with base URL '/api/admin'
app.use('/api/web', userRoute); // Use the admin routes with base URL '/api/admin'

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
