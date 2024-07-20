// funzione per capire se è palindroma

function palindroma(parola) {

    let inversa = parola.split('').reverse().join('');

    //split('') divide la parola in un array di caratteri.
    //reverse() inverte l'array.
    //join('') ricompone l'array in una stringa.

    return parola == inversa;

    //se parola e inversa sono uguali il return è true
}

//chiediamo all'utente di inserire la parola

let parola = prompt("Inserisci una parola:");

//se la parola inserita dall'utente riserra la funzione (palindroma(parola))
if (parola) {
    if (palindroma(parola)) {
        //allora scrivi
        alert("La parola '" + parola + "' è palindroma.");
    } 
        //altrimenti scrivi
    else {
        alert("La parola '" + parola + "' non è palindroma.");
    }
} 
// se non hai scritto niente allora scrivi
else {
    alert("Non hai inserito nessuna parola.");
}
