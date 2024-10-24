const Order = require('../models/Order'); // Adjust the path as necessary

// Helper function to generate the next orderId
async function generateOrderId() {
    try {
        // Find the highest orderId in the collection
        const lastOrder = await Order.findOne().sort({ orderId: -1 }).select('orderId');
        console.log(lastOrder);
        // If there are no orders, start with 1
        const newOrderId = lastOrder ? lastOrder.orderId + 1 : 1;
        return newOrderId;
    } catch (error) {
        console.error("Error generating new orderId: ", error);
        throw new Error('Could not generate new orderId');
    }
}

module.exports = generateOrderId;
