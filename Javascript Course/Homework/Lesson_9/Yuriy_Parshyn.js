var string1 = 'aabcc';
var string2 = 'adcaa';
function commomSymbol (string1, string2) {
    var countCommon = 0;
    var reg = /^[a-z]*$/;
    if (reg.test(string1) && reg.test(string2) == true) {
        for (var i = 0; i < string1.length; i++) {
            for (var j = 0; j < string2.length; j++) {
                if (string1[i] == string2[j]) {
                    string1 = string1.slice(1);
                    string2 = string2.slice(1);
                    countCommon++;
                }
            }
        }
        return countCommon;
    }
    else {
        return false;
    }
}
console.log(commomSymbol(string1, string2))
