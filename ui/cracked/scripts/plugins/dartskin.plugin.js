var DartUtils = (function() {
	return {
		takeover : function(image, clickthru, options) {
			$(function() {
				var eHow_width = 990;
				var window_width = $(window).width();
				var window_height = $(window).height();
				var sides_width = (window_width - eHow_width)/2;
				var header_height = 130;

				$(document).mousemove(function(e){
					if(!$.browser.msie){
						if(
							(
								(e.clientX < sides_width) && (e.clientX > (sides_width-208))
								||
								(e.clientX > (eHow_width+sides_width)) && (e.clientX < (eHow_width+sides_width+213))
							)
							&&
							(
								(e.clientY > header_height)
							)
						) {
							document.body.style.cursor = "pointer";
						} else {
							document.body.style.cursor = "default";
						}
					}
				});

				$(document).click(function(e){
					if(
						(e.clientX < sides_width) && (e.clientX > (sides_width-208))
						||
						(e.clientX > (eHow_width+sides_width)) && (e.clientX < (eHow_width+sides_width+213))
					) {
						document.location = clickthru;
					}
				});

				$('body').css('background-image', 'url('+image+')')
					.css('background-position', 'center 131px')
					.css('background-repeat', 'no-repeat');
				if (options.takeoverBanner) {
					var href = $("<a>", { css: {
						cursor: 'pointer',
						display: 'block',
						height: '175px',
						width: '100%'
					}}).attr("href", clickthru);
					$("#PromoAd990x90").after(href);
				}
				if (options.fixedBg) {
					$('body').css('background-attachment', 'fixed').css('background-position', 'center 0');
				}
			});
		}
	}
})();

