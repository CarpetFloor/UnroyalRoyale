// tab space might still be 2, or maybe a combination of 2 and 4

const mapSize = 64;
const mapMultiplier = 20;
const w = mapSize * mapMultiplier;
const h = mapSize * Math.floor(mapMultiplier * 0.65)

const { createSocket } = require('dgram');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const { start } = require('repl');
const port = 3000;

app.use(express.static(__dirname));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

http.listen(process.env.PORT || port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
    console.log("");
});

io.on('connection', (socket) => {
    console.log(socket.id + " connected");
    io.emit("connected");
});