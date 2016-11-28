var http = require('http');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect("mongodb://8762:1234@ds163677.mlab.com:63677/vsp2");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
console.log("Connection succeeded.");
});

http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
    
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
