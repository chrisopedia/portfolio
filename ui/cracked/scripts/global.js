/* -----nofollow----- */
$("a[data-url]").noFollow();

//Google search watermark
//$("input:text[data-type=searchinput]").googleSearch();

/* -----Tynt----- */
var tyntVariables = {"ap":"Read more: "};
addLoadEvent("http://tcr.tynt.com/javascripts/Tracer.js?user=bpZvKQBBer360wadbi-bnq&amp;st=1", 6);

/* ------Add This Configuration----- */
addthis_config = {
//	data_ga_tracker: dlabs.analytics,
	data_track_linkback: true,
	data_track_clickback: true,
	services_exclude: 'favorites,email,print'
};

/* -----verisign seal----- */
$('.jsVerisignSeal').live("contextmenu", function() {
	alert('The VeriSign Seal is a trademark of VeriSign, Inc. and its subsidiaries. Unauthorized copying is prohibited.');
	return false;
});

/* -----verisign seal----- */
var Modal = new ModalClass({selector: "a[data-type=modal]"});
