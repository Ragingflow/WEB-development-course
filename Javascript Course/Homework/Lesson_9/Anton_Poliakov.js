var string1 = "aabccsfeewwqq";
var string2 = "adcaawffeewerwerrr";

function getSimilar(string1, string2) {
  var count = 0;
  for (var i = 0; i < string1.length; i++) {
    for (var j = 0; j < string2.length; j++) {
      if (string1[i] === string2[j]) {
        string2 = string2.replace(string1[i], '');
        count++;
      }
    }
  }
  return count;
}

getSimilar(string1, string2);
