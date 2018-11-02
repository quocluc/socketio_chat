var parser = require('xml2json');
var fs= require('fs');
fs.readFile( './db.xml', function(err, data) {
    var json = parser.toJson(data);
    console.log("to json ->", json);
 });
 
