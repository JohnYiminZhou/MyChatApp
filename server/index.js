const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const socketIo = require('socket.io');

const accountRouters = require('./routers/accountRouters');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./actions/users');

//Setting up exress and adding socketIo middleware
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

//Enable all CORS Requests
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//
app.use(express.json());

//use router
app.get('/', (req, res) => {
  res.send("Server is running.")
})

app.use('/user', accountRouters);

//set up db
const mongoose = require('mongoose');
const mongo_uri = 'mongodb+srv://yiminzhou:Znc19931019@cluster0-07zrt.mongodb.net/test?retryWrites=true&w=majority';
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
mongoose.connect(mongo_uri, { useNewUrlParser: true }, function(err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});

//Setting up socket
io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});



server.listen(process.env.PORT || 5000, () => console.log(`Server has started at http://localhost:5000/`));