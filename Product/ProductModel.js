import mongoose from "mongoose";


// {
//     _id: '1',
//     name: 'Slim Shirt',
//     category: 'Shirts',
//     image: '/Images/img1.jpg',
//     price: 60,
//     brand: 'Nike',
//     rating: 4.5,
//     numReviews: 10,
//     countInStock: 6,
// },



class ProductModel {
    constructor(){
        this.schema = new mongoose.Schema({
            name:{type:String, require:true},
            category:{type:String, require:true},
            image:{type:String, require:true},
            brand:{type:String, require:true},
            price:{type:Number, require:true},
            rating:{type:Number, require:true, default:2},
            numReviews:{type:Number, require:true},
            countInStock:{type:Number, require:true},
            
        })
    }
}

const product = new ProductModel()
const productModel = mongoose.model("tbl_products",product.schema)
export default productModel;