var express = require('express');
var session = require('express-session');
var path = require('path')
var app = express();

app.set('port', 3000);

app.listen(app.get('port'))

app.use(express.static(path.join(__dirname, '/public')));


app.use(session({
  secret: 'password',
  resave: false,
  saveUninitialized: true
}))

var ticketsIssued = 10
var currentlyServing = 0

setInterval(function() {
	if (currentlyServing < ticketsIssued) {
		currentlyServing++
	}
}, 2000)


app.get('/', function(req, res) {
	var css = "<head><link rel=stylesheet type=text/css href=style.css></head>"
	if (req.session.ticket) {
		if (req.session.ticket == currentlyServing) {
			res.send("\
				<html>"+css+"\
				<body>\
					<h1>Youre up!</h1>\
				</body>\
				</html>\
			")
		} else {
			res.send("\
				<html>\
				<body>"+css+"\
					<script>setTimeout(function(){document.location.reload()},2000)</script>\
					<h1>Welcome to a coffee queue</h1>\
					<p>Please wait</p>\
				</body>\
				</html>\
			")
		}
	} else {
		res.send("\
			<html>"+css+"\
			<body>\
				<script>setTimeout(function(){document.location.reload()},2000)</script>\
				<h1>Welcome to a coffee queue</h1>\
				<p>Currently servering #"+currentlyServing+" of "+ticketsIssued+"</p>\
				<p>You are #"+req.session.ticket+"</p>\
				<a href='/queue-up'>Get in line!</a>\
			</body>\
			</html>\
		")
	}
});

app.get('/queue-up', function(req, res) {
	ticketsIssued++
	req.session.ticket = ticketsIssued
	res.redirect('/')
})