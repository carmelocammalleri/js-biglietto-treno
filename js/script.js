// 1. salvare chilometri da percorrere ed età del passeggero in prompt
// 2. applicare sconto per le varie età
// 3. calcolare prezzo biglietto
// 4. mandare in stampa resoconto

// 1.
const travelKm = prompt ('Quanti chilometri devi percorrere?');
const age = prompt ('Quanti anni hai?');
const priceKm = 0.21;
const priceTicket = (travelKm * priceKm);

let message = `Il prezzo del biglietto è di ${priceTicket}`
let error;


if(isNaN(age && travelKm)){
  error = 'Errore! Non hai inserito un numero';
}


// 2.
if(age < 18){
  console.log ('Utente ha 20% di sconto')
}else (age > 64)


document.getElementById
console.log(error);
