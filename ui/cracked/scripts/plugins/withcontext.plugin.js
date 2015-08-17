$.fn.withContext = function(f) {
	this.each(function() {
		var self = $(this);
		var withContext = function(sel) {
			return $(sel, self);
		};
		f.call(self, withContext);
	});
};