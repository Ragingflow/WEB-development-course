function regExp(someString){
 var reg = /<h2\s.*?><\/\S>\s(.*?)<\/h2?>/gm;
 var arr; 
 var result= '';
while((arr=reg.exec(someString))!== null){
  result += '<li>'+arr[1]+'</li>';
} 
 return '<ul>'+result+'</ul>';
}
regExp(htmlContent);
