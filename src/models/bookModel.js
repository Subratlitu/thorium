const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        required:true,
        type:String
    },
    authorName: String, 
    tags: [String],
    
    stockAvailable: Boolean,
    year:Number,
    totalPages:Number,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    sales: {type: Number, default: 10}
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
