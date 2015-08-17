/**
 * Dead simple slider.
 *
 *
 * Example:
 *     var slider = new SliderClass(jQuery element, [options]);
 *
 * @requires jquery
 * @requires class
 * @requires jquery.easing
 */
 
SliderClass = Class.extend({
	defaults: {
		slideSpeed: 500,
		easing: "easeOutQuart",
		automatic: true,
		direction: "left",
		slideDelay: 5000,
		margin: 0
	},
	init: function (element, options) {
		var self = this;
		this.element = element;
		this.options = $.extend(this.defaults, options || {});
		this.isAnimating = false;
		this.slideWidth = this.element.width() + this.options.margin;
		this.ul = $("ul:first", this.element);
		
		this.element.siblings('[data-slider=next]').bind('click', function () {
			if (!self.isAnimating) self.slideLeft();
		});
		this.element.siblings('[data-slider=prev]').bind('click', function () {
			if (!self.isAnimating) self.slideRight();
		});
		
		this.auto();
		
		return this;
	},
	auto: function () {
		var self = this;
		if (this.options.automatic) {
			this.t = setTimeout(function () {
				if (self.options.direction === "left") {
					self.slideLeft();
				} else {
					self.slideRight();
				}
			}, this.options.slideDelay);
		}
	},
	clear: function () {
		if (this.options.automatic) clearTimeout(this.t);
	},
	slideLeft: function () {
		var self = this,
			li = $(".item:first", this.ul);

		this.clear();
		this.isAnimating = true;
		this.ul.animate({
			left: -(this.slideWidth)
		}, this.options.slideSpeed, this.options.easing, function () {
			li.clone().insertAfter($(".item:last", self.ul));
			li.remove();
			self.ul.css({left: 0});
			self.isAnimating = false;
			self.element.trigger("slide", ["left"]);
			self.auto();
		});
	},
	slideRight: function () {
		var self = this,
			li = $(".item:last", this.ul);

		this.clear();
		this.isAnimating = true;
		li.clone().insertBefore($(".item:first", this.ul));
		this.ul.css({left: -(this.slideWidth)});
		this.ul.animate({
			left: 0
		}, this.options.slideSpeed, this.options.easing, function () {
			li.remove();
			self.isAnimating = false;
			self.element.trigger("slide", ["right"]);
			self.auto();
		});
	}
});
if ( $('[data-slider="slider"]').length !== 0 ) {
    FactsSlider = [];
    $('[data-slider="slider"]').each(function () {
        FactsSlider.push(new SliderClass( $(this), {
            direction : 'right'

        }));
    });
}
