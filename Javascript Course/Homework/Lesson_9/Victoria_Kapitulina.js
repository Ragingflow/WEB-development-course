function commonSymbols(str1, str2) {
    var re = /[^a-z]+/g;

    var sortedStr1 = str1.split('').sort();
    var sortedStr2 = str2.split('').sort();
    var common = 0;
    var i = 0;
    var j = 0;

    if (re.test(str1) || re.test(str2)) {
        return false;
    }
    while (i < sortedStr1.length && j < sortedStr2.length) {
        if (sortedStr1[i] === sortedStr2[j]) {
            common++;
            i++;
            j++;
        } else if (sortedStr1[i] < sortedStr2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return common;
}

var string1 = 'aabcc';
var string2 = 'adcaa';

commonSymbols(string1, string2);