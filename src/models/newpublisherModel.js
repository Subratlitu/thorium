const mongoose = require('mongoose');

const newpublisherSchema = new mongoose.Schema( {
    
    publisherName: String,
    
    headQuarter:String

}, { timestamps: true });

module.exports = mongoose.model('newpublisher', newpublisherSchema)
