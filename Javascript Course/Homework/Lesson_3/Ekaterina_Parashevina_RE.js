function findTitle(str) {
    var regex1 = /<\s*h2[^>]*>(.*?)<\s*\/\s*h2>/g;
    var regex2 = /(<([^>]+)(.*)>)/ig;
    var arr;
	var output = '<ul>';
    while ((arr = regex1.exec(str)) !== null) {
        output += '<li>' +  arr[1].replace(regex2, "") + '</li>';
    }
	output += '</ul>';
    return output;
}
