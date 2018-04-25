var arr = [6, 2, 8, 3];
function countNumber(arr) {
    function compare(a,b) {
        return a - b;
    }
    arr = arr.sort(compare);
    var newArr = [];
    for(var i = arr[0]; i <= arr[arr.length-1]; i++) {
        newArr.push(i);
    }
    return newArr.length - arr.length;
}
console.log(countNumber(arr));
