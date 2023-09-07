// 1. salvare chilometri da percorrere ed età del passeggero in prompt. Verificare e creare costanti messaggi
// 2. applicare sconto per le varie età
// 3. mandare in stampa resoconto

// 1.
const travelKm = prompt ('Quanti chilometri devi percorrere?');
const age = prompt ('Quanti anni hai?');
const priceKm = 0.21;
const priceTicket = (travelKm * priceKm);


// messages
let message = `Il prezzo del biglietto è di ${priceTicket}€`
let error;


// verify
if(isNaN(age && travelKm)){
  error = 'Errore! Non hai inserito un numero';
}


// 2.
let saleUnder = (priceTicket - priceTicket *20 / 100)
let saleOver = (priceTicket - priceTicket *40 /100)


if(age < 18){
  messageUnder = (`Il prezzo del biglietto per l'utente under-18 è di ${saleUnder}€`);
} else if(age > 64){
  messageOver = (`Il prezzo del biglietto per l'utente over-64 è di ${saleUnder}€`);
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
