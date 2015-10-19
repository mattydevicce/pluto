var express = require('express');
var morgan  = require('morgan');
var app     = express();
var server = app.listen(3000);
var io     = require('socket.io')(server);

app.use(morgan('combined'));

app.use( express.static('public'));

var userNames = [];
var allClients = [];

io.on( 'connection', function(socket) {
	allClients.push(socket)
	console.log("INCOMING CONNECTION");
	socket.emit('users', {userList: userNames});

	socket.on('register', function(name) {
		userNames.push(name.userName);
		io.emit('newUser', {name: name.userName})
	});
	
	socket.on('message', function(message) {
		io.emit('incomming-message', {message: message.message})
	})


	socket.on('disconnect', function () {
	  console.log("DISCONNECTED");
	  var i = allClients.indexOf(socket);
	  console.log(i)
	  allClients.splice(i,1)
	  io.emit('userDisconnected', {name: userNames[i]});
	  console.log(userNames[i])
	  userNames.splice(i,1)
	  console.log(userNames)
	});
})