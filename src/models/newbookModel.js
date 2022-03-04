const mongoose = require('mongoose');
const newauthorModel = require('../models/newauthorModel');
const newpublisherModel = require('../models/newpublisherModel');
const ObjectId = mongoose.Schema.Types.ObjectId

const newbookSchema = new mongoose.Schema( {
    
    bookName: String,
    author:{
        type:ObjectId,
        ref:"newauthor"
    },
    price:Number,
    rating:Number,
    publisher:{
        type:ObjectId,
        ref:"newpublisher"
    },
    
    headQuarter:String,
    isHardCover:{
        type:Boolean,
        default:false
    },

}, { timestamps: true });

module.exports = mongoose.model('newbook', newbookSchema)