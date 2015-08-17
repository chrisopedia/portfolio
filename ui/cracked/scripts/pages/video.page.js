//slider
var articleEssentialsSlider = new SliderClass($("#VideoSeries .sliderWindow"), {
	automatic: false
});

//more links
showHide = new ShowHideClass();
relatedArticlesMore = new ShowHideClass({
	containerSelector: "ul[data-type=more-relatedArticles]",
	visibleItems: 5
});

//embed code
$('#EmbedTools input').click(function(){
	this.select();
});

//video helper
function switchVideoToHD(){
	var obj = $('#VideoPlayer object');
	
	obj.attr('width', '967px');
	obj.attr('height', '544px');
		
	return $('body').addClass('Widescreen');
}

function switchVideoToSD() {
	var obj = $('#VideoPlayer object');
	
	obj.attr('width', '640px');
	obj.attr('height', '360px');
	
	return $('body').removeClass('Widescreen');
}

//LAZY LOADING
$("#relatedContent").onVisible({ callback: function() {
	$("#relatedContent img").lazyImage({ errorImg: '/ui/shared/images/no-image.gif'});
}});