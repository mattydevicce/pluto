var express = require('express');
var mongo = require('mongodb');
var ejs = require('ejs')
var client = mongo.MongoClient;
var app = express();
app.set('view engine', 'ejs')

client.connect('mongodb://localhost:27017/monsters', function(error, db) {

	var query = db.collection('monsters').find()

	var vampires = query.toArray(function(error, vampires) {
		
		app.get('/', function(req, res) {
			
			res.render('show', {vampires: vampires});
		
		})
  })

	
})


app.listen(3000)