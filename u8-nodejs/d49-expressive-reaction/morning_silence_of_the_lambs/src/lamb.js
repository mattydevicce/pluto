function Lamb(){

}

Lamb.prototype.say = function() {
	return 'baaa'
}

Lamb.prototype.silence = function() {
	this.say = function() {
		return false
	}
}

Lamb.prototype.hasWool = function() {
	if (number_of_bags > 0){
		var a = number_of_bags.toString() + " bags full"
		return a
	} else {
		return false
	}

}

var number_of_bags = 3;

Lamb.prototype.wool = function() {
	var a = number_of_bags.toString() + " bags full"
	return a
}

Lamb.prototype.sheer = function() {
	number_of_bags--
}