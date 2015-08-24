// parallax code goes here

$(document).ready(function(){
	
	var $davesBeagle = $('.top-center');
	var $bg = $('.bg');

	$(window).on('scroll',function(){
		var fromTop = $(window).scrollTop();
		// $davesBeagle.css('left',fromTop);
		$bg.css('top',((-1)*fromTop)/5)
	})

	$(window).mousemove(function(event){
		var xMove = -(event.pageX)/15;
		var yMove = -(event.pageY)/15;
		// console.log('x:'+event.pageX+' y:'+event.pageY);
		$bg.css('left',xMove);
		$bg.css('top',yMove);
	})

})