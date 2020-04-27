'use strict';

//Importera kodbibliotek
const fs = require('fs');

let filnamn ='test.txt';

fs.stat(filnamn, function (err, stats) {
    if(err) {
        err.message='Filen finns ej: ' + filnamn;
        return console.error(err);
    }
    else {
        console.log('Filen finns...');
        fs.watch(filnamn, function() {
            console.log('Filen har ändrats...');
            console.log(fs.readFileSync(filnamn).toString());
        });


    }

});

