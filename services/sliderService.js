const SliderRepository = require("../repositories/SliderRepository");

class SliderService{
    constructor() {
        this.sliderRepository = new SliderRepository();
    }

    async saveSlider(imagePath,sliderType){
        const slider = await this.sliderRepository.createSlider({imagePath, sliderType});
        return slider;
    }

    async getSlider(){
        const sliders = await this.sliderRepository.getSlider();
        return sliders;
    }
}
module.exports = SliderService;