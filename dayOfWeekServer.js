const http = require ('http') ;
const express = require('express');
const app = express();

app.use ( '/day1',( req,res) => {
    console.log("Day1");
    res.send('<h1>Monday</h1>');

})

app.use ( '/day2',( req,res) => {
    console.log("Day2");
    res.send('<h1>Tuesday</h1>');

})

app.use ( '/day3',( req,res) => {
    console.log("Day3");
    res.send('<h1>Wednesday</h1>');

})

app.use ( '/day4',( req,res) => {
    console.log("Day4");
    res.send('<h1>Thursday</h1>');

})

app.use ( '/day5',( req,res) => {
    console.log("Day5");
    res.send('<h1>Friday</h1>');

})

app.use ( '/day6',( req,res) => {
    console.log("Day6");
    res.send('<h1>Saturday</h1>');

})

app.use ( '/day7',( req,res) => {
    console.log("Day7");
    res.send('<h1>Sunday</h1>');

})

app.use ( '/',( req,res) => {
    console.log("Today Date");
    res.send('<h1>19March</h1>');

})




 const server = http.createServer(app);
 server .listen(3090);
app.listen(4020);
