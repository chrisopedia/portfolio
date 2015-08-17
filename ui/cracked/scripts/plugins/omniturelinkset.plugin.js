var _omnitureLinkSetDomain = "";
var OmnitureLinkSet = function($element, linkSetId, location) {
	var impressionData = {};
	var ev = "lnkimpression";
	var wa_page = window.location.href;
	var wa_lst = linkSetId;
	var wa_mp = location;

	var linkTags = $("a", $element);
	var urls = [];
	for (var i = 0; i < linkTags.length; i++) {
		urls.push(String.format("{0};{1}", linkTags[i].href, i));
	}
	
	var getRandomNumber = function() {
		return Math.floor(Math.random()*9999999);
	}

	var wa_l = urls.join("|");
	var trackUrl = String.format("http://{0}/images/zig.gif?Log=1&v=JT01.02&ev={1}&wa_page={2}&wa_lst={3}&wa_mp={4}&wa_l={5}&vid={6}", _omnitureLinkSetDomain, ev, wa_page, wa_lst, wa_mp, wa_l, getRandomNumber());
	$(window).load(function() {
		$("body").append("<img src='"+trackUrl+"'/>");
	});

	linkTags.bind("click", function() {
		var href = $(this);
		var index = linkTags.index(href);
		var ev = "lnkimpression_click";
		var wa_page_click = window.location.href;
		var wa_lst_click = wa_lst;
		var wa_mp_click = wa_mp;
		var wa_l_click = String.format("{0};{1}", href.attr("href"), index);
		var clickUrl = String.format("http://{0}/images/zig.gif?Log=1&v=JT01.02&ev={1}&wa_page_click={2}&wa_lst_click={3}&wa_mp_click={4}&wa_l_click={5}&vid={6}", _omnitureLinkSetDomain, ev, wa_page_click, wa_lst_click, wa_mp_click, wa_l_click, getRandomNumber());
		$("body").append("<img src='"+clickUrl+"'/>");
	});
}