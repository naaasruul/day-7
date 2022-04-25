function myfunction(num){
var sum = 0;
var min = num[0];
var max = num[0];
var avg ;

for(i=0; i<num.length; i++){//<-----| LOOPING
  sum += num[i]; //------------------|
}
avg = sum/num.length;

// MINIMUM & MAXIMUM SECTION
//[20, 10, 30, 40, 15] = [10, 40, 23]
for(i=0; i<num.length; i++){
  if(num[i] < min){
    min = num[i];
    }
  else if(num[i] > max){
    max = num[i];
    }
}

return [min,max,avg]; 
// MINIMUM END SECTION
}

console.log(myfunction([10, 5, 20, 15, 30]))
