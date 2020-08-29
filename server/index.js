const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const { addUser, removeUser, getUser, getUsersInParty } = require('./Users');
const app = express();
const cors = require('cors');

const server = http.createServer(app);
const io = socketio(server);
const port  = process.env.PORT || 5000;
const router  = require('./router');
app.use(router);
app.use(cors());
io.on('connect', (socket) => {
  socket.on('join', ({ name, party }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, party });

    if(error) return callback(error);

    socket.join(user.party);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to party ${user.party}.`});
    socket.broadcast.to(user.party).emit('message', { user: 'admin', text: `${user.name} has joined!` });
    io.to(user.party).emit('partyData', { party: user.party, users: getUsersInParty(user.party)});
    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.party).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('setCurrentTrackId', (message) => {
    const user = getUser(socket.id);

    socket.broadcast.to(user.party).emit('currentTrackId', messae);

  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.party).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.party).emit('partyData', { party: user.party, users: getUsersInParty(user.party)});
    }
  })
});


server.listen(port,() =>{
	console.log(`Start on port: ${port}`);
});