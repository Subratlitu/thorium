const express = require('express');
const router = express.Router();
//1
router.get('/movies', function(req, res) {
    
    res.send('["dhoom 2","krish","war","robort","bahubali","kgf"]')
})

//2
router.get('/movies/:movieId', function(req, res) {
    mov=["dhoom 2","krish","war","robort","bahubali","kgf"]
    let ind=req.params.movieId
    if (ind>mov.length-1) {
        res.send("movies index does not exit")
    }
    else{
        res.send(mov[ind])
    }
    
})
//3
router.get('/film', function(req, res) {
    
    res.send('[ {“id”: 1,“name”: “The Shining”},{“id”: 2,“name”: “titanic”},{“id”: 3,“name”: “inception”},{“id”: 4,“name”: “avtar”}]')
        
})
//4
router.get('/film/:filmId', function(req, res) {
    
    const movi= [{'id':1,'name':'the shining'},{'id':2,'name':'titanic'},{'id':3,'name':'inception'},{'id':4,'name':'avtar'}]
    let val=req.params.filmId;
    let flag=false
    for(let i=0;i<movi.length;i++){
        if(movi[i].id==val){
            flag=true
            res.send(movi[i])
            break;
        }
        else{
            res.send("no movie available for this id")
        }
    }
        
})
//5
router.get('/sol1', function(req, res) {
    let arr=[1,2,3,5,6,7]
    let misNumber
   let sum=7*(7+1)/2
   let arrSum=0
   for(let i=0;i<arr.length;i++){
       arrSum=arrSum+arr[i];

   }
   misNumber=sum-arrSum;
    
    res.send({data:misNumber})
        
})
//6
router.get('/sol2', function(req, res) {
    let arr1=[33, 34, 35, 37, 38]
    let missNumber
   let sum1=6*(33+38)/2
   let arr1Sum=0
   for(let i=0;i<arr1.length;i++){
       arr1Sum=arr1Sum+arr1[i];

   }
   missNumber=sum1-arr1Sum;
    
    res.send({data:missNumber})
        
})



module.exports = router;
