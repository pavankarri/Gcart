
var express  = require('express');
var app      = express();    

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/GCART')); 

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
	io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

