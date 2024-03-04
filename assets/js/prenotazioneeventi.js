
// Funzione per gestire il form di prenotazione
function gestisciPrenotazione(event) {
  event.preventDefault();

  // Ottieni i valori inseriti dall'utente
  var nome = document.getElementById("nome").value;
  var cognome = document.getElementById("cognome").value;
  var email = document.getElementById("email").value;
  var numeroPersone = document.getElementById("numero-persone").value;

  // Verifica che tutti i campi siano stati compilati
  if (nome === "" || cognome === "" || email === "" || numeroPersone === "") {
    alert("Per favore, compila tutti i campi.");
    return;
  }

  // Verifica che il numero di persone sia compreso tra 1 e 10
  if (numeroPersone < 1 || numeroPersone > 10) {
    alert("Il numero di persone deve essere compreso tra 1 e 10.");
    return;
  }

  // Crea un oggetto Prenotazione
  var prenotazione = new Prenotazione(nome, cognome, email, numeroPersone);

  // Aggiungi la prenotazione al GestorePrenotazioni
  var gestorePrenotazioni = new GestorePrenotazioni();
  gestorePrenotazioni.aggiungiPrenotazione(prenotazione);

  // Visualizza un messaggio di conferma
  alert("Prenotazione effettuata con successo!");

  // Pulisci i campi di input
  document.getElementById("nome").value = "";
  document.getElementById("cognome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("numero-persone").value = "";
}

// Aggiungi un event listener al form per chiamare la funzione gestisciPrenotazione quando viene inviato
document.getElementById("prenotazione-form").addEventListener("submit", gestisciPrenotazione);

// Classe Prenotazione
class Prenotazione {
  constructor(nome, cognome, email, numeroPersone) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.numeroPersone = numeroPersone;
  }
}

// Classe GestorePrenotazioni
class GestorePrenotazioni {
  constructor() {
    // Ottieni le prenotazioni esistenti dal Local Storage
    this.prenotazioni = JSON.parse(localStorage.getItem("prenotazioni")) || [];
  }

  // Metodo per aggiungere una prenotazione
  aggiungiPrenotazione(prenotazione) {
    this.prenotazioni.push(prenotazione);
    this.salvaPrenotazioni();
  }

  // Metodo per salvare le prenotazioni nel Local Storage
  salvaPrenotazioni() {
    localStorage.setItem("prenotazioni", JSON.stringify(this.prenotazioni));
  }

  // Metodo per ottenere tutte le prenotazioni
  getPrenotazioni() {
    return this.prenotazioni;
  }
}