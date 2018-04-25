function luckyTicket(n){
var v = n;
var b= [];
var k=[];
var half = v.length/2;



 if( v.length%2==0 || v.length<8){
  
   
for(var i=0; i<v.length; i++){
  b[i]=parseInt(v[i]);
  }

for (i=0;i<half;i++) { 
k[i] = b.pop(); 
} 

 
function adder(a, b){return a+b};

k=k.reduce(adder);
b=b.reduce(adder);

 
if(b===k){
  return  true;
}else{
  return false
}


}else{
  alert('Please,try again');
   
}
}

