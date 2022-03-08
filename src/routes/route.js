const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const checktoken=require("../middlers/checktoken")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId",checktoken.checkingPoint, userController.updateUser)
router.delete("/delete/:userId",checktoken.checkingPoint, userController.deleteUser)

module.exports = router;