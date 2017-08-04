var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var cors = require('cors');
var passport = require('passport');

const app = express();

app.listen(3000, function(){
    console.log('started')
})