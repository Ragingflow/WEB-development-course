function lookingH2 (htmlContent) {
	var re = /<h2.*?>([^<]*?)<\/h2>/igm;
	var h2Tag;
	var stringData = [];
	var res = '';
	for (var i = 0; (h2Tag = re.exec(htmlContent)) !== null; i++) {
		stringData[i] = h2Tag[1];
}
 	for(var k in stringData){
 	  res += '<li>'+stringData[k]+'</li>';
 	}
 	return '<ul>'+res+'</ul>';
}
lookingH2(htmlContent)
