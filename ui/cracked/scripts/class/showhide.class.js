/**
 * showhide.class.js
 * Requires: jQuery, class.js
 * 
 * Automatically attaches events to more buttons.
 *
 * Usage:
 * 		var showHide = new ShowHideClass([options]);
 */

var ShowHideClass = Class.extend({
	defaults: {
		containerSelector: "ul[data-type=more]",
		buttonSelector: "button[data-type=more-button]",
		visibleItems: 3,
		animSpeed: 500,
		more: {
			text: "More",
			cls: "more"
		},
		less: {
			text: "Less",
			cls: "less"
		}
	},
	init: function(options){
		var self = this;
		this.options = $.extend({}, this.defaults, options);						
		$(this.options.containerSelector).each(function(){
			var el = $(this);
			var items = $('li',el);
						
			if(items.length > self.options.visibleItems) {
				var button = el.siblings(self.options.buttonSelector).show();
				self.hideListElements(items);
				
				button.toggle(function(){
					button
						.removeClass(self.options.more.cls)
						.addClass(self.options.less.cls)
						.html(self.options.less.text);
					items.show();
				}, function() {
					self.hideListElements(items);
					button
						.removeClass(self.options.less.cls)
						.addClass(self.options.more.cls)
						.html(self.options.more.text);
				});
			}
		});
	},
	hideListElements: function(items) {
		for(var i=this.options.visibleItems; i<items.length; i++) {
			$(items[i]).hide();
		}
	}
});