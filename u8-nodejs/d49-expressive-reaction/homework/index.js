var express = require('express');
var mongo = require('mongodb');
var ejs = require('ejs')
var client = mongo.MongoClient;
var app = express();


client.connect('mongodb://localhost:27017/monsters', function(error, db) {
	
	var template = ejs.compile();

	var query = db.collection('monsters').find()
	var vampires = query.toArray(function(error, vampires) {
		template(vampires)
  })

	app.get('/', function(req, res) {
		res.send('asd');
	})
	
})


app.listen(3000)