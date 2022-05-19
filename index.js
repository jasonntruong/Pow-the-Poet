var http = require('http');
var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/mainFillTheLyric.html');
});

const server = app.listen((process.env.PORT || 5000), () => {
    console.log('Example app listening at http://localhost:8080');
});