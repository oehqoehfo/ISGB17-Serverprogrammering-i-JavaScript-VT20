'use strict';
const http = require('http');
const fs = require('fs');

exports.myServer = function() {

    http.createServer(function (req, res) {

        let filnamn;

        //Kontrollera url
        if (req.url === '/') {
            filnamn = 'index.html';
        }
        else {
            filnamn = req.url;
            //Ta bort inledande slash
            filnamn = filnamn.substr(1);
        }

        fs.stat(filnamn, function (err, stats) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end();
            }
            else {

                let dotPosition = filnamn.lastIndexOf('.');
                let ext = filnamn.substring(dotPosition + 1);
                //console.log(filnamn);
                //console.log(ext);

                if(ext === 'html') {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                }

                if(ext === 'css') {
                    res.writeHead(200, { 'Content-Type': 'text/css' });
                }

                if(ext === 'svg') {
                    res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
                }

                let content = fs.readFileSync(filnamn).toString();
                res.write(content);
                res.end();
            }
        });


    }).listen(81);


}


