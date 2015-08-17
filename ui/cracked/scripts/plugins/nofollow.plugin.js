$.fn.noFollow = function() {
	return this.each(function() {
		var $this = $(this);
		$this.attr("href", $this.attr('data-url'));
	});
}

$('[data-copy]').each(function(i){
	var dataText = $(this).attr('data-copy');
	$(this).html(dataText);
});