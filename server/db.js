const mongoose = require('mongoose');

//const url = process.env.mongo_url;
const url = 'mongodb+srv://yiminzhou:Znc19931019@cluster0-07zrt.mongodb.net/test?retryWrites=true&w=majority';

mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
mongoose.connect(url, { useNewUrlParser: true }, function(err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${url}`);
  }
});