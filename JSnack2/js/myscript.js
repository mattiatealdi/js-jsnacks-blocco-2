var int = parseInt(prompt("Inserisci un numero intero: "));

if(!(int%2)){
  console.log("Il numero " + int + " è pari");
}else{
  console.log("Il numero " + int + " è dispari " + (int + 1) + " è pari");
}