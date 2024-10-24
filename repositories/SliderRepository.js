const Slider = require("../models/Slider");

class SliderRepository{
    async createSlider(sliderData){
        const slider =  new Slider(sliderData);
        return await slider.save();
    }

    async getSlider(){
        const sliders = await Slider.find();
        return sliders;
    }
}

module.exports = SliderRepository