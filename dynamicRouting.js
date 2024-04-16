//A program in express js for Dynamic Routing

const express = require('express');
const app = express();


app.get('/profile/:username', function(req,res){
    res.send(`<h1 style="color:red">Hello from ${req.params.username}</h1> `);
});

app.get('/profile', function(req,res){
    res.send("Hello from profile");
});





app.get('/', function(req,res){
    res.send("Hello from Homepage");
});

app.listen(2002);


