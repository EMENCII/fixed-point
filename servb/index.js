var express = require('express');
var path = require('path');
var http = require('http');

let app = express()
let server = http.createServer(app)

//app.set('port', '3000');
server.listen(3000);


app.get('/', (req, res) => {
  console.log('vah')
  res.sendFile(path.join(__dirname, 'eqG.html'))
})