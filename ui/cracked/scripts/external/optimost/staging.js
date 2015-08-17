/* OPTIMOST STAGING CODE [start] */

var opContentUrls=new Array();
var opModulesArray=new Array();
var opMetas=document.getElementsByTagName('meta');

for (var opx3=0; opx3<opMetas.length; opx3++)
{
	if (opMetas[opx3].name=='pagetype' && opMetas[opx3].scheme=='DMINSTR2' && opMetas[opx3].content=='topic')
	{
		(function(){var _o=optimost;_o.U="http://by.optimost.com/trial/335/p/topicpage.585/146/content.js";
		_o.ST="script";_o.SA={"type":"text/javascript"};_o.B();_o.R(1000,null,null,null);})();

		opContentUrls.push('http://by.optimost.com/trial/335/p/topicpage.585/146/content.js');
		opModulesArray.push('topicpagebody');
		break;
	}
}

for(var opx=0; opx<opMetas.length; opx++){
	if(opMetas[opx].name=='exp_page' && opMetas[opx].scheme=='DMINSTR2' && opMetas[opx].content=='eh-reg-1'){
		//Sub Category Attribute Code
		for(var opx2=0; opx2<opMetas.length; opx2++){
			if(opMetas[opx2].name=='category' && opMetas[opx2].scheme!='DMINSTR2' ){
				var optrial = (typeof(optrial) == "object") ? optrial : new Object;
				optrial.opsubcategory = opMetas[opx2].content;
			}
		}

		(function(){var _o=optimost;_o.U="http://by.optimost.com/trial/335/p/videopagerelatedvideosarticles.f/123/content.js";
		_o.ST="script";_o.SA={"type":"text/javascript"};_o.B();_o.R(1000,null,null,null);})();

		opContentUrls.push('http://by.optimost.com/trial/335/p/videopagerelatedvideosarticles.f/123/content.js');
		opModulesArray.push('placeholder');
	}
}

if(document.location.toString().toLowerCase().indexOf('ehow.com/about_')!=-1){
	(function(){var _o=optimost;_o.U="http://by.optimost.com/trial/335/p/aboutarticletemplate.faf/134/content.js";
	_o.ST="script";_o.SA={"type":"text/javascript"};_o.B();_o.R(1000,"op335aboutarticletemplategum",_o.SLD(
	),2592000);})();
	
	opContentUrls.push('http://by.optimost.com/trial/335/p/aboutarticletemplate.faf/134/content.js');
	opModulesArray.push('aboutarticle');
} else if(location.pathname.toLowerCase() == "/ehow_radlinks_ads.html" && (location.hostname=="local3.ehow.com" || location.hostname=="dev2.ehow.com" || location.hostname=="staging.ehow.com" || location.hostname=="www.ehow.com")){
	(function(){var _o=optimost;_o.U="http://by.optimost.com/trial/335/p/relatedadresults.284/120/content.js";
	_o.ST="script";_o.SA={"type":"text/javascript"};_o.B();_o.R(1000,null,null,null);})();

	var opContentUrls=['http://by.optimost.com/trial/335/p/relatedadresults.284/120/content.js'];
	var opModulesArray=['RelatedAdResults'];
} else if(document.location.toString().indexOf('how_')!=-1){
	if(opMetas) {
		/*for(var opx=0; opx<opMetas.length; opx++){
			if(opMetas[opx].name=='exp_page' && opMetas[opx].content.toLowerCase().indexOf('-reg')!=-1){
				(function(){var _o=optimost;_o.U="http://by.optimost.com/trial/335/p/articlepagesmvt.603/92/content.js";
				_o.ST="script";_o.SA={"type":"text/javascript"};_o.B();_o.R(1000,null,null,null);})();
				
				opContentUrls.push('http://by.optimost.com/trial/335/p/articlepagesmvt.603/92/content.js');
				opModulesArray.push('placeholder');
				*/
				//Sub Category Attribute Code
				for(var opx2=0; opx2<opMetas.length; opx2++){
					if(opMetas[opx2].name=='category' && opMetas[opx2].scheme=='DMINSTR2' ){
						var optrial = (typeof(optrial) == "object") ? optrial : new Object;
						optrial.opsubcategory = opMetas[opx2].content;
					}
				}
				if (getQueryString("ophomegarden")=="true")
				{
					(function(){var _o=optimost;_o.U="http://by.optimost.com/trial/335/p/articlepagehomegarden.173/145/content.js";
					_o.ST="script";_o.SA={"type":"text/javascript"};_o.B();_o.R(1000,null,null,null);})();
			
					opContentUrls.push('"http://by.optimost.com/trial/335/p/articlepagehomegarden.173/145/content.js');
					opModulesArray.push('articlehomegarden');
				}
				else
				{
					(function(){var _o=optimost;_o.U="http://by.optimost.com/trial/335/p/articlepagethreecolumnpt2.6e0/99/content.js";
					_o.ST="script";_o.SA={"type":"text/javascript"};_o.B();_o.R(1000,null,null,null);})();
				
					opContentUrls.push('http://by.optimost.com/trial/335/p/articlepagethreecolumnpt2.6e0/99/content.js');
					opModulesArray.push('placeholder2');
				}

			//}
		//}
	}
} else if(document.location.toString().toLowerCase().indexOf('search.aspx')!=-1 && typeof(optimost)=='object' && optimost.Q['Options'] && optimost.Q['Options']==0){
	(function(){var _o=optimost;_o.U="http://by.optimost.com/trial/335/p/searchresultads.5c5/119/content.js";
	_o.ST="script";_o.SA={"type":"text/javascript"};_o.B();_o.R(1000,null,null,null);})();
	
	opContentUrls.push('http://by.optimost.com/trial/335/p/searchresultads.5c5/119/content.js');
	opModulesArray.push('SearchResultAds');
} else if(location.hostname + location.pathname == "staging.ehow.com/"){
	(function(){var _o=optimost;_o.U="http://by.optimost.com/trial/335/p/metatagtest1.c2f/95/content.js";
	_o.ST="script";_o.SA={"type":"text/javascript"};_o.B();_o.R(1000,null,null,null);})();

	opContentUrls.push('http://by.optimost.com/trial/335/p/articlepagesmvt.603/92/content.js');
	opModulesArray.push('metamod');
}
else if((location.hostname=="dev2.ehow.com" || location.hostname=="staging.ehow.com" || location.hostname=="www.ehow.com") && (location.pathname=="/at-home/")){
	(function(){var _o=optimost;_o.U="http://by.optimost.com/trial/335/p/athomeblog.9bd/144/content.js";
	_o.ST="script";_o.SA={"type":"text/javascript"};_o.B();_o.R(1000,null,null,null);})();
	
	opContentUrls.push('http://by.optimost.com/trial/335/p/athomeblog.9bd/144/content.js');
	opModulesArray.push('athomeblog');
}
else if(location.pathname.toLowerCase() == "/ehow_radlinks_ads.html" && (location.hostname=="local3.ehow.com" || location.hostname=="dev2.ehow.com" || location.hostname=="staging.ehow.com" || location.hostname=="www.ehow.com")){
	(function(){var _o=optimost;_o.U="http://by.optimost.com/trial/335/p/relatedadresults.284/120/content.js";
	_o.ST="script";_o.SA={"type":"text/javascript"};_o.B();_o.R(1000,null,null,null);})();

	var opContentUrls=['http://by.optimost.com/trial/335/p/relatedadresults.284/120/content.js'];
	var opModulesArray=['RelatedAdResults'];
}

if((location.host=="local3.ehow.com" || location.host=="staging.ehow.com") && location.pathname=="/how_4421211_be-prepared-plumbing-emergency.html"){
	(function(){var _o=optimost;_o.U="http://by.optimost.com/trial/335/p/articlepageintellitxttag.0aa/126/content.js";
	_o.ST="script";_o.SA={"type":"text/javascript"};_o.B();_o.R(1000,null,null,null);})();

	opContentUrls.push('http://by.optimost.com/trial/335/p/articlepagesmvt.603/92/content.js');
	opModulesArray.push('intellitxt');
}

if(location.host=="www.ehow.com" && location.pathname=="/"){
	(function(){var _o=optimost;_o.U="http://by.optimost.com/trial/335/p/homepage1.c9b/94/content.js";
	_o.ST="script";_o.SA={"type":"text/javascript"};_o.B();_o.R(1000,null,null,null);})();

	opContentUrls.push('http://by.optimost.com/trial/335/p/homepage1.c9b/94/content.js');
	opModulesArray.push('placeholder');
}


function getQueryString(key, default_)
{
  if (default_==null) default_="";
  key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regex = new RegExp("[\\?&]"+key+"=([^&#]*)");
  var qs = regex.exec(window.location.href);
  if(qs == null)
    return default_;
  else
    return qs[1];
}

/* OPTIMOST STAGING CODE [end] */