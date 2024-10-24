const Category = require("../models/Category");

class CategoryRepository{
    async createCategory(categoryData){
        const category = new Category(categoryData);
        return await category.save();
    }
}

module.exports = CategoryRepository;