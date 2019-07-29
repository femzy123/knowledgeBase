const express = require('express');
const path = require('path')

// Init App
const app = express()

// Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home route
app.get('/', function(req, res){
    res.render('index', {
        title:'Articles'
    })
})

// Start server
app.listen(3000, function(){
    console.log('Server started on port 3000...')
})