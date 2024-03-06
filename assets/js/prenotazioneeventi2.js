// Funzione per gestire il form di prenotazione per l'evento "Notte di Vini Preziosi"
function gestisciPrenotazione(event) {
    event.preventDefault();
  
    // Ottieni i valori inseriti dall'utente
    var nome = document.getElementById("nome").value;
    var cognome = document.getElementById("cognome").value;
    var email = document.getElementById("email").value;
    var numeroPersone = parseInt(document.getElementById("numero-persone").value);
  
    // Verifica che tutti i campi siano stati compilati
    if (nome === "" || cognome === "" || email === "" || isNaN(numeroPersone)) {
      alert("Per favore, compila tutti i campi.");
      return;
    }
  
    // Verifica che il numero di persone sia compreso tra 1 e 10
    if (numeroPersone < 1 || numeroPersone > 10) {
      alert("Il numero di persone deve essere compreso tra 1 e 10.");
      return;
    }
  
    // Calcola il prezzo totale
    var prezzoPerPersona = 10; // Prezzo per persona dell'evento "Notte di Vini Preziosi"
    var prezzoTotale = prezzoPerPersona * numeroPersone;
  
    // Visualizza un messaggio di conferma con l'evento e il prezzo totale
    alert("Prenotazione effettuata con successo per l'evento 'Notte di Vini Preziosi'. Prezzo totale: " + prezzoTotale + "€");
  
    // Pulisci i campi di input
    document.getElementById("nome").value = "";
    document.getElementById("cognome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("numero-persone").value = "";
  }
  
  // Aggiungi un event listener al form per chiamare la funzione gestisciPrenotazione quando viene inviato
  document.getElementById("prenotazione-form").addEventListener("submit", gestisciPrenotazione);
  