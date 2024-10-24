const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const Product = require('../models/Product');
const productController = require('../controllers/productController');
const orderController = require('../controllers/orderController');

/**
 * @swagger
 * /api/web/home:
 *   get:
 *     summary: Get details for home page
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal server error
 */
router.get('/home', homeController.homeDetails.bind(homeController));
/**
 * @swagger
 * /api/web/products/{id}:
 *   get:
 *     summary: Get product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ObjectId of the product to retrieve
 *     responses:
 *       200:
 *         description: Product retrieved successfully
 *       404:
 *         description: Product not found
 */
router.get('/products/:id', productController.getProductsById.bind(productController));


/**
 * @swagger
 * /api/web/orders:
 *   post:
 *     summary: Create a new order
 *     description: Create a new order with details like user, category, quantity, and total. Also, add order details like products.
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *                 description: The ID of the user placing the order
 *               category:
 *                 type: string
 *                 description: The ID of the category of products
 *               quantity:
 *                 type: number
 *                 description: The total quantity of products in the order
 *               total:
 *                 type: number
 *                 description: The total price of the order
 *               orderDetails:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: string
 *                       description: The ID of the product
 *                     productName:
 *                       type: string
 *                       description: The name of the product
 *                     shipperName:
 *                       type: string
 *                       description: The name of the shipper
 *                     shipperContact:
 *                       type: string
 *                       description: The contact number of the shipper
 *                     shipperEmail:
 *                       type: string
 *                       description: The email address of the shipper
 *                     shipperAddress:
 *                       type: string
 *                       description: The address of the shipper
 *                     quantity:
 *                       type: number
 *                       description: The quantity of the product ordered
 *                     price:
 *                       type: number
 *                       description: The price of the product
 *     responses:
 *       200:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: Order Created Successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     savedOrder:
 *                       type: object
 *                       description: The newly created order
 *                     orderDetailsWithId:
 *                       type: array
 *                       description: The details of products in the order
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
router.post("/orders", orderController.createOrder.bind(orderController));
module.exports = router;
