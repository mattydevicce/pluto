var request = require('request');

module.exports = function(movie) {
  request('http://www.omdbapi.com/?t=' + movie, function(error,response,body) {
		if (!error && response.statusCode == 200) {
			console.log(JSON.parse(body))
		}
	})
}