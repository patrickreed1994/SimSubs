var elements = document.getElementsByTagName(*);

for (var i = 0; i<elements.length; i++){
	var element = elements[i];

	for (var j = 0; i < element.childNodes.length; i++){
		var node = element.childNodes[j];

		if(node.nodeType === 3){
			var text = node.nodeValue;
			var replacedText = text.replace("Millenials", 'Snakes');

			if(replacedText !== text){
				element.replaceChild(document.createTextNode(replacedText), node);
			}

		}
	}
}