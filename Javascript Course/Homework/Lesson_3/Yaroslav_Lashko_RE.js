// The function takes a string with an html code and returns the text content of the h2 tags in the html list or false;
function searchH2TagContent(stringHtml) {
	var re = /<h2.*?>(((<.*?)*?<\/?\w*>(?!<))?([^<]*)(.*?))<\/h2>/igm;
	var h2Content;
	var result = "";
	for (var i = 0; (h2Content = re.exec(stringHtml)) !== null; i++) {
		result += "<li>" + h2Content[4].trim() + "</li>";
	}
	if (result !== "") {
		result = "<ul>".concat(result, "</ul>");
	} else {
		result = false;
	}
	return result;
}
