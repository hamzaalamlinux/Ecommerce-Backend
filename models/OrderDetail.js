const { default: mongoose, Schema } = require("mongoose");

const orderDetailSchema =  new mongoose.Schema({
    orderId : {type : Number ,  required: true},
    productId : {type : Schema.Types.ObjectId, ref : "Products"},
    productName : {type : String , required: true},
    quantity : {type : Number , required: true},
    price: {type : Number, required: true},
    category : {type: Schema.Types.ObjectId, ref: 'Categories'},

})

module.exports = mongoose.model("OrderDetails", orderDetailSchema);