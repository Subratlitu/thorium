const { count } = require("console")
const newbookModel= require("../models/newbookModel")
const newauthorModel=require("../models/newauthorModel")
const newpublisherModel=require("../models/newpublisherModel")


const createnewBook= async function (req, res) {
    let book = req.body
    let authorId=req.body.author
    
    if(!authorId) return res.send("The request is not valid as the author details are required.")
    //console.log(authorId)
    let author = await newauthorModel.findById(authorId)
    if(!author) return res.send("The request is not valid as no author is present with the given author id.")
    
    let publisherId=req.body.publisher
    

    if(!publisherId) return res.send("The request is not valid as the publisher details are required.")
    let publisher = await newpublisherModel.findById(publisherId)
    if(!publisher) return res.send("The request is not valid as no publisher is present with the given publisher id.")

    let bookCreated = await newbookModel.create(book)
    res.send({data: bookCreated})
}

const getnewBook=async function (req,res){
    let books = await newbookModel.find().populate('author publisher')
    res.send({data: books})
}

const updateBooks=async function(req,res){
    let hardCoverPublishers = await newpublisherModel.find({
        publisherName: { $in: ["Penguin", "HarperCollins"] },
      });
      console.log(hardCoverPublishers)

    let publisherIds = hardCoverPublishers.map((p) => p._id); //publisherIds is an array of publisher _id values
    console.log(publisherIds)
  await newbookModel.updateMany(
    { publisher: { $in: publisherIds } },
    { isHardCover: true }
  );


  let highRatedAuthors = await newauthorModel.find({ rating: { $gt: 3.5 } });
  let authorIds = highRatedAuthors.map((a) => a._id);

  await newbookModel.updateMany(
    { author: { $in: authorIds } },
    { $inc: { price: 10 } }
  );

  let updatedBooks = await newbookModel.find();
    res.send({data:updatedBooks})
}
 


module.exports.createnewBook= createnewBook
module.exports.getnewBook=getnewBook
module.exports.updateBooks=updateBooks
