const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  
  io.on('connection', (socket) => {
    const userName = socket.handshake.query.nickname || "Anonymous";

    console.log('a user connected'), 
    socket.on('chat message', (msg) => {
        console.log('chat message', `${userName} ${'is typing'}`), o.emit('chat message', `${userName} ${'is typing'}`)});
    socket.on('disconnect', () => {
        console.log(`${userName} has disconnected`), o.emit('chat message', `${userName} ${'is typing'}`) // took some of lines 17 and 19 from Luis, but adapted to meet the assignment prompt.
  });
});
  
  server.listen(3000, () => {
    console.log('listening on *:3000');
  });