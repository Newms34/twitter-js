var express = require('express'),
  morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.get('/', function(req, res) {
  console.log('A big log');
  res.send('Go away! You\'re not welcome here.');
});

app.get('/tweets', function(req, res) {
  res.send('Is there a bird in here?');
});


var server = app.listen(3000, function() {

});