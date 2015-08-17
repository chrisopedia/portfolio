$.fn.googleSearch = function() {
	return this.each(function() {
		var input = $(this);
		if (input.val() == "") input.addClass("gcsLogo");
		input.bind("blur", function() {
			if ($(this).val() == "") $(this).addClass("gcsLogo");
		}).bind("focus", function() {
			$(this).removeClass("gcsLogo");
		});
	});
}

