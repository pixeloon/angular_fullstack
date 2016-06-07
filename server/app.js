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

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('tiny'));
app.use('/api/pirates',pirates); // setting up the default path to use server as an API, can be chosen freely

app.get("/", function(req,res){
    res.send('Hello World 1');
});


app.listen(3000, function(){
  console.log("Listening on port 3000...")
})

