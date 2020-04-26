const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const socketIo = require('socket.io');

const accountRouters = require('./routers/accountRouters');

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
io.on("connection", socket => {
  console.log("New client connected");

  socket.on("disconnect", () => console.log("Client disconnected"));
  
})



server.listen(process.env.PORT || 5000, () => console.log(`Server has started at http://localhost:5000/`));