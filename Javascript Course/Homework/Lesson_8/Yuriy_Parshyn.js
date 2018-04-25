var arr = ["abc", "eeee", "abcd", "dcd"];
var arr1 = ["a", "abc", "cbd", "zzzzzz", "abcdef", "aaaaaa"];
var arr2 = ["aba", "aa", "ad", "vcd", "aba"];
var arr3 = ['aa'];
function maxLengthWords (arr) {
            var maxElement = 0;
            arr = arr.sort(function(a,b) {
                        return a.length - b.length;
            });
            if (arr.length == 1) {
                 return arr;
            }
            maxElement = arr.reduce(function(a, b) {
                if (a.length > b.length) {
                    return a.length;
                }
                else {
                    return b.length;
                }
    });
            var newArr = [];
            for (var i = 0; i < arr.length; i++) {
                    if (arr[i].length == maxElement){
                            newArr.push(arr[i]);
                        }
                }
            return newArr;
        }
console.log(maxLengthWords(arr2));
