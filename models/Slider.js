const { default: mongoose } = require("mongoose");

const sliderSchema  = new mongoose.Schema({
    imagePath : { type:String, required: true },
    isDeleted : {type : Boolean, default : 0},
    sliderType : {type : String, required: true},
    createdAt : {type : Date, default : Date.now}
});

module.exports = mongoose.model('Slider', sliderSchema)