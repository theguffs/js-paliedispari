        // Chiedi all'utente di scegliere "pari" o "dispari"

        let scelta = prompt("Scegli 'pari' o 'dispari':");


        // se l'utente è stupido richiedi di scegliere se pari o dispari

        while (scelta != "pari" && scelta != "dispari") {
            alert("Inserisci una scelta valida: 'pari' o 'dispari'.");
            scelta = prompt("Scegli 'pari' o 'dispari':");
        }

        console.log('la tua scelta è', scelta);

         // Chiedi all'utente di scegliere un numero da 1 a 5

         
         let numero = parseInt(prompt("Inserisci un numero da 1 a 5:"));

        // se l'utente è stupido richiedi di scegliere il numero

        while (isNaN(numero) || numero < 1 || numero > 5) {
            alert("Inserisci un numero valido da 1 a 5.");
            numero = parseInt(prompt("Inserisci un numero valido da 1 a 5."));
        }

        console.log('il tuo numero è:', numero);

        // genera numero casuale per il pc

        function numeroCasuale() {
            return Math.floor(Math.random() * 5) + 1;
        }


        let numeroComputer = numeroCasuale();
        console.log('il numero del computer è:', numeroComputer);

        //somma del numero dell'utrente e numero del pc

        let somma = numero + numeroComputer;

        console.log('La somma è:', somma);

        //PER CAPIRE SE E' PARI

        function pari(numero) {
            numero % 2 == 0;
        }

        if (somma == pari && scelta == 'pari'){
            console.log('hai vinto la somma è pari');
        }
        else if (somma != pari && scelta == 'dispari'){
            console.log('hai vinto la somma è dispari');
        }
        else{
            console.log('mi dispiace ma hai perso');
        }
