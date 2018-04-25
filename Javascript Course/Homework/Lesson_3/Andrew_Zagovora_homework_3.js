function arrToUl(n){
	var result = '';
	var reg = /(<h2.*?><\/\S>(.*?)<\/h2?>)/igm;
	var arr;

	while((arr=reg.exec(n)) != null){
		result += '<li>'+arr[2]+'</li>';
	} 
document.write('<ul>'+result+'</ul>');
}