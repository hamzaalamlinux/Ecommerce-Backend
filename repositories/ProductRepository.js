const Product = require("../models/Product")

class ProductRepository{

    async createProduct(productData){
        const product = new Product(productData);
        return await product.save();
    }

    async getProducts(){
        const  products = await  Product.find();
        return products;
    }

    async getProductsById(id){
        
        const  products = await  Product.findById(id);
        return products;
    }
}

module.exports = ProductRepository;