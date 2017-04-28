var express = require('express'),
  app = express(app),
  server = require('http').createServer(app),
  io = require('socket.io')(server),
  ip = require('ip'),
  currentIp = ip.address(),
  serverPort = 8080;

app.set('view engine', 'ejs');

app.use(express.static('views'));

app.get('/index.html', function(req, res) {
    res.render('index.ejs', {ip: currentIp, port: serverPort});
});

app.get('/', function(req, res) {
    res.render('index.ejs', {ip: currentIp});
});

server.listen(serverPort, '0.0.0.0', function() {
  console.log('listening on *:' + serverPort + ' & ' + currentIp);
});

var pong = io.of('/pong');
pong.on('connection', function(pongSocket) {

  console.log('a Pong user connected ' + pongSocket.id);

  pongSocket.on('disconnect', function() {
    console.log('Pong user disconnected ' + pongSocket.id);
    id = (pongSocket.id).slice(6);
    pong.emit('disconnect', id);
  });

  pongSocket.on('join', function(data) {
    pong.emit('join', data)
  });

  pongSocket.on('check', function(data) {
    pong.emit('check', data)
  });

  pongSocket.on('spaces', function(data) {
    pong.emit('spaces', data)
  });

  pongSocket.on('available', function(msg) {
    pong.emit('available', msg);
  });

  pongSocket.on('Lcontrol message', function(msg) {
    pong.emit('Lcontrol message', msg);
  });

  pongSocket.on('Rcontrol message', function(msg) {
    pong.emit('Rcontrol message', msg);
  });

  pongSocket.on('score', function(msg) {
    pong.emit('score', msg);
  });

  pongSocket.on('winner', function(msg) {
    pong.emit('winner', msg);
  });

  pongSocket.on('newGame', function(msg) {
    pong.emit('newGame', msg);
  });

});

var cube = io.of('/cube');
cube.on('connection', function(cubeSocket) {



  console.log('a CUBE user connected ' + cubeSocket.id);

  cubeSocket.on('message', function(data) {
    cube.emit('message', data);
  });

});
