$.fn.defaultInput = function() {
	return this.each(function(){
		var element = $(this);
		var defaultValue = element.val()||"";
		element.bind("focus", function(){
			if(defaultValue == element.val()) element.val("");
		});
		element.bind("blur", function(){
			if(element.val()=="") element.val(defaultValue);
		});
	});
};

$(document).ready(function(){
	$('input.[data-type=defaultinput]').defaultInput();
});
