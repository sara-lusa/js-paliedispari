// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo all'utente una parola
var parolaUtente = prompt('Inserisci una parola');


// Creo una funzione per capire se la parola è palindroma
function parolaPalindroma(argParolaUtente) {
  var arrayParolaUtente = [];
  var argParolaUtenteMin = argParolaUtente.toLowerCase();
  for (var i = 0; i < argParolaUtenteMin.length; i++) {
    arrayParolaUtente.push(argParolaUtenteMin[i]);
  }
  var parolaPalindroma = arrayParolaUtente.reverse();

  for (var i = 0; i < parolaPalindroma.length; i++) {
    var risultato = ' non è palindroma';
    if (parolaPalindroma[i] === argParolaUtenteMin[i]) {
      var risultato = ' é palindroma';
    }
  }

return risultato;

}

// Stampo la risposta
document.getElementById('titolo').innerHTML = 'La parola ' + parolaUtente + parolaPalindroma(parolaUtente);
