$(document).ready(function(){
	$('#obstacles .window li').hide();
	$('#obstacles .window li:eq(0)').show();
	$('#obstacles .listing li:eq(0) a').addClass('active');
	$('#obstacles .listing li').each(function(index) {
		$(this).bind('click', function() {
			$('#obstacles .window li').hide();
			$('#obstacles .listing li a').removeClass('active');
			$(this).find('a').addClass('active');
			$('#obstacles .window li').eq(index).show();
			return false;
		});
	});
	var time = 60;
	function time_loop() {
		if (time != 0) {
			time--;
		}
		$('#be-a-contestant time').html(time);
		return time;
	}
	setInterval(time_loop, 1000);
	$('#navigation .section').each(function(index) {
		$(this).click(function() {
			$.scrollTo($('.Section').eq(index), {duration:1000});	
		});
	});
	$('#back-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

});
