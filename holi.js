const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}))

app.use('/',(req,res,next)=>{
    console.log('item name: ',req.body);
    res.send("<h1> Happy Holi..... Holiiiiiii...............</h1>");
});

app.listen(8000);
