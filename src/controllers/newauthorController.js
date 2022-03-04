const newauthorModel= require("../models/newauthorModel")

const createnewAuthor= async function (req, res) {
    let author = req.body
    let newauthorCreated = await newauthorModel.create(author)
    res.send({data: newauthorCreated})
}



module.exports.createnewAuthor= createnewAuthor
