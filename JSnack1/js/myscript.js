var n = 0;
var sum = 0;
var n2 = 0;

for(i = 0; i < 5; i++){
  n = parseInt(prompt("Inserisci il numero: " + (i+1)));
  sum += n;
}
console.log(sum);

var j = 0;
var sum2 = 0;
while(j < 5){
  n2 = parseInt(prompt("Inserisci il numero: " + (j+1)));
  sum2 += n2;
  j++;
}

console.log(sum2);