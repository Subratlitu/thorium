const checkingPoint=function(req,res,next){
    //x=req.headers
    //console.log(x)
    let val =false
    req.headers.isFreeAppUser = val
    let x=req.headers.isFreeAppUser
   //console.log(x)

     if(!('isFreeAppUser' in req.headers)){
        console.log("the request is missing a mandatory header")
     }
     else{
        next()
     }
    
}

module.exports.checkingPoint=checkingPoint