let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let io = require('socket.io')(server, {
  maxHttpBufferSize: 100000000,
  connectTimeout: 5000,
  transports:['websocket', 'polling', 'flashsocket'],
  pingInterval: 25 * 1000,
  pingTimeout: 5000,
  allowEIO3: true,
  cors: {
      origin: "*",
      methods: ["GET", "POST"],
  }
});

// let io = socketIO(server);

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
    
    console.log('user connected');

    socket.on('ServerSocketIOEvent', (data) => {

        console.log("App", data)
        
        io.emit("AppSocketIOEvent", data); // web_target_update
    });

    socket.on('message', function(data) {
        console.log('client sent a message: ' + data);
      });
});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});