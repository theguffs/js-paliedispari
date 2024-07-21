
//chiediamo all'utente di inserire la parola

let parola = prompt("Inserisci una parola:")

// funzione per capire se è palindroma
function palindroma(parola){
    let j  = parola.length - 1
    for ( let i = 0; i < parola.length / 2;  i++) {
        if (parola[i] != parola[j]){
            return false; 
        }
        j--;
    }
    return true;
} 
console.log(palindroma(parola)); 


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
