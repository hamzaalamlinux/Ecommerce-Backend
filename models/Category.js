const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema({
   categoryName : {type: String, required: true},
   description : {type: String},
   isDeleted : {type : Boolean, default : 0},
   createdAt : {type : Date, default : Date.now}
});

module.exports =  mongoose.model("Categories", categorySchema);