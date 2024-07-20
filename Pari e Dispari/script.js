function pariDispari() {

    // Chiedi all'utente di scegliere "pari" o "dispari"

    let scelta = prompt("Scegli 'pari' o 'dispari':").toLowerCase();

    // se l'utente è stupido richiedi di scegliere

    while (scelta != "pari" && scelta != "dispari") {
        alert("Inserisci una scelta valida: 'pari' o 'dispari'.");
        scelta = prompt("Scegli 'pari' o 'dispari':").toLowerCase();
    }

    // Chiedi all'utente di inserire un numero da 1 a 5

    let numero = parseInt(prompt("Inserisci un numero da 1 a 5:"));
    

    while (isNaN(numero) || numero < 1 || numero > 5) {
        alert("Inserisci un numero valido da 1 a 5.");
        numero = parseInt(prompt("Inserisci un numero da 1 a 5:"));
    }
}
