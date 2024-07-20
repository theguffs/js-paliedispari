function pariDispari() {

    // Chiedi all'utente di scegliere "pari" o "dispari"

    let scelta = prompt("Scegli 'pari' o 'dispari':").toLowerCase();

    // se l'utente è stupido richiedi di scegliere

    while (scelta != "pari" && scelta != "dispari") {
        alert("Inserisci una scelta valida: 'pari' o 'dispari'.");
        scelta = prompt("Scegli 'pari' o 'dispari':").toLowerCase();
    }
}