function regExpression(htmlContent) {
  var res = [];
  var regexp = htmlContent.match(/(>)([\w\d\s\-]+)(<\/h2>)/igm);
  for (var i in regexp) {
    res += (regexp[i]);
  }
  return '<ul>' + res.replace(/>\s/g, '<li>' ).replace( /<\/h2>/g, '</li>' ) + '</ul>';
}