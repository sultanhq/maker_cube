var express = require('express'),
  app = express(app),
  server = require('http').createServer(app),
  io = require('socket.io')(server);

app.use(express.static('site'));

server.listen(8000, '0.0.0.0', function() {
  console.log('listening on *:8000');
});

var pong = io.of('/pong');
pong.on('connection', function(pongSocket) {

  console.log('a user connected ' + pongSocket.id);

  pongSocket.on('disconnect', function() {
    console.log('user disconnected' + pongSocket.id);
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
    //
    // cubeSocket.on('disconnect', function() {
    //   console.log('CUBE user disconnected' + cubeSocket.id);
    //   // cube.emit('disconnect', id);
    // });

  // });
});
