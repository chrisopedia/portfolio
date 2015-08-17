function fbLikeJumpFix() {
	// Purpose is to fix Facebook Like button jump on Lazy Load
	if ($(".facebookLike iframe").height()) {
		var newHeight = $(".facebookLike iframe").height();
		if (newHeight <= 64) {
			$(".facebookLike").height(newHeight).css('overflow', 'visible');
		}
	}
	window.setTimeout(fbLikeJumpFix, 500);
	// console.log($(".facebookLike iframe").height());
}
