/*
	dlabs
	
	addLoadEvent.js
		Replaces userAction.js in delay loading scripts.  Executes scripts at window.load in order of priority with lowest number executed first.  Defaults to a priority of 3 if none passed.
		
	Usage:
		Enclose the function you wish to call in function(){} and add a priority (if different from 3) to call the function.
		
	Priorities:
		Priorities should be a value between 1-5 inclusive, the lowest being highest priority.  Examples of high prorities would be lazy image loading (1).  Low priorities would be intellitext(4), addthis (5), facebooklike (5).  A value of 3 is considered average and loaded by default.
	
			
	Examples:
		addLoadEvent(function(){coolstuff();}, 3);
		addLoadEvent(function(){
			$('.featuredItems').onVisible({callback: function() {
				$('.featuredItemImage img',this).lazyImage();
			}});
		}, 1);
		
		onVisible() will be executed first before coolstuff()
		
		addLoadEvent also accepts $.getScript and callback functions -
		
		addLoadEvent(
			'script.js',
			function(){alert("script.js loaded!");},
			1
		);
		
*/

(function(){
	var queue = [];
	 
	window.addLoadEvent = function(fn, priority) {
		if (typeof priority == "function") {
			var cb = priority
			priority = arguments[2];
		}
		if (priority==undefined) { priority = 3; }
		queue.push({
			fn: fn,
			priority: priority,
			cb: cb
		});
	}
	var fireEvents = function() {
		sortQueue();
		for(var i=0; i<queue.length; i++) {
			if (typeof queue[i].fn == "string") $.getScript(queue[i].fn, queue[i].cb);
			else queue[i].fn();
		}
	}
	var sortQueue = function() {
		queue.sort(function(a, b) {
			return a.priority - b.priority;
		});
	}
	$(window).load(fireEvents);
})();