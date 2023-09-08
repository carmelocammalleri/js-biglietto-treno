// 1. salvare chilometri da percorrere ed età del passeggero in prompt. Verificare e creare costanti messaggi
// 2. applicare sconto per le varie età
// 3. mandare in stampa resoconto

// 1.
const travelKm = parseInt (prompt ('Quanti chilometri devi percorrere?'));
const age = parseInt (prompt ('Quanti anni hai?')) ;
const priceKm = 0.21;
const priceTicket = (travelKm * priceKm);


// messages
let message = `Il prezzo del biglietto è di ${priceTicket.toFixed(2)}€`
let error;
let insertOk = true


// verify
if(isNaN(age || travelKm)){
  let insertOk = false
}


// 2.
if(age < 18){
  saleUnder = (priceTicket - priceTicket *20 / 100);
  messageUnder = (`Il prezzo del biglietto per l'utente under-18 è di ${saleUnder.toFixed(2)}€`);
} else if(age > 64){
  saleOver = (priceTicket - priceTicket *40 /100)
  messageOver = (`Il prezzo del biglietto per l'utente over-64 è di ${saleUnder.toFixed(2)}€`);
}


//3.
const elementOutput = document.getElementById('output');

if(age < 18){
  elementOutput.innerHTML = messageUnder;
} else if (age > 64){
  elementOutput.innerHTML = messageOver;
} else if (18< age <64){
  elementOutput.innerHTML = message;
}





console.log(message);
