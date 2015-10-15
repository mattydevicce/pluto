var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var muppetsDB = [{id: 1, name: "Kermit", description: "green, frog", age: "37"},
{id: 2, name: "Fozzy Bear", description: "comedian, bear", age: "40"},
{id: 3, name: "Swedish Chef", description: "chef, VERY Swedish", age: "unknown"},
{id: 4, name: "Gonzo", description: "blue", age: "37"}]

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.set('port', 1337);

app.get('/muppets', function(req, res) {
	res.send(muppetsDB);
})

app.post('/muppets/new', function(req, res) {
	muppetsDB.push(req.body)
	res.redirect("/muppets");
})

app.patch('/muppets/:id', function(req, res) {
	console.log(req.body.name)
	var needsEditing = muppetsDB.splice((req.params.id-1),1)
	var needsEditing2 = needsEditing[0]
	if (req.body.name) {
		needsEditing2.name = req.body.name
		console.log("edited the name")
	} else if (req.body.description) {
		needsEditing2.description = req.params.description
		console.log("edited the description")
	} else if (req.body.age) {
		needsEditing2.age = req.body.age
		console.log("edited the age")
	}
	muppetsDB.push(needsEditing2)
	res.redirect("/muppets")
})

app.delete('/muppets/:id', function(req, res) {
	muppetsDB.splice((req.params.id-1),1)
	res.redirect("/muppets")
})



app.listen(app.get('port'), function(){
	console.log("App listening on http://localhost:%s", app.get('port'));
});


