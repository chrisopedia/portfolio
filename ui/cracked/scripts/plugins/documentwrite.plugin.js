var dwrite = function(){
	var elements = document.all || document.getElementsByTagName('*'),
		buffer = Array.prototype.slice.call(arguments);
	buffer.unshift('<span>');
	buffer.push('</span>');
	var $html = $(buffer.join('')),
		$scripts = $html.siblings('script');
	if ($scripts.length)
		$scripts.appendTo('head');
	elements[elements.length - 1].parentNode.innerHTML += $html.html();
};