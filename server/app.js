// TODO:

// 1. Get database working, figure out routing to communicate 
//    to database & perform CRUD
// 2. On client side, wire up Angular and connect view for showing pirates
// 3. Handle creation of pirate
// 4. Handle deletion
// 5. Handle update
// 6. Refactor!

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const pirates = require('./routes/pirates');

app.use('/javascripts', express.static(__dirname + '/../client/javascripts'))
app.use('/stylesheets', express.static(__dirname + '/../client/stylesheets'))
app.use('/views', express.static(__dirname + '/../client/views'))

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('tiny'));
app.use('/api/pirates',pirates); // setting up the default path to use server as an API, can be chosen freely

app.get("*", function(req,res){
  // this path code is forbidden by Express()
    // res.sendFile(__dirname + '/../client/views/layout.html')
    // INSTEAD, use this:
    res.sendFile('layout.html', {root: './client/views'});
});


app.listen(3000, function(){
  console.log("Listening on port 3000...")
})

