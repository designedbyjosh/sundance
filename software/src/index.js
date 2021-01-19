import express from 'express';
import http from 'http';
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);

let client = new Server(server, {cors: "*"});

const generateCanvas = (width, height, pixel={r: 15, g: 15, b: 15}) => {
    let canvas = [];
    for (let y = 0; y < height; y++) { 
        let row = [];
        for (let x = 0; x < width; x++) { 
            row.push({r: x*5, g: y*5, b: 15});
        }
        canvas.push(row);
    }
    return canvas;
}

var queue = [];
var canvas = generateCanvas(30, 15)

client.on('connection', (socket) => {
    queue.push(socket)
    socket.emit("/project/sundance/queue", queue.length)

    socket.on("disconnect", () => {
        queue = queue.splice(queue.indexOf(socket), 1)
        client.emit("/project/sundance/queue", queue.length)
    })

    socket.emit("/project/sundance/canvas", canvas)

    socket.on("/project/sundance/canvas", (data) => {
        socket.broadcast.emit("/project/sundance/canvas", data)
        canvas = data;
    })
});

server.listen(process.env.PORT || 8999, () => {
    console.log(`Sundance server started listening on ${server.address().port}.`);
});