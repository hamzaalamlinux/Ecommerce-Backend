const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const sliderController = require('../controllers/sliderController');
const categoryController = require('../controllers/categoryController');
const productController = require('../controllers/productController');
const orderController = require('../controllers/orderController');

// Authentication Routes

/**
 * @swagger
 * /api/admin/login:
 *   post:
 *     summary: Admin login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully logged in
 *       400:
 *         description: Invalid credentials
 */
router.post('/login', authController.login.bind(authController));

/**
 * @swagger
 * /api/admin/register:
 *   post:
 *     summary: Admin registration
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Admin registered successfully
 *       400:
 *         description: Registration failed
 */
router.post('/register', authController.register.bind(authController));

// Admin Routes

/**
 * @swagger
 * /api/admin/sliders:
 *   post:
 *     summary: Create a new slider
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               imageUrl:
 *                 type: string
 *     responses:
 *       201:
 *         description: Slider created
 *       400:
 *         description: Creation failed
 */
router.post('/sliders', sliderController.createSlider.bind(sliderController));

/**
 * @swagger
 * /api/admin/sliders:
 *   get:
 *     summary: Get all sliders
 *     responses:
 *       200:
 *         description: Successfully fetched sliders
 */
router.get('/sliders', sliderController.getSlider.bind(sliderController));

/**
 * @swagger
 * /api/admin/category:
 *   post:
 *     summary: Create a new category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Category created
 *       400:
 *         description: Creation failed
 */
router.post('/category', categoryController.store.bind(categoryController));

/**
 * @swagger
 * /api/admin/products:
 *   post:
 *     summary: Create a new product
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               productName:
 *                 type: string
 *               ProductImage:
 *                 type: string
 *                 format: binary
 *               category:
 *                 type: string
 *                 description: The ObjectId of the category
 *               productDescription:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Creation failed
 */
router.post('/products', productController.crerateProduct.bind(productController));


module.exports = router;
