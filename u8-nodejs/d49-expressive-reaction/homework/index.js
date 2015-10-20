var express = require('express');
var mongo = require('mongodb');
var bodyParser = require('body-parser')
var path = require('path')
var client = mongo.MongoClient;
var app = express();
var BSON = require('mongodb').BSONPure;
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.set('port', 3000);
app.use('/', express.static(path.join(__dirname, 'public')));


client.connect('mongodb://localhost:27017/monsters', function(error, db) {

	app.get('/index', function(req, res) {
		var query = db.collection('vampires').find()
		var vampires = query.toArray(function(error, vampires) {			
			res.send(vampires)
		})
  })

	app.post('/create', function(req, res) {
		console.log(req.body)
		db.collection('vampires').insert(req.body)
		res.redirect("/");
	})

	app.get('/show/:name', function(req, res) {
		var query = db.collection('vampires').find({name: req.params.name})
		var vampires = query.toArray(function(error, vampires) {
			res.send(vampires)
		})
	})

	app.get('/edit/:id', function(req, res) {
		console.log(req.params.id)
		console.log((req.params.id).toString())
		var obj_id = mongo.ObjectID(req.params.id)
		var query = db.collection('vampires').find({_id: obj_id})
		var vampires = query.toArray(function(error, vampires) {
			res.send(vampires)
		})
	})
	

})


app.listen(app.get('port'), function() {
	console.log('App listening on http://localhost:%s', app.get('port'));
});