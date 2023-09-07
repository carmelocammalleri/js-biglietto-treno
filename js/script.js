// 1. salvare chilometri da percorrere ed età del passeggero in prompt. Verificare e creare costanti messaggi
// 2. applicare sconto per le varie età
// 3. mandare in stampa resoconto

// 1.
const travelKm = prompt ('Quanti chilometri devi percorrere?');
const age = prompt ('Quanti anni hai?');
const priceKm = 0.21;
const priceTicket = (travelKm * priceKm);

// messages
let message = `Il prezzo del biglietto è di ${priceTicket}`
let error;

// verify
if(isNaN(age && travelKm)){
  error = 'Errore! Non hai inserito un numero';
}

// 2.
let saleUnder = (priceTicket - priceTicket *20 / 100)
let saleOver = (priceTicket - priceTicket *40 /100)

if(age < 18){
  console.log (`Il prezzo del biglietto per l'utente under-18 è di ${saleUnder}`);
} else if(age > 64){
  console.log (`Il prezzo del biglietto per l'utente uover-65 è di ${saleOver}`);
}

//3.





document.getElementById
console.log(message);
