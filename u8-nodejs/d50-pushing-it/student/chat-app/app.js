var express = require('express');
var morgan  = require('morgan');
var app     = express();

var server = app.listen(3000);
var io     = require('socket.io')(server);

app.use(morgan('combined'));

app.use( express.static('public'));

io.on( 'connection', function(socket) {

	console.log('INCOMING CONNECTION');

	socket.emit("hello", {message: 'hi from wdi', admin: 'matt'})
	socket.on('CLICK', function(msg) {
		console.log( msg.name + " said: " + msg.message );
		io.emit('christmas', msg);
	});


}); // io