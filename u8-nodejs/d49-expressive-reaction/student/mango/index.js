var express = require('express')
var mongo = require('mongodb')

var client = mongo.MongoClient;

var app = express()

client.connect('mongodb://localhost:27017/wdi', function(error, db) {
  if (error) { console.log("Couldn't connect to database") }

  app.get('/', function(req, res) {

    var query = db.collection('students').find()
    var students = query.toArray(function(error, students) {
      res.send(student)
    })

  })

  app.get('/student/new', function(req, res) {
    db.collection('students').insert({name: "Toti"}, function(error) {
      if (error) { res.send(error) } else { res.send("Jaden exists now") }
    })
  })

  app.get('/student/update', function(req, res) {
    db.collection('students').update({name: "Toti"}, {$set: {color: "black"}}, function(error) {
      if (error) { res.send(error) } else { res.send("Toti has been updated") }
    })
  })

})

app.listen(3000)
