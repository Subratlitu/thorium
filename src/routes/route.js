const express = require('express');
const router = express.Router();

// //1
// router.get('/sol1', function(req, res) {
//     let arr=[1,2,3,5,6,7]
//     let misNumber
//    let sum=7*(7+1)/2
//    let arrSum=0
//    for(let i=0;i<arr.length;i++){
//        arrSum=arrSum+arr[i];

//    }
//    misNumber=sum-arrSum;
    
//     res.send({data:misNumber})
        
// })
//2
// router.get('/sol2', function(req, res) {
//     let arr1=[33, 34, 35, 37, 38]
//     let missNumber
//    let sum1=6*(33+38)/2
//    let arr1Sum=0
//    for(let i=0;i<arr1.length;i++){
//        arr1Sum=arr1Sum+arr1[i];

//    }
//    missNumber=sum1-arr1Sum;
    
//     res.send({data:missNumber})
        
// })


let player=[ {
    "name": "manish",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": [
      "swimming"
    ],
    "bookings": []
  },{
    "name": "rahul",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": [
      "swimming"
    ],
    "bookings": []
  },{
    "name": "virat",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": [
      "swimming"
    ],
    "bookings": []
  },{
    "name": "rohit",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": [
      "swimming"
    ],
    "bookings": []
 }]
 
    //res.send(  { msg: arr , status: true }  )
    //console.log(player[0].name)
 

    router.post("/play/:name/:dob/:gender/:city/:sports/:bookings", function(req, res){

      let userName=req.params.name
      let userDob=req.params.dob
      let userGender=req.params.gender
      let userCity=req.params.city
      let userSports=req.params.sports
      let userBookings=req.params.bookings

      let newPlayer={}

      newPlayer.name=userName
      newPlayer.dob=userDob
      newPlayer.gender=userGender
      newPlayer.city=userCity
      newPlayer.sports=userSports
      newPlayer.bookings=userBookings
      let mark=0

      for (let i=0;i<player.length;i++){
        if (player[i].name===userName){
            res.send("player already exist!")
            mark=1
            break;
        } 
    }
    if (mark===0) {
      player.push(newPlayer)
    }
    player.push(newPlayer)
    res.send(player)
    })    

//console.log(player)


module.exports = router;
