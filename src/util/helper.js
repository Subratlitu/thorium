function printDate(){
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
console.log(date)
}
function printmMonth(){
var today = new Date();
var date = today.getMonth()+1;
console.log(date)

}
function getBatchInfo(){
    console.log("Thorium, W3D1, the topic for today is Nodejs module system")
}
module.exports.prToday=printDate
module.exports.prMonth=printmMonth
module.exports.prBatch=getBatchInfo