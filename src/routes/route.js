const express = require('express');
const router = express.Router();
const lodash = require('lodash')
const obj=require('./logger')
const ob=require('../logger/logger')
const prTime=require('../util/helper')
const prCase=require('../validator/formatter')
router.get('/test-me', function (req, res) {
    obj.printMessage("its done")
    ob.welMessage('Subrat nayak')
    prTime.prToday()
    prTime.prMonth()
    prTime.prBatch()
    console.log(prCase.prTrim('    subrat kumar nayak     '))
    console.log(prCase.prLower('FUNCTION UP'))
    console.log(prCase.prUpper('function up'))
    let months=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
    console.log(lodash.chunk(months,3))
    let oddNumbers=[1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(oddNumbers))
    //let dupValues=[[2,3,4,5],[3,4,5,6],[34,55,3,4,5],[2,3],[90,4,57,8]]
    console.log(lodash.union([2,3,4,5],[3,4,5,6],[34,55,3,4,5],[2,3],[90,4,57,8]))
    console.log(obj.url)
    res.send('My first ever api!')
});

module.exports = router;