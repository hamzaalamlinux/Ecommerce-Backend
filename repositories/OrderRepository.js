// Importing Order and OrderDetail models
const Order = require("../models/Order"); // adjust the path as necessary
const OrderDetail = require("../models/OrderDetail"); // adjust the path as necessary

class OrderRepository {
    // Method to create and save an order
    async createOrder(orderData) {
        try {   
            // Save the order data
            const order = new Order(orderData);
            const savedOrder = await order.save(); // Save the order

            // Return the saved order to access the orderId if needed
            return savedOrder;
        } catch (error) {
            console.error("Error creating order: ", error);
            throw error;
        }
    }

    // Method to save order details linked to an order
    async saveOrderDetails(orderDetailsData) {
        try {
            // Create and save order details using the array of details
            const orderDetailsArray = await OrderDetail.insertMany(orderDetailsData); // insertMany for multiple details
            return orderDetailsArray;
        } catch (error) {
            console.error("Error saving order details: ", error);
            throw error;
        }
    }

    // Method to generate order with details
    async createOrderWithDetails(orderData, orderDetails) {
        const session = await Order.startSession(); // Start transaction session for atomic operation
        session.startTransaction();

        try {
            // Step 1: Save the order and retrieve the generated order ID
            const savedOrder = await this.createOrder(orderData);

            // Step 2: Add the saved orderId to each orderDetail
            const orderDetailsWithId = orderDetails.map(detail => ({
                ...detail,
                orderId: savedOrder.orderId
            }));

            // Step 3: Save the order details
            await this.saveOrderDetails(orderDetailsWithId, { session });
            // Commit transaction if both order and details are successfully saved
            await session.commitTransaction();

            // Return the saved order and its details
            return { savedOrder, orderDetailsWithId };
        } catch (error) {
            // Rollback transaction if there's an error
            await session.abortTransaction();
            console.error("Error in creating order with details: ", error);
            throw error;
        } finally {
            session.endSession();
        }
    }
}

module.exports = OrderRepository;
