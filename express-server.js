var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World from Express!');
});

app.listen(8124);
