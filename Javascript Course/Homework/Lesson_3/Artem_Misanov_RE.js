function getH2Inner(text) {
  var regExpFilter = /<h2>*.*?<\/a>(.*?)<\/h2>/g;
  var result = [];
  var curHtml = '<ul>' + '\n';

  while ((result = regExpFilter.exec(text)) != null) {
    curHtml += '<li>' + result[1] + '</li>' + '\n';
  }
  
  curHtml += '</ul>';
  
  console.log(curHtml);
  return curHtml;
}
getH2Inner(htmlContent);