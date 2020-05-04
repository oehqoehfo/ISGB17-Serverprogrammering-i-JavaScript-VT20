'use strict';

//npm init
//npm install express

//npm install

const express = require('express');

//Ny express-applikation
let app = express();

app.listen(81, function() {
    console.log('Server is running on port 81!');
});

app.get('/', function(request, response) {
    //GET på /!
    console.log('GET på url: / request.query', request.query);
    //send(), sendFile(), end()
    response.send('GET: ' + JSON.stringify(request.query));
});

app.post('/', function(request, response) {
    //POST på /!
    console.log('POST på url: / request.query', request.query);
    //send(), sendFile(), end()
    response.send('POST: ' + JSON.stringify(request.query));
});

/*
app.put();
app.patch();
app.delete();
*/