const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name:String,
    catagory:String,
    price:Number





}, { timestamps: true });

module.exports = mongoose.model('product', productSchema) //products