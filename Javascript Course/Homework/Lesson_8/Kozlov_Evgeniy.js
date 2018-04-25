function Array(someArray){
  var res;
  var bigString = someArray[0].length;
  
  function filterString(element){
        return element.length==bigString;
          }
        res = someArray.filter(filterString)
  
  for (var i = 1; i < someArray.length; i++) {
    if (someArray[i].length > bigString){ 
        bigString = someArray[i].length;
        res = someArray.filter(filterString);
    }
  }
return res;
}
Array(['aba', 'aa', 'ad', 'vcg', 'aba']);
