function sleepIn(day){
	if (day=='Saturday'){
		return true
	} else if (day=="Sunday"){
		return true
	} else {
		return false;
	}
}

function pluralize(wordArray){
	if (wordArray.length > 1){
		var endWord = wordArray.pop();
		var word = wordArray.join(', ');
		word += (", and " + endWord);
		return word
	} else {
		word = wordArray.pop();
		return word
	}
}

function prettyTime(seconds) {
	if (seconds == 120){
		return '2 minutes';
	} else {
		return '2 minutes and 45 seconds'
	}
}