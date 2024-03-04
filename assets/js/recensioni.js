// Classe Recensione
class Recensione {
    constructor(nome, email, recensione, valutazione) {
        this.nome = nome;
        this.email = email;
        this.recensione = recensione;
        this.valutazione = valutazione;
    }
}

// Classe GestoreRecensioni
class GestoreRecensioni {
    constructor() {
        // Ottieni le recensioni esistenti dal Local Storage
        this.recensioni = JSON.parse(localStorage.getItem("recensioni")) || [];
    }

    // Metodo per aggiungere una recensione
    aggiungiRecensione(recensione) {
        this.recensioni.push(recensione);
        this.salvaRecensioni();
    }

    // Metodo per salvare le recensioni nel Local Storage
    salvaRecensioni() {
        localStorage.setItem("recensioni", JSON.stringify(this.recensioni));
    }

    // Metodo per ottenere tutte le recensioni
    getRecensioni() {
        return this.recensioni;
    }
}

// Funzione per gestire il form di recensione
function gestisciRecensione(event) {
    event.preventDefault();

    // Ottieni i valori inseriti dall'utente
    var nome = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var recensione = document.getElementById("message").value;
    var valutazione = document.getElementById("valutazione").value;

    // Verifica che tutti i campi siano stati compilati
    if (nome === "" || email === "" || recensione === "" || valutazione === "") {
        alert("Per favore, compila tutti i campi.");
        return;
    }

    // Crea un oggetto Recensione
    var recensione = new Recensione(nome, email, recensione, valutazione);

    // Aggiungi la recensione al GestoreRecensioni
    var gestoreRecensioni = new GestoreRecensioni();
    gestoreRecensioni.aggiungiRecensione(recensione);

    // Visualizza un messaggio di conferma
    alert("Recensione inviata con successo!");

    // Pulisci i campi di input
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    document.getElementById("valutazione").value = "";
}

// Aggiungi un event listener al form per chiamare la funzione gestisciRecensione quando viene inviato
document.getElementById("recensione-form").addEventListener("submit", gestisciRecensione);
