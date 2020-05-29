// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo all'utente una parola
var parolaUtente = prompt('Inserisci una parola');


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
// Variabile con l'array al contrario
  var parolaPalindroma = arrayParolaUtente.reverse();

// Ciclo per comparare i due array e capire se sia palindroma o no
  var risultato = false;
  for (var i = 0; i < parolaPalindroma.length; i++) {
    if (parolaPalindroma[i] === argParolaUtenteMin[i]) {
      risultato = true;
    }
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
