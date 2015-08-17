function show_more(e, target) {
	var element = document.getElementById(e);
	var section = document.getElementById(target);
	$(element).bind("click", function(){
		$(section).removeClass("Hide").addClass("Show");
		$(this).remove();
		return false;
	});
}

function show_modal() {
	var element = document.getElementById("modal");
	var section = document.getElementById("map");
	$(section).addClass("Hide");
	$(element).bind("click", function() {
		var close = $('<a href="#top" id="close" class="close">close</a>').prependTo("#map");
		var overlay = $('<div class="ModalOverlay"></div>');
		$(overlay).prependTo("body");
		$(section).removeClass("Hide").addClass("Modal");
		$("#close").click(function(){
			$(section).removeClass("Modal").addClass("Hide");
			overlay.remove();
			close.remove();
			return false;
		});
		return false;
	});
}

$(document).ready(function(){
	$("#story .excerpt").after('<a href="#more-story" id="more" class="more">Continue reading <span class="tick"></span></a>');
	$("#more-story").addClass("Hide");
	
	var $element = $("#tabs a");
	var $target = $("#things-to-do section");
	$target.addClass("Hide");
	$target.eq(0).removeClass("Hide").addClass("Show");
	$element.click(function(){
		var index = $element.index(this);
		$target.removeClass("Show").addClass("Hide");
		$element.removeClass("selected");
		$target.eq(index).removeClass("Hide").addClass("Show");
		return false;
	});

	show_more("more", "more-story");
	show_modal();
});