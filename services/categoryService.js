const CategryRepository = require("../repositories/CategoryRepository");
class CategoryService {
    constructor(){
        this.categryRepository = new CategryRepository();
    }
    async createCategory(categoryName, description){
        const category = await this.categryRepository.createCategory({categoryName, description});
        return category;
    }
}

module.exports = CategoryService;