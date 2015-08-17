var current = window.location.hash.split('#')[1] || 0;
$(".tabbedContent:not(:eq("+current+"))").hide();
$("ul.essentialsTabs li:eq("+current+")").addClass("selected");
$("ul.essentialsTabs li a").click(function(e){
	$(this).parent().siblings().removeClass('selected').end().addClass('selected').parent('ul').siblings('.tabbedContent').hide().end().siblings('.tabbedContent:eq('+$(this).parent().index()+')').fadeIn();
});