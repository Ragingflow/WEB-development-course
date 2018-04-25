var array = [5, 4, 26, 35];
function compare(a,b) {return a - b};
function fun(array){

    var sortArray = array.sort(compare);
    var count = [];
    for (var i = sortArray[0]; i <= sortArray[sortArray.length-1]; i++){
        count.push(i);
       }
   // console.log(count);
    return count.length - sortArray.length;
};
 
fun(array);

