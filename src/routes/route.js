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
    }
        
})




module.exports = router;
