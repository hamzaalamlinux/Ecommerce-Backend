const { default: mongoose, Schema } = require("mongoose");

const orderSchema = new mongoose.Schema({
    orderId : {type : Number, required: true, unique : true},
    user : {type : Schema.Types.ObjectId, ref : 'User'},
    quantity : {type : Number, required : true},
    total : {type : Number, required : true},
    shipperName : {type: String, required: true},
    shipperContact : {type: String, reqired: true},
    shipperEmail : {type: String},
    shipperAddress : {type: String, required: true},
    isDeleted : {type : Boolean, default : 0}
});

module.exports = mongoose.model("Orders", orderSchema);