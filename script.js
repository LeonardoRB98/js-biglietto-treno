// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere
var km = parseInt(prompt("chilometri da percorrere"));
console.log(km);
// l'età del passeggero
var age = parseInt(prompt("passenger age"));
console.log(age);
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio,
// il prezzo del biglietto è definito in base ai km (0.21 € al km);
totalNoDiscount = km * 0.21;
console.log(totalNoDiscount);
// va applicato uno sconto del 20% per i minorenni;
// va applicato uno sconto del 40% per gli over 65.
if (age < 18) {
  totalNoDiscount = (totalNoDiscount * 20) / 100;
  console.log(totalNoDiscount);
} else if (age > 65) {
  totalNoDiscount = (totalNoDiscount * 40) / 100;
  console.log(totalNoDiscount);
}
else {

}
document.getElementById('prezzo_biglietto').innerHTML = totalNoDiscount;
