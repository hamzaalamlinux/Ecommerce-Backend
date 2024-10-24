const ProductRepository = require("../repositories/ProductRepository");
class ProductService{
    constructor(){
        this.ProductRepository = new ProductRepository();
    }
    async createProduct(productData){
        return await this.ProductRepository.createProduct(productData);
    }
    
    async getProducts(){
        return await this.ProductRepository.getProducts();
    }
    async getProductsByid(id){
        return  await  this.ProductRepository.getProductsById(id);
    }
}

module.exports = ProductService;