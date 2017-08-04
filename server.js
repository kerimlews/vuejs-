var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var cors = require('cors');
var passport = require('passport');

mongoose.connect();

const app = express();
const users = require('./routes/users');

app.use(cors());
app.use(bodyparser.json());
app.use('/users',users);
app.use(express.static(path.join(__dirname,'public')));

app.listen(3000, function(){
    console.log('started')
})