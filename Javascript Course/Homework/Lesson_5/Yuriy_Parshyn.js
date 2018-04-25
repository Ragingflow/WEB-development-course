var arr = [1, 1, 3, 2];
function compareNumber(arr) {
    var countFlag = 0;
    for (var i = 1; i < arr.length; i++) {
        var currentElement = arr[i-1];
        var nextElement = arr[i];
        if (currentElement != nextElement) {
            arr.splice(i, 1);
            countFlag++;
            if (countFlag > 1) {
                return false;
            }
        }
    }
    return true;
}
console.log(compareNumber(arr));
