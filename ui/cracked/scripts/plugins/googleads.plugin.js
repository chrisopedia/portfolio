var googleAds = function() {
	var self = googleAds;
	/*** TEMPLATE ***/
	var templateCache = {};
	var template = function tmpl(tmp, data){
		var fn = !/\W/.test(template) ?
			templateCache[template] = templateCache[template] ||
			tmpl(tmp) :
			new Function("obj",
			"var p=[],print=function(){p.push.apply(p,arguments);};" +
			"with(obj){p.push('" +
			tmp
			.replace(/[\r\t\n]/g, "")
			.split("{!").join("\t")
			.replace(/((^|!})[^\t]*)'/g, "$1\r")
			.replace(/\t=(.*?)!}/g, "',$1,'")
			.split("\t").join("');")
			.split("!}").join("p.push('")
			.split("\r").join("\\'")
			+ "');}return p.join('');");
		return data ? fn( data ) : fn;
	};
	/*** END TEMPLATE ***/

	window.google_ad_num = 0;
	var _ads = [];
	var _currentIndex = -1;
    var apostrophe1 = /'/ig;
    var apostrophe2 = /&#39;/ig;

	var clean = function(str) {
		return str.replace(/"/ig, "&quot;");
	}

	var extend = function(obj, defaults) {
		for (var item in defaults) {
			if (!obj[item]) obj[item] = defaults[item];
		}
		return obj;
	}

	var getCurrentAd = function() {
		return (_currentIndex < _ads.length)?_ads[_currentIndex]:false;
	}

	var renderAd = function() {
		var currentAd = getCurrentAd();
		if (!currentAd) return;
		document.write('<script>');
		for (var item in currentAd) {
			if (typeof currentAd[item] !== "function" && typeof currentAd[item] !== "object") {
				//console.log("var " + item + " = '" + currentAd[item]+"';");
				document.write("var " + item + " = '" + currentAd[item]+"';");
			}
		}
		document.write("google_skip = google_ad_num;");
		document.write('</script>');
		document.write('<script src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>'); 
	}

	window.google_radlink_request_done = function(radlinks) {

		if (radlinks.length == 0) return;
		var currentAd = getCurrentAd();
		if (!currentAd) return;

		var adElement = document.getElementById(currentAd.adUnitId);
		var tmp;
		if (googleAds.preRender) 
			tmp = googleAds.preRender(currentAd) || currentAd.template;


		var radlinkTokens = radlinks[0].radlink_token;
		for(i=1; i<radlinks.length; i++) {
			radlinkTokens += "|"+radlinks[i].radlink_token;
		}

		var radlinkTerms = radlinks[0].term;
		for(i=1; i<radlinks.length; i++) {
			radlinkTerms += "|"+radlinks[i].term;
		}

		tmp = tmp || googleAds.templates.relatedAds;
		adElement.innerHTML = template(tmp, { ads: radlinks, currentAd: currentAd, terms: radlinkTerms, tokens: radlinkTokens });

		_currentIndex++;
		renderAd();
	}

	window.google_ad_request_done = function(ads) {
		if (ads.length == 0) return;
		var currentAd = getCurrentAd();
		if (!currentAd) return;

		var type = ads[0].type;
		var adElement = document.getElementById(currentAd.adUnitId);
		var tmp = (currentAd.templates && currentAd.templates[type])?currentAd.templates[type]:googleAds.templates[type];
		if (googleAds.preRender) 
			tmp = googleAds.preRender(currentAd);

		adElement.innerHTML = template(tmp, { ads: ads, currentAd: currentAd, clean: clean});

		window.google_ad_num += ads.length;

		_currentIndex++;	
		renderAd();
	}

	return {
		addAdUnit: function(obj) {
			obj = extend(obj, this.defaults);
			_ads.push(obj);
		},
		render: function() {
			_currentIndex = 0;
			renderAd();
		},
		addAdUnits: function(adUnits) {
			for (var i = 0; i < adUnits.length; i++) {
				this.addAdUnit(adUnits[i]);
			}
			this.render();
		},
		defaults: {
			google_ad_type: 'text_image_flash',
			google_ad_output: 'js',
			google_safe: 'high',
			google_abtest: 'false',
			google_ad_test: 'off',
			google_ad_section: 'default',
			google_encoding: 'utf8',
			google_language: 'en'
		},
		templates: {
			text: '<div class="GoogleTextAd">\
					<ul>\
					{! for (var i = 0; i < ads.length; i++) { !}\
						<li class="Ad hproduct">\
							<a rel="nofollow" target="_blank" href="{!= ads[i].url !}" title="go to {!= clean(ads[i].visible_url) !}" class="title">\
								<span class="fn">{!= ads[i].line1 !}</span>\
							</a>\
							<a rel="nofollow product" target="_blank" href="{!= ads[i].url !}" title="go to {!= clean(ads[i].visible_url) !}" class="baseurl url">\
								{!= ads[i].visible_url !}\
							</a>\
							<p class="copy description">{!= ads[i].line2 !} {!= ads[i].line3 !}</p>\
						</li>\
					{! } !}\
					</ul>\
					<a class="header" href="{!= google_info.feedback_url !}">Ads by Google</a>\
				</div>',
			image: '<div class="GoogleImageAd"> \
						<a href="{!= ads[0].url !}" title="go to {!= clean(ads[0].visible_url) !}" target="_blank" class="Ad" >\
							<img src="{!= ads[0].image_url !}" width="{!= ads[0].image_width !}" height="{!= ads[0].image_height !}" border="0" />\
						</a> \
						<a class="header" href="{!= google_info.feedback_url !}">Ads by Google</a> \
					</div>',
			flash: '<div class="GoogleFlashAd">\
						<div class="Ad">\
							<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="{!= ads[0].image_width !}" height="{!= ads[0].image_height !}"><param name="movie" value="{!= ads[0].image_url !}"><param name="quality" value="high"><param name="AllowScriptAccess" value="never"><embed src="{!= ads[0].image_url !}" width="{!= ads[0].image_width !}" height="{!= ads[0].image_height !}" type="application/x-shockwave-flash" AllowScriptAccess="never" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed></object>\
						</div>\
						<a class="header" href="{!= google_info.feedback_url !}">Ads by Google</a> \
					</div>',
			relatedAds: '<ul class="RelatedAds"> \
							{! for (var i = 0; i < ads.length; i++) { !}\
								<li class="hproduct"> \
									<a href="/ehow_radlinks_ads.html?\
									term={!= ads[i].url_escaped_term !}\
									&channel={!= currentAd.google_ad_channel !}\
									&google_rt={!= ads[i].radlink_token !}\
									&google_kw_type=radlinks\
									&google_rts={!= tokens !}\
									&radkws={!= encodeURIComponent(terms) !}\
									&google_page_url={!= encodeURIComponent(currentAd.google_page_url) !}\
									{! if (currentAd.metaData) { \
										for (var meta in currentAd.metaData) { !}\
											&{!= meta !}={!= encodeURIComponent(currentAd.metaData[meta]).replace("%20", "+") !}\
										{! } \
									} !}" \
									class="ad category url">\
										<span class="fn">{!= ads[i].term !}</span></a></li>\
							{! }!} \
						</ul>'
		}
	}
}();
