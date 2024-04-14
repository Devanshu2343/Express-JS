// A program in Express Js to show routing

const express = require('express');
const app = express();

app.use(function(req,res,next){
    console.log('Middleware Working ');
    next();
});

app.get ('/about' , function(req,res){
    res.send('<h2 style="color: green;">How are you!!!!!</h2>');
});

app.get ('/' , function(req,res){
    res.send('<h1 style="color: red;">Hello!!!!!</h1>');
});

app.listen(2501);
