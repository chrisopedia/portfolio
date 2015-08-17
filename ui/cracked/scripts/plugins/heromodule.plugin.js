/* 
* Hero Slider Module
*
* - Minimum <li> items are 2, currently set at 4
* - Configurable defaults : Trasition interval and length 
*
*/

(function ($) {
    $.fn.hero = function (c) {
        var c = $.extend(true, $.fn.hero.defaults, c);
        return this.each(function () {
            var a = $(this);
            var b = {
                container: a,
                transitionInProgress: false,
                manualTransition: false,
                pausePresentation: false,
				forceUpdate: false,
				forceNum: 0
            };
			readyBillboard (c, b);
            readBillboardImages(c, b);
            if (b.images.length < 2) {
                alert('The "hero" widget requires at least two sets of images!');
                $("#heroSlider").css("display", "none");
                return
            }
            initializeBillboards(c, b);
            runBillboards(c, b);
        })
    };
    
    $.fn.hero.defaults = {
        transitionsInterval: 4000,
        transitionsLength: 1000
    };

	function deactivate() {
		$("ul.heroLinks li.active").removeClass("active");
	} 
	
	function restore() {
		var s = $("ul.heroLinks li.active").attr("data-index");
		$('ul.heroLinks li[data-index='+ s +']').addClass("reserve").removeClass("active");						
	}

    function readBillboardImages(e, f) {
        var g = f.container.find("li");
        f.images = [];
        g.each(function (a, b) {
            var c = $(b).find("img");
            var d = $(b).find("a");
            if (c.length >= 1) {
                f.images.push({
                    title: $(b).find("span"),
                    slide: $(c).attr("src"),
					link: $(d[0]).attr("href")
                })
            }
        });
        f.images.current = 0;
        f.images.next = 1;
        g.remove();
    };
 
    function initializeBillboards(b, c) {
        c.container.append('<li class="primarySlide"></li><li class="secondarySlide"></li>');
        var d = c.container.find("li");
        c.billboard1 = $(d[0]);
        c.billboard2 = $(d[1]).fadeTo(0, 0);
        c.activeBillboard = c.billboard1;
        c.titleBar = $(document.createElement("div")).attr({
            "class": "heroTitle"
        }).html("Title here");
        c.container.append(c.titleBar);
        c.transparent = $(document.createElement("div")).attr("class", "transparent");
        c.container.append(c.transparent);
        c.transparent.click(function (e) {
            var a = c.images[c.images.current].link;
            if (a) document.location.href = c.images[c.images.current].link
        })
    };  

	function readyBillboard(a, b) {		
		b.container.bind("mouseenter mouseleave", function(e) {
			switch (e.type) {
				case "mouseenter": 
				b.pausePresentation = true;
				break;
				case "mouseleave": 
				b.pausePresentation = false;
				break;							
			}
		});
		$("ul.heroLinks li").bind("mouseenter mouseleave click", function(e) { 
			switch (e.type) {
				case "mouseenter": 
				restore();
				$(this).addClass("active").removeClass("inactive");
				b.pausePresentation = true;				
				break;
				case "mouseleave":
				deactivate();
				$('ul.heroLinks li.reserve').removeClass("reserve").addClass("active");		
				$("ul.heroLinks li.click").removeClass("click").addClass("active");
				b.pausePresentation = false;				
				break;
				case "click": 			
                if (b.transitionInProgress) return;				
				deactivate();
				$("ul.heroLinks li.reserve").removeClass("reserve");
				$(this).addClass("active").addClass("click");				
				b.forceNum = $(this).attr("data-index");		
				b.manualTransition = true;
				forceBillboardTransition(a, b);
				b.manualTransition = false;
				b.forceUpdate = true;	
				break			
			}				
		})	
	};

    function runBillboards(a, b) {
        with(b) {
            billboard1.css({
                "background": "url(" + images[images.current].slide + ") no-repeat"
            });
            billboard2.css({
                "background": "url(" + images[images.next].slide + ") no-repeat"
            });
           	titleBar.html(images[images.current].title);
        }
        b.billboardIntervalHandle = setInterval(function () {
            onBillboardTransition(a, b)
        }, a.transitionsInterval)
    };

    function reorderImagePointers(a) {		
        a.current = (a.current == a.length - 1) ? 0 : a.current + 1;			
        a.next = (a.next == a.length - 1) ? 0 : a.next + 1;
		a.previous = a.current - 1;
		deactivate();
		$('ul.heroLinks li[data-index='+a.current+']').addClass("active");
		$('ul.heroLinks li[data-index='+a.previous+']').removeClass("active").addClass("inactive");
		if (a.previous == -1) {
			$("ul.heroLinks li[data-index=3]").removeClass("active").addClass("inactive");
			$("ul.heroLinks li").removeClass("inactive");			
		}	
	};
	
	function reorderForcePointers(a) {
        a.current = (a.current == a.length - 1) ? 0 : a.current + 1;			
        a.next = (a.next == a.length - 1) ? 0 : a.next + 1;
		a.previous = a.current - 1;	
	}
	
    function onBillboardTransition(a, b) {
        with(b) if (transitionInProgress || (pausePresentation && manualTransition == false)) return;			
		var c = (b.activeBillboard == b.billboard1) ? b.billboard2 : b.billboard1;	
        var d = b.activeBillboard;
        c.css({
            "background": "url(" + b.images[b.images.next].slide + ") no-repeat"
        });				
        var w = b.titleBar.width();
        var l = b.titleBar.position().left;
        b.titleBar.animate({
            left: -(l + w + 100) + "px"
        }, a.transitionsLength / 2, function () { 
            b.titleBar.html(b.images[b.images.next].title).css("left", -(b.titleBar.width() + 100) + "px");
            b.titleBar.animate({
                left: l + "px"
            }, a.transitionsLength / 2)
        });
        b.transitionInProgress = true;
        c.fadeTo(a.transitionsLength, 1);
        d.fadeTo(a.transitionsLength, 0, function () {
            b.activeBillboard = c;
			with(b) if (forceUpdate == false) {
	            reorderImagePointers(b.images);				
			} else {
				reorderImagePointers(b.images);
			}
            d.css({
                "background": "url(" + b.images[b.images.current].slide + ") no-repeat"
            });
            b.transitionInProgress = false
        });
    };

    function forceBillboardTransition(a, b) {
		var c = (b.activeBillboard == b.billboard1) ? b.billboard2 : b.billboard1;	
        var d = b.activeBillboard;
        c.css({
            "background": "url(" + b.images[b.forceNum].slide + ") no-repeat"
        });				
        var w = b.titleBar.width();
        var l = b.titleBar.position().left;
        b.titleBar.animate({
            left: -(l + w + 100) + "px"
        }, a.transitionsLength / 2, function () { 
            b.titleBar.html(b.images[b.forceNum].title).css("left", -(b.titleBar.width() + 100) + "px");
            b.titleBar.animate({
                left: l + "px"
            }, a.transitionsLength / 2)
        });
        b.transitionInProgress = true;
        c.fadeTo(a.transitionsLength, 1);
        d.fadeTo(a.transitionsLength, 0, function () {
            b.activeBillboard = c;
            d.css({
                "background": "url(" + b.images[b.forceNum].slide + ") no-repeat"
            });
            b.transitionInProgress = false;
        });
    };

})(jQuery);