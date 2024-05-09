const express = require('express'); //importing the express package
const app = express(); //create a web application

//home route
app.get('/', function(req, res){
    res.send('Hello world');
});

//create the web server
app.listen(3000, function(){
    console.log('Server running on port 3000....');
});

