const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'chat.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        //This will emit the event to all connected sockets
        io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' });
        // This will emit the event to all connected sockets
    });
  });

server.listen(5500, () => {
  console.log('listening on *:5500');
});