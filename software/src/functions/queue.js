ws.on('message', (message: string) => {

    //log the received message and send it back to the client
    console.log('received: %s', message);
    ws.send(`Hello, you sent -> ${message}`);

    
});