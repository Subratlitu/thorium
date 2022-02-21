function trimWord(text){
    let res=text.trim();
    return res

}
function changetoLowerCase(text1){
    let res1=text1.toLowerCase();
    return res1
    
}
function changetoUpperCase(text2){
    let res2=text2.toUpperCase();
    return res2
    
}
module.exports.prTrim=trimWord
module.exports.prLower=changetoLowerCase
module.exports.prUpper=changetoUpperCase