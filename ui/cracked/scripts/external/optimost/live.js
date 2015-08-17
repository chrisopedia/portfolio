/* OPTIMOST LIVE CODE [start] */
var opContentUrls=new Array();
var opModulesArray=new Array();
var opMetas=document.getElementsByTagName('meta');


/*
*/
/*

*/
if (location.host=="www.ehow.com")
{
	/*for (var opx3=0; opx3<opMetas.length; opx3++)
	{
		if (opMetas[opx3].name=='pagetype' && opMetas[opx3].scheme=='DMINSTR2' && opMetas[opx3].content=='topic')
		{
			(function(){var _o=optimost;_o.U="http://by.optimost.com/trial/335/p/topicpage.585/146/content.js";
			_o.ST="script";_o.SA={"type":"text/javascript"};_o.B();_o.R(1000,null,null,null);})();

			opContentUrls.push('http://by.optimost.com/trial/335/p/topicpage.585/146/content.js');
			opModulesArray.push('topicpagebody');
			break;
		}
	}*/

	/*
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
			_o.ST="script";_o.SA={"type":"text/javascript"};_o.B();_o.R(100,"op335videopagerelatedvideosarticlesgum",
			_o.SLD(),2592000);})();

			opContentUrls.push('http://by.optimost.com/trial/335/p/videopagerelatedvideosarticles.f/123/content.js');
			opModulesArray.push('placeholder');
		}
	}
	*/

	if(document.location.toString().toLowerCase().indexOf('ehow.com/about_')!=-1){
		/*(function(){var _o=optimost;_o.U="http://by.optimost.com/trial/335/p/aboutarticletemplate.faf/134/content.js";
		_o.ST="script";_o.SA={"type":"text/javascript"};_o.B();_o.R(500,"op335aboutarticletemplategum",_o.SLD(
		),2592000);})();
		
		opContentUrls.push('http://by.optimost.com/trial/335/p/aboutarticletemplate.faf/134/content.js');
		opModulesArray.push('aboutarticle');*/
	} else if(document.location.toString().toLowerCase().indexOf('search.aspx')!=-1 && typeof(optimost)=='object' && optimost.Q['Options'] && optimost.Q['Options']==0){
		(function(){var _o=optimost;_o.U="http://by.optimost.com/trial/335/p/searchresultads.5c5/119/content.js";
		_o.ST="script";_o.SA={"type":"text/javascript"};_o.B();_o.R(1000,null,null,null);})();
		
		opContentUrls.push('http://by.optimost.com/trial/335/p/searchresultads.5c5/119/content.js');
		opModulesArray.push('SearchResultAds');
	} else if (document.location.toString().indexOf('/how_')!=-1){
		if(opMetas!=null){
			//for(var opx=0; opx<opMetas.length; opx++)
			//if(opMetas[opx].name.toLowerCase()=='exp_page' && opMetas[opx].scheme.toLowerCase()=='dminstr2' && opMetas[opx].content.toLowerCase()=='eh-reg-3')
			
			//Sub Category Attribute Code
			for(var opx2=0; opx2<opMetas.length; opx2++){
				if(opMetas[opx2].name=='category' && opMetas[opx2].scheme=='DMINSTR2' ){
					var optrial = (typeof(optrial) == "object") ? optrial : new Object;
					optrial.opsubcategory = opMetas[opx2].content;
				}
			}
		}

		if(opMetas!=null){
			for(var opx3=0; opx3<opMetas.length; opx3++){
				if(opMetas[opx3].name=='exp_page' && opMetas[opx3].scheme=='DMINSTR2' ){
					var optrial = (typeof(optrial) == "object") ? optrial : new Object;
					optrial.opPageVersion = opMetas[opx3].content;
				}
			}
		}

		if (optrial.opPageVersion!='undefined' && optrial.opPageVersion!=null && optrial.opPageVersion =='3ColumnOld')
		{
			(function(){var _o=optimost;_o.U="http://by.optimost.com/trial/335/p/articlepagethreecolumnpt2.6e0/99/content.js";
			_o.ST="script";_o.SA={"type":"text/javascript"};_o.B();_o.R(50,"op335articlepagethreecolumnpt2gum",_o.SLD(),2592000);})();
			opContentUrls.push('http://by.optimost.com/trial/335/p/articlepagethreecolumnpt2.6e0/99/content.js');
			opModulesArray.push('placeholder2');
		}
		else if (optrial.opPageVersion!='undefined' && optrial.opPageVersion!=null && optrial.opPageVersion =='3ColumnNew')
		{
			(function(){var _o=optimost;_o.U="http://by.optimost.com/trial/335/p/articlepagethreecolumnpt2.6e0/99/content.js";
			_o.ST="script";_o.SA={"type":"text/javascript"};_o.B();_o.R(20,"op335articlepagethreecolumnpt2gum",_o.SLD(),2592000);})();
			opContentUrls.push('http://by.optimost.com/trial/335/p/articlepagethreecolumnpt2.6e0/99/content.js');
			opModulesArray.push('placeholder2');
		}

		/*if(opMetas!=null){
			for(var opx3=0; opx3<opMetas.length; opx3++){
				if(opMetas[opx3].name=='exp_page' && opMetas[opx3].scheme=='DMINSTR2' && opMetas[opx3].content=='3ColumnOld'){
					(function(){var _o=optimost;_o.U="http://by.optimost.com/trial/335/p/articlepagethreecolumnpt2.6e0/99/content.js";
					_o.ST="script";_o.SA={"type":"text/javascript"};_o.B();_o.R(20,"op335articlepagethreecolumnpt2gum",_o.SLD(),2592000);})();
					opContentUrls.push('http://by.optimost.com/trial/335/p/articlepagethreecolumnpt2.6e0/99/content.js');
					opModulesArray.push('placeholder2');
				}
				else if (opMetas[opx3].name=='exp_page' && opMetas[opx3].scheme=='DMINSTR2' && opMetas[opx3].content=='3ColumnNew')
				{
					(function(){var _o=optimost;_o.U="http://by.optimost.com/trial/335/p/articlepagethreecolumnpt2.6e0/99/content.js";
					_o.ST="script";_o.SA={"type":"text/javascript"};_o.B();_o.R(1000,"op335articlepagethreecolumnpt2gum",_o.SLD(),2592000);})();
					opContentUrls.push('http://by.optimost.com/trial/335/p/articlepagethreecolumnpt2.6e0/99/content.js');
					opModulesArray.push('placeholder2');
				}
			}
		}*/
	

		if (document.location.toString().indexOf('how_')!=-1 && getCookie("op335articlepagethreecolumnpt2gum")!=null && getCookie("op335articlepagethreecolumnpt2gum")=="mvt-no")
		{
			(function(){var _o=optimost;_o.U="http://by.optimost.com/trial/335/p/articlepagehomegarden.173/145/content.js";
			_o.ST="script";_o.SA={"type":"text/javascript"};_o.B();_o.R(50,"op335articlepagehomegardengum",_o.SLD(
			),2592000);})();
			
			opContentUrls.push('http://by.optimost.com/trial/335/p/articlepagehomegarden.173/145/content.js');
			opModulesArray.push('articlehomegarden');
		}
	}
	else if((location.hostname=="dev2.ehow.com" || location.hostname=="staging.ehow.com" || location.hostname=="www.ehow.com") && (location.pathname=="/at-home/")){
		/*(function(){var _o=optimost;_o.U="http://by.optimost.com/trial/335/p/athomeblog.9bd/144/content.js";
		_o.ST="script";_o.SA={"type":"text/javascript"};_o.B();_o.R(1000,null,null,null);})();
		
		opContentUrls.push('http://by.optimost.com/trial/335/p/athomeblog.9bd/144/content.js');
		opModulesArray.push('athomeblog');*/
	}
	else if(location.pathname.toLowerCase() == "/ehow_radlinks_ads.html" && (location.hostname=="local3.ehow.com" || location.hostname=="dev2.ehow.com" || location.hostname=="staging.ehow.com" || location.hostname=="www.ehow.com")){
		/*(function(){var _o=optimost;_o.U="http://by.optimost.com/trial/335/p/relatedadresults.284/120/content.js";
		_o.ST="script";_o.SA={"type":"text/javascript"};_o.B();_o.R(1000,null,null,null);})();

		var opContentUrls=['http://by.optimost.com/trial/335/p/relatedadresults.284/120/content.js'];
		var opModulesArray=['RelatedAdResults'];*/
	}

	if(location.host=="www.ehow.com" && location.pathname=="/"){
		/*(function(){var _o=optimost;_o.U="http://by.optimost.com/trial/335/p/homepage1.c9b/94/content.js";
		_o.ST="script";_o.SA={"type":"text/javascript"};_o.B();_o.R(1000,null,null,null);})();

		opContentUrls.push('http://by.optimost.com/trial/335/p/homepage1.c9b/94/content.js');
		opModulesArray.push('placeholder');*/
	}
}

function getCookie(name) 
{
	var start = document.cookie.indexOf( name + "=" );
	var len = start + name.length + 1;
	if ((!start) && (name != document.cookie.substring(0, name.length)))
	{
		return null;
	}
	if (start == -1) return null;
	var end = document.cookie.indexOf( ";", len );
	if (end == -1) end = document.cookie.length;
	return unescape(document.cookie.substring(len, end));
}
/* OPTIMOST LIVE CODE [end] */