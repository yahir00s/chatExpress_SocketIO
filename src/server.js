const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('usuario conectado');
    
    socket.on('chat', (msg) => {
        io.emit('chat', msg);
    });

    socket.on('disconnect', () => {
        console.log('usuario desconectado');
    });
});

server.listen(3000, () => {
    console.log('puerto 3000');
});