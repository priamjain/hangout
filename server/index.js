const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const app = express();

const server = http.createServer(app);
const io = socketio(server);
const port  = process.env.PORT || 5000;
const router  = require('./router');
app.use(router);

io.on('connection',(socket)=>{
	console.log("new connection");
	socket.on('disconnect',()=>console.log('user left'));
})


server.listen(port,() =>{
	console.log(`Start on port: ${port}`);
});