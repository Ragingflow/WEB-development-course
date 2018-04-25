function getList(str) { 
	var str = str.match(/[^ >][\w ]+<\/h2>/g).join(',').replace(/<\/h2>/g,'').split(',');
	var list = '<ul>';
	for(var i = 0; i < str.length; i++) {
		list += '<li>' + str[i] + '</li>';
	}
	list += '</ul>';
	
	return list;
}