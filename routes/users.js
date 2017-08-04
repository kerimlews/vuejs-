var express = require('express');
const router = express.Router();

router.get('/users',function(req,res,next){
    res.send('USERS')
})


router.get('/authenticate',function(req,res,next){
    res.send('authenticate')
})


router.get('/profile',function(req,res,next){
    res.send('profile')
})


router.get('/registerr',function(req,res,next){
    res.send('registrer')
})


router.get('/validate',function(req,res,next){
    res.send('validate')
})
module.exports = router;