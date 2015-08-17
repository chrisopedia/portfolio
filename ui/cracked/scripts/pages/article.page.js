//slider
var articleEssentialsSlider = new SliderClass($("#Essentials.Slider .sliderWindow"));

//more links
showHide = new ShowHideClass();
relatedArticlesMore = new ShowHideClass({
	containerSelector: "ul[data-type=more-relatedArticles]",
	visibleItems: 6
});

//LAZY LOADING
$("#relatedContent").onVisible({ callback: function() {
	$("#relatedContent img").lazyImage({ errorImg: 'http://ui2.ehowcdn.co.uk/_ui/lipstick/images/no-image.gif'});
}});

$("#Essentials").onVisible({ callback: function() {
	$("#Essentials img").lazyImage({ errorImg: 'http://ui2.ehowcdn.co.uk/_ui/lipstick/images/no-image.gif'});
}});

$("#Tombstone").onVisible({ callback: function() {
	$("img", this).lazyImage({ callback: function() { $(this).imageContainer({ useParentContainer: true})}});
}});

addLoadEvent(function(){
	$(".facebookLike").css('background','transparent');
}, 5);

addLoadEvent("http://platform.twitter.com/widgets.js", 5);
// END LAZY LOADING

_omnitureLinkSetDomain = "extended.dmtracker.com";
new OmnitureLinkSet($("#SecondaryContent .BrowseList"), "LS101", "TL");
new OmnitureLinkSet($("#RelatedContentListing"), "LS102", "BR");
new OmnitureLinkSet($(".Tombstone .UnorderedTitleList"), "LS103", "TOMB");

/* -----FB Like Jump Fix----- */
fbLikeJumpFix();