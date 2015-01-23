var express = require('express'),
morgan = require('morgan');

var app=express();

app.use(morgan('dev'));

app.get('/',function (req,res) {
	console.log('A log');
	res.send('What the hell are you lookin at?');
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});