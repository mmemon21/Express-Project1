/* Require external APIs and start our application instance */
var express = require('express');
var app = express();
var request = require('request');
var unirest = require("unirest");
var faker = require('faker');


/* Configure our server to read public folder and ejs files */
app.use(express.static('public'));
app.set('view engine', 'ejs');

/* The handler for the DEFAULT route */
app.get('/', function(req, res){
    var randomName = faker.name.findName(); // Rowan Nikolaus
    
    console.log(randomName); // ---> Want to display the line below.
    // window.alert("We have assigned you the name: " + randomName + "! If you don't like it, you may quit.");
    
    res.render('index');
});

app.get("/dec.ejs", function(req, res){
  res.render('dec');
});

app.get("/index.ejs", function(req, res){
  res.render('index');
});

app.get("/binary.ejs", function(req, res){
  res.render('binary');
});

app.get("/ref.ejs", function(req, res){
res.render('ref');
});

app.get("/hexa.ejs", function(req, res){
res.render('hexa.ejs');
});

/* The handler for undefined routes */
app.get('*', function(req, res){
   res.render('error'); 
});

/* Start the application server */
app.listen(process.env.PORT || 3000, function(){
    console.log('Server has been started');
})