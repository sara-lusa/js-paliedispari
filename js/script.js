// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo all'utente una parola
var parolaUtente = prompt('Inserisci una parola');
while ( !(isNaN(parolaUtente)) || parolaUtente == '' ) {
  parolaUtente = prompt('Errore. Inserisci una parola');
}

// Creo una funzione per capire se la parola è palindroma
function parolaPalindroma(argParolaUtente) {
  // Dichiaro array vuoto per la parola inserita
  var arrayParolaUtente = [];

  // Standardizzazione parola inserita
  var argParolaUtenteMin = argParolaUtente.toLowerCase();

  // Ciclo per riempire l'array
  for (var i = 0; i < argParolaUtenteMin.length; i++) {
    arrayParolaUtente.push(argParolaUtenteMin[i]);
  }

  // Array al contrario e non trasformate in stringhe per la comparazione
  var stringParolaUtente = arrayParolaUtente.toString();
  var parolaPalindroma = (arrayParolaUtente.reverse()).toString();

  // Ciclo per comparare le due stringhe e capire se sia palindroma o no
  var risultato = false;
  if (parolaPalindroma === stringParolaUtente) {
    risultato = true;
  }

// Risultato finale
return risultato;

}

// Stampo la risposta
var risultatoStampato = document.getElementById('titolo');
var messaggio = 'La parola  "' +  parolaUtente + '" non è palindroma';

if (parolaPalindroma(parolaUtente) === true) {
  messaggio = 'La parola: ' + parolaUtente + ' è palindroma';
}

risultatoStampato.innerHTML = messaggio;
