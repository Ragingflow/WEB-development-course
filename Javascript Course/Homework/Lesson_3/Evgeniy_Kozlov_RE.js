function String (htmlContent){
  var reg = /<h2.*?><a\s.*?><.*?>.*?<.*?><.*?>\s(.*?)<.*?>/img;
  var arr;
  var res = '';
  var list;
  while ((arr = reg.exec(htmlContent))!==null ) {
    res += '<li>' + arr[1] + '</li>';
  }
  return list = '<ul>' + res + '</ul>';
}
String (htmlContent);
