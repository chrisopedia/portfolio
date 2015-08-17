//more links
showHide = new ShowHideClass();
essentialsMore = new ShowHideClass({
	containerSelector: "ul[data-type=more-essentials]",
	visibleItems: 3
});

//LAZY LOADING

$("#Essentials li").onVisible({ callback: function() {
	$("img", this).lazyImage({ errorImg: 'http://ui2.ehowcdn.co.uk/_ui/lipstick/images/no-image.gif'});
}});
$("#TopicArticleList li").onVisible({ callback: function() {
	$("img", this).lazyImage({ errorImg: 'http://ui2.ehowcdn.co.uk/_ui/lipstick/images/no-image.gif'});
}});
$("#featuredArticles li").onVisible({ callback: function() {
	$("img", this).lazyImage({ errorImg: 'http://ui2.ehowcdn.co.uk/_ui/lipstick/images/no-image.gif'});
}});


addLoadEvent(function(){
	$(".facebookLike").css('background','transparent');
}, 5);

addLoadEvent("http://platform.twitter.com/widgets.js", 5);