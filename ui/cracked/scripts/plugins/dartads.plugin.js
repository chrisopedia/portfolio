var dartAds = function() {
	var perfTest = (window.location.search.indexOf("perftest=true") != -1);
	var _page = {};
	var _params = [];
	var _tile = 1;
	var _ord;
	var _deferredAds = {};

	var generateUrl = function(params, iframe) {
		var url = [];
		url.push((_public.defaults.currentCulture == "en-us")?_public.defaults.server:_public.defaults.serverUk);
		url.push((iframe)?"adi":"adj");
		url.push("/");
		url.push((_public.defaults.currentCulture == "en-us")?_public.defaults.siteCode:_public.defaults.siteCodeUk);
		url.push("/"+_page+";");
		
		for (var pi=0;pi<params.length;pi++) {
			var item = params[pi];
			for (param in item) {
				if (typeof item[param] === 'object') {
					for (var i = 0; i < item[param].length; i++) {
						url.push(param+"="+item[param][i]+";");
					}
				} else {
					if(perfTest && param=="cat") item[param]="perftest";
					else if(perfTest && param=="scat") item[param]="perftest";
					else if(perfTest && param=="sscat") item[param]="perftest";
					url.push(param+"="+item[param]+";");
				}
			}
		}
		if (typeof quantSegs !== "undefined" && quantSegs.length > 0)
			url.push(quantSegs+";");
		if (typeof segQS !== "undefined" && segQS.length > 0)
			url.push(segQS);
	
		url.push("tile="+_tile+";");
		url.push("ord="+_ord+"?");
		return url.join('');
	}
	


	var _public = {
		getAdUrl: function(params, iframe) {

			var p = [];
		
			for(var i=0;i<_params.length;i++) {
				p.push(_params[i]);
			}
			for(var i=0;i<params.length;i++) {
				p.push(params[i]);
			}
			
			var url = generateUrl(p, (iframe));
			return url;
		},
		getAd: function(params, width, height) {
			var iframe = (width && height);
					
			var url = this.getAdUrl(params, iframe);
			var adCall;
			if (!iframe) {
				adCall = '<center><scr'+'ipt type="text/javascript" src="'+url+'"><\/script></center>';
			} else {
				adCall = '<iframe src="'+url+'" width="'+width+'" height="'+height+'" marginwidth="0" marginheight="0" frameborder="0" scrolling="no"></iframe>';
				//_deferredAds[target] = { url: url, width: width, height: height };
			}
			return adCall;
		},
		setParams: function(page, params) {
			_page = page;
			_params = params;
			_ord = Math.floor(Math.random()*10000000000000);
		},
		renderAd: function(params, width, height) {
			if (!_page || !_params) return;
			
			var ad = this.getAd(params, width, height);
	
			document.write(ad);

			_tile++;
			
		},
		renderAdElements: function(nodes) {
			for (var i = 0; i < nodes.length; i++) {
				var node = nodes[i];
				var size = eval(node.getAttribute("data-dartAdSize"));
				var params = eval(node.getAttribute("data-dartAdParams"));
				if (node.getAttribute("data-dartCompanion") == "1") {
					var adUrl = this.getAdUrl(params, false);
					window.adaptvCompanionAdTag = adUrl;
				} else {
					var ad = this.getAd(params, size[0], size[1]);
					node.innerHTML = ad;
				}
			}
		},
		defaults: {
			server: 'http://ad.doubleclick.net/',
			serverUk: 'http://ad.uk.doubleclick.net/',
			siteCode: 'dmd.ehow',
			siteCodeUk: 'dmd.ehowuk',
			currentCulture: 'en-us'
		}
	}
	return _public;
}();



