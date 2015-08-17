$(document).ready(function(){
	$('nav a').each(function(index) {
		$(this).click(function() {
			$.scrollTo($('section').eq(index), {duration:1000});
		});
	});
});
