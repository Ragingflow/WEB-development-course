function fun(htmlContent){

  var regExp = /(<h2.*?\><\/\S+?>)(.*?)(<\/h2?>)/igm;

  var MyArray; 
  var result= '';
  while((MyArray=regExp.exec(htmlContent))!== null){
  result += '<li>'+array[2]+'</li>';
  } 
  return '<ul>'+result+'</ul>';
}

fun(htmlContent);
