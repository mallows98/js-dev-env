var express = require('express'); // minimal web framework for node.js
var path = require('path'); // node.js registry path
var open = require('open'); // used to open our site in the browser

var port = 3001;
var app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(port, function(err){
  if(err) {
    console.log(err);
  }
  else {
    open('http://localhost:' + port);
  }
});
