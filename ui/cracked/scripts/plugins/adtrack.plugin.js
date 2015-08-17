$(function() {
	var container = "div[data-type='adTracking']";
	$(container + " a").bind("click", function() {
		var parent = $(this).parents(container);
		_JT.DM_Click(parent[0]);
	});
});

