var express = require('express');
const { mongoose } = require('mongoose');
var app = express();
const routes = require('./src/routes');

const APP_ROTH_PATH = '/api/spotify'

app.use(APP_ROTH_PATH, routes);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

/*mongoose.connection('mongodb://localhost:27017/spot', (err,res) => {
    if(err) throw err
    console.log('Connected')
})*/

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});