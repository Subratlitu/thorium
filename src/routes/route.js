const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const newauthorController=require("../controllers/newauthorController")
const newpublisherController=require("../controllers/newpublisherController")
const newbookController=require("../controllers/newbookController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post("/createUser", authorController.createAuthor  )

//router.get("/getAuthorsData", authorController.getAuthorsData)

//router.post("/createBook", bookController.createBook  )

//router.get("/getBooksData", bookController.getBooksData)

//router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
router.post("/createnewAuthor", newauthorController.createnewAuthor  )
router.post("/cretenewPublisher",newpublisherController.createnewPublisher)
router.post("/cretenewBook",newbookController.createnewBook)
router.get("/getnewBook",newbookController.getnewBook)
router.put("/updatedBooks",newbookController.updateBooks)

module.exports = router;