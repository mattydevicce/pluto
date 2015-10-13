var cowsay = require('cowsay')
var omdb = require('./omdb')

module.exports = function(){
	console.log(cowsay.say({text: "I love " + omdb,
		e: 'oO',
		T: 'U',
	  f: 'stegasaurus'}))
}