const orderModel= require("../models/orderModel")
const userModel=require("../models/userModel")
const productModel=require("../models/productModel")

const createOrder= async function (req, res) {
    let data= req.body
    let checkUser=req.body.userId
    let checkProduct=req.body.productId
    let x=req.headers.isFreeAppUser
    console.log(x)

    if(!checkUser) return res.send("The request is not valid as the user details are required.")
    //console.log(checkUser)
    let user = await userModel.findById(checkUser)
    //console.log(user)
    if(!user) return res.send("The request is not valid as no user is present with the given product id.")


    if(!checkProduct) return res.send("The request is not valid as the product details are required.")
    //console.log(checkProduct)
    let product = await productModel.findById(checkProduct)
    //console.log(product)
    if(!product) return res.send("The request is not valid as no product is present with the given product id.")

    // nbalance=user.balance
    // nprice=product.price


    // if(x==true){
    //     $set:{
    //         amount:0,
    //         isFreeAppUser:true,
    //     }

    // }
    // if(x==false){
    //     $set:{
    //         amount:nprice,
    //         isFreeAppUser:false

    let savedData= await orderModel.create(data)
    
    res.send({msg: savedData})
}

// const updateOrderr= async function (req, res){
//     let id=
// }


module.exports.createOrder= createOrder