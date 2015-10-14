var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var postDB = [{yolo: 'yolo'}];
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.set(express.static(path.join(__dirname, '/public')));

app.set('port', 3000);


app.get('/posts', function(req, res) {
	res.send(postDB);
})

app.post('/posts/new', function(req, res) {
	console.log(req.body)
	postDB.push(req.body)
	res.send(postDB)
})

app.listen(app.get('port'), function(){
	console.log("App listening on http://localhost:%s", app.get('port'));
});