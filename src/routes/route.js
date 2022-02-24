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
    "bookings": [{
      "bookingNmber":1,
      "sportId":"",
      "centerId":"",
      "type":"private",
      "slot":"2757031580385",
      "bookedOn":"21/3/22",
      "bookedFor":"12/2/22"
    },
    {
      "bookingNmber":2,
      "sportId":"",
      "centerId":"",
      "type":"private",
      "slot":"2757031580385",
      "bookedOn":"21/3/22",
      "bookedFor":"12/2/22"
    },
    {
      "bookingNmber":3,
      "sportId":"",
      "centerId":"",
      "type":"private",
      "slot":"2757031580385",
      "bookedOn":"21/3/22",
      "bookedFor":"12/2/22"
    }
     
     ]
  },{
    "name": "virat",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": [
      "swimming"
    ],
    "bookings": [{
      "bookingNmber":1,
      "sportId":"",
      "centerId":"",
      "type":"private",
      "slot":"2757031580385",
      "bookedOn":"21/3/22",
      "bookedFor":"12/2/22"
    }]
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
 //Q3
    //res.send(  { msg: arr , status: true }  )
    //console.log(player[0].name)
 

    router.post("/play", function(req, res){
      let userName=req.body.name

      let newPlayer=req.body
      

      for (let i=0;i<player.length;i++){
        if (player[i].name===userName){
            res.send("player already exist!")
            
            break;
        } 
    }
      player.push(newPlayer)
    res.send(player)
    })    

//console.log(player)
//Q4
router.post("/player/:playrName/bookings/:bookingId", function(req, res){
  let name=req.params.playrName
  let isPlayerPresent=false
  for(let i=0;i<player.length;i++){
    if (player[i].name===name) {
      isPlayerPresent=true
    }
  }
  if (!isPlayerPresent) {
    return res.send("player is not present")
  }
  let booking=req.body
  let bookingId=req.params.bookingId
  for(let i=0;i<player.length;i++){
    if (player[i].name===name) {
      for(let j=0;j<player[i].bookings.length;j++){
        if (player[i].bookings[j].bookingNmber===bookingId) {
          return res.send("player with this booking id is alredeay available")
        }
      }
      player[i].bookings.push(booking)
      
    }
  }
res.send(player)
})    

module.exports = router;
