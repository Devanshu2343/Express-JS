
//writing core module
const http = require ('http') ;

// core module for accessing express JS
const express = require('express');
//app will be the function name
const app = express();

 app.use(()=>{
     console.log('Express is works');
 })

//create server 
const server = http.createServer(app);
server .listen(3090);



