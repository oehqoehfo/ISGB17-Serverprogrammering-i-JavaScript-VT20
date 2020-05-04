'use strict';

//npm init
//npm install express

const express = require( 'express' );

let app = express();

app.listen( 81, function () {
    console.log( 'Server is running on port 81!' );
});

app.get('/', function( request, response) {
    response.sendFile( __dirname + '/index.html' );
});

app.get('/merHamsterCom.html', function( request, response) {
    response.sendFile( __dirname + '/merHamsterCom.html');
});

//Middleware -> Placeras sist efter alla route metoder.
app.use( function( request, response  ){
    response.status(404);
    response.send('404 på given url');
});

