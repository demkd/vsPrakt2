var http = require('http');
var Artist = require('./Artist');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect("mongodb://8762:1234@ds163677.mlab.com:63677/vsp2");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
console.log("Connection succeeded.");
});
var newArtist = new Artist({
    name: "Prometheus Pithras",
    location: "NeoChiba9",
    bdate: "?.?.2268",
    favorit: "true",
    uid: 0
});
/*newArtist.save(function(err){
    if(err){
        console.error(err);
    }else{
        console.log("successful write");
    }
});*/
http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
     //res.sendFile(__dirname + '/index.html');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
