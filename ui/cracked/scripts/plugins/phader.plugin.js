$.phader = function(element, options) {
	var self = this;
	self.options = $.extend($.phader.defaults, options || {});
	var debug = this.options.debug;

	$.extend(self, {
		element: element,
		isMoving: false,
		isPaused: false,
		isStopped: false,
		sideStage: $('.jsPhaderSideStage', this.element),
		mainStage: $('.jsPhaderMainStage', this.element),

		sideStageHeight: function() {
			return (($('li', self.sideStage).length - self.options.sideStageItemsShown) * self.options.sideStageItemSize.height);
		},

		reverseStages: function() {
			var _tmp = $.fn.reverse;
			$.fn.reverse = [].reverse;
			$("ul", this.mainStage).html($("ul li", this.mainStage).reverse());
			$("ul", this.sideStage).html($("ul li", this.sideStage).reverse());
			$.fn.reverse = _tmp;
		},

		setupTooltips: function() {
			if (self.options.useTooltips) {
				try {
					$('.jsPhaderContainer .jsPhaderSideStage li a').tooltip(self.options.tooltipOptions);
				} catch(e) {
					//uh oh.
				}
			}
		},

		setupSideStage: function() {
			$('ul li:last', this.sideStage).insertBefore($('ul li:first', this.sideStage));
			$("ul", this.sideStage).css({
				bottom: this.sideStageHeight()
			});
			this.setupTooltips();
		},

		setupMainStage: function() {
			var self = this;
			$("li.video a", this.mainStage).bind("click", function() {
				var $parent = $(this).parent().parent();
				$(".videoThumbnail", $parent).hide();
				$(".videoPlayer", $parent).show();
				self.isStopped = true;
				$(self.element).trigger("phaderVideoPlaying");
				return false;
			});

			// $("li:last img",this.mainStage).lazyImage({callback: function() { 
			// 	$(this).imageContainer({useParentContainer: true});
			// 	self.mainStage.fadeIn();
			// 	self.sideStage.fadeIn();
			// }});
		},

		resetVideos: function() {
			$("li.video .videoThumbnail", this.mainStage).show();
			$("li.video .videoPlayer", this.mainStage).hide();
		},

		_setTimeout: function() {
			$this = this;
			this._main = setTimeout(function() {
				$this.main()
			},
			this.options.delay);
		},

		_clearTimeout: function() {
			clearTimeout(this._main);
		},

		advance: function(forced) {
			if (this.isMoving || (this.isPaused && !forced) || (this.isStopped && !forced)) return;
			this._clearTimeout();
			this.isMoving = true;
			this.imageLoaded = false;

			$this = this;

			$("ul", this.sideStage).animate({
				bottom: '-=' + this.options.sideStageItemSize.height + 'px'
			},
			function() {
				$('ul li:last', $this.sideStage).clone().insertBefore($('ul li:first', $this.sideStage));
				$("li:last", this).remove();
				$(this).css({
					bottom: $this.sideStageHeight()
				});
				$this.isMoving = false;
				$this._setTimeout();
				if (self.isStopped) {
					self.resetVideos();
					self.isStopped = false;
				}
			});

			$("ul li:last", this.mainStage).fadeOut('slow', function() {
				$("li:first", $this.mainStage).before($("li:last", $this.mainStage));
				$("li:first", $this.mainStage).show();
			});

			this.setupTooltips();

			this.options.onSwitch(forced);

			$(this.element).trigger("phaderAdvance");
			$(this.element).trigger("phaderChanged");
		},

		reverse: function(forced) {
			if (this.isMoving || (this.isPaused && !forced) || (this.isStopped && !forced)) return;
			this._clearTimeout();
			this.isMoving = true;
			this.imageLoaded = false;

			$this = this;

			if (this.isStopped) {
				this.resetVideos();
				this.isStopped = false;
			}

			$('ul li:first', this.sideStage).clone().insertAfter($('ul li:last', this.sideStage));
			$("ul", this.sideStage).animate({
				bottom: '+=' + this.options.sideStageItemSize.height + 'px'
			},
			function() {
				$("li:first", this).remove();
				$(this).css({
					bottom: $this.sideStageHeight()
				});
				$this.isMoving = false;
				$this._setTimeout();
				if (self.videoPlaying) {
					self.resetVideos();
					self.videoPlaying = false;
				}
			});

			$("li:last", this.mainStage).after($("li:first", this.mainStage));
			$("li:last", this.mainStage).hide().fadeIn('slow', function() {});

			this.setupTooltips();

			this.options.onSwitch(forced);

			$(this.element).trigger("phaderReverse");
			$(this.element).trigger("phaderChanged");
		},

		main: function() {
			this.advance(false);
			this._setTimeout();
		}
	});

	self.reverseStages();
	self.setupSideStage();
	self.setupMainStage();

	$(window).load(function() {
		self._setTimeout();

		$(self.element).bind("mouseenter", function() {
			self.isPaused = true;
		});
		$(self.element).bind("mouseleave", function() {
			self.isPaused = false;
		});
	});

	$('.jsPhaderAdvance').click(function() {
		self.advance(true);
		return false;
	});
	$('.jsPhaderReverse').click(function() {
		self.reverse(true);
		return false;
	});
};

$.phader.defaults = {
	debug: false,
	delay: 5000,
	sideStageItemSize: {
		height: 75,
		width: 98
	},
	sideStageItemsShown: 4,
	useTooltips: true,
	tooltipOptions: {
		offset: [-13, 0],
		useLayout: true
	},
	onSwitch: function() {}
};

$.fn.phader = function(options) {
	return this.each(function() {
		var element = $(this);
		if (element.data('phader')) return;
		var phader = new $.phader(element, options);
		element.data('phader', phader);
	});
}
