
const express = require('express');

var app = express();

var path = require('path');

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname + '/hello.html'))
});

app.listen(process.env.PORT || 8080);