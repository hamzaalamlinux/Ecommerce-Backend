const { default: mongoose, Schema } = require("mongoose");

const productSchema = new mongoose.Schema({
    productName : {type : String,  required: true},
    imagePath  : {type: String, required: true},
    category : {type: Schema.Types.ObjectId, ref: 'Categories'},
    isDeleted : {type : Boolean, default : 0},
    description : {type : String, requird: true},
    createdAt : {type: Date, default: Date.now},
    price : {type : Number, default : 0, required: true}
});

module.exports = mongoose.model("Products", productSchema);