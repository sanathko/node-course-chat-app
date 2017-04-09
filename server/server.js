const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

//better approach than (__dirname/../public)
const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.emit('newMessage', {
    from: 'mike',
    text: 'Hey whats up',
    createdAt: 123
  });

  socket.on('createMessage', (newMessage) => {
    console.log('new message is ',newMessage);
  });

  socket.on('disconnect', () => {
    console.log('disconnected from server');
  });

});

server.listen(port, () => {
  console.log(`started on port ${port}....`);
});
