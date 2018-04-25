function getUnorderedList(string) {
  var re = /<h2.*?>(<\/\S>(.*?))<\/h2>?/gim;
  var arr = [];
  var matches = 0;
  var result = '';
  try {
    matches = string.match(re).length;
  } catch (e) {
    console.log(e.message);
  }
  for (var i = 0; i < matches; i++) {
    arr.push(re.exec(string)[2]);
  }
  for (var j = 0; j < arr.length; j++) {
    result += '<li>' + arr[j] + '</li>';
  }
  return result.length > 0 ? '<ul>' + result + '</ul>' : '';
}
