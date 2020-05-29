// //// Palindroma
// // Chiedere all’utente di inserire una parola
// // Creare una funzione per capire se la parola inserita è palindroma
//
// // Chiedo all'utente una parola
// var parolaUtente = prompt('Inserisci una parola');
// while ( !(isNaN(parolaUtente)) || parolaUtente == '' ) {
//   parolaUtente = prompt('Errore. Inserisci una parola');
// }
//
// // Creo una funzione per capire se la parola è palindroma
// function parolaPalindroma(argParolaUtente) {
//   // Dichiaro array vuoto per la parola inserita
//   var arrayParolaUtente = [];
//
//   // Standardizzazione parola inserita
//   var argParolaUtenteMin = argParolaUtente.toLowerCase();
//
//   // Ciclo per riempire l'array
//   for (var i = 0; i < argParolaUtenteMin.length; i++) {
//     arrayParolaUtente.push(argParolaUtenteMin[i]);
//   }
//
//   // Array al contrario e non trasformate in stringhe per la comparazione
//   var stringParolaUtente = arrayParolaUtente.toString();
//   var parolaPalindroma = (arrayParolaUtente.reverse()).toString();
//
//   // Ciclo per comparare le due stringhe e capire se sia palindroma o no
//   var risultato = false;
//   if (parolaPalindroma === stringParolaUtente) {
//     risultato = true;
//   }
//
// // Risultato finale
// return risultato;
//
// }
//
// // Stampo la risposta
// var risultatoStampato = document.getElementById('titolo');
// var messaggio = 'La parola  "' +  parolaUtente + '" non è palindroma';
//
// if (parolaPalindroma(parolaUtente) === true) {
//   messaggio = 'La parola: ' + parolaUtente + ' è palindroma';
// }
//
// risultatoStampato.innerHTML = messaggio;


//// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// L'utente sceglie un pari o Dispari
var utentePariDisp = (prompt('Scegli pari o dispari.')).toLowerCase();

while ( utentePariDisp == '' || utentePariDisp != 'pari' && utentePariDisp != 'dispari' ) {
  utentePariDisp = (prompt('Errore. Scegli pari o dispari.')).toLowerCase();
}

// L'utente inserisce un numero da 1 a 5
var utenteNumero = parseInt(prompt('Scegli un numero tra 1 e 5.'));

while ( utenteNumero < 1 || utenteNumero > 5 || isNaN(utenteNumero) ) {
  utenteNumero = parseInt(prompt('Errore. Scegli un numero tra 1 e 5.'));
}

// Creiamo una funzione
function giocoPariODispari(argPariDispari, argNumero) {
  // Generiamo un numero parolaPalindroma
  var computerNumero = Math.floor(Math.random() * 5) +1;

  // Sommiamo i numeri
  var somma = argNumero + computerNumero;

  // pari o Dispari
  var vincitoreUtente = false;
  if ( (argPariDispari == 'pari' && somma % 2 == 0) || (argPariDispari == 'dispari' && somma % 2 != 0) ) {
    vincitoreUtente = true;
  }

  return vincitoreUtente
}

// Stampiamo il vincitore
var vincitoreStampato = document.getElementById('titolo');
var messaggio = 'Il vincitore è il computer.';

if (giocoPariODispari(utentePariDisp, utenteNumero) == true) {
  messaggio = 'Il vincitore sei tu!';
}

vincitoreStampato.innerHTML = messaggio;
