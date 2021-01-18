import express from 'express';
import http from 'http';
import WebSocket from 'ws';
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);

let client = new Server(server, {cors: "*"});

client.on('connection', (socket) => {
    console.log(socket)
});

server.listen(process.env.PORT || 8999, () => {
    console.log(`Sundance server started listening on ${server.address().port}.`);
});