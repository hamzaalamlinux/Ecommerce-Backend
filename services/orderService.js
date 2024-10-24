const OrderRepository =  require("../repositories/OrderRepository");

class OrderService{
    constructor(){
        this.OrderRepository = new OrderRepository();
    }
    async createOrder(orderData, orderDetails){
        const savedOrder = this.OrderRepository.createOrderWithDetails(orderData, orderDetails);
        return savedOrder;
    }
}
module.exports = OrderService;