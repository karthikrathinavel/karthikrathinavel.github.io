var express = require('express');
var app = express();
var fs = require("fs");

app.get('/user1', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})


var server = app.listen(8081, function () {
   var host = "karthikrathinavel.github.io"
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
