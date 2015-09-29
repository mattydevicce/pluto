$(function(){ 

	console.log('jQuery working')
	$('img').click(function(){
		console.log('image clicked')
	})
	$('img').Jcrop({
		onChange: showCoords,
		onSelect: showCoords
	});
	function showCoords(c) {
		$('#x').val(c.x);
		$('#y').val(c.y);
		$('#w').val(c.w);
		$('#h').val(c.h);
	};
});