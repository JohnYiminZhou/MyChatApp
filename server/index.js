const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const router = express.Router();

const accountRouters = require('./routers/accountRouters');




//tell Express taht it should accept JSON
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



server.listen(process.env.PORT || 5000, () => console.log(`Server has started at http://localhost:5000/`));