// childrenの使い方
$(function(){
	$('button').on('click', function(){
		$('ul').children().css('color','red');
	});
});