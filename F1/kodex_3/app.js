'use strict';
const http = require('http');
const fs = require('fs');
const uc = require('upper-case');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    let content = fs.readFileSync('minHtmlFil.html').toString();
    content = uc.upperCase(content);
    res.end(content);
}).listen(3001);