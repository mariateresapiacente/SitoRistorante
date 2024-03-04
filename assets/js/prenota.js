class Prenotazione {
    constructor(data, orario, numeroPersone) {
      this.data = data;
      this.orario = orario;
      this.numeroPersone = numeroPersone;
    }
  
    salva() {
      // Ottieni le prenotazioni esistenti dal localStorage
      let prenotazioni = JSON.parse(localStorage.getItem("prenotazioni")) || [];
  
      // Aggiungi la nuova prenotazione
      prenotazioni.push({
        data: this.data,
        orario: this.orario,
        numeroPersone: this.numeroPersone,
      });
  
      // Salva le prenotazioni aggiornate nel localStorage
      localStorage.setItem("prenotazioni", JSON.stringify(prenotazioni));
    }
  }
  
  function prenota() {
    // Ottieni i valori inseriti dall'utente
    var data = document.getElementById("datePicker").value;
    var orario = document.getElementById("timeSlot").value;
    var numeroPersone = document.getElementById("numberOfPeople").value;
  
    // Verifica che tutti i campi siano stati compilati
    if (data === "" || orario === "" || numeroPersone === "") {
      alert("Per favore, compila tutti i campi.");
      return;
    }
  
    // Verifica che il numero di persone sia compreso tra 1 e 10
    if (numeroPersone < 1 || numeroPersone > 10) {
      alert("Il numero di persone deve essere compreso tra 1 e 10.");
      return;
    }
  
    // Crea un nuovo oggetto Prenotazione
    var nuovaPrenotazione = new Prenotazione(data, orario, numeroPersone);
  
    // Salva la prenotazione nel localStorage
    nuovaPrenotazione.salva();
  
    // Visualizza un messaggio di conferma
    alert("Prenotazione effettuata con successo!");
  
    // Pulisci i campi di input
    document.getElementById("datePicker").value = "";
    document.getElementById("timeSlot").value = "";
    document.getElementById("numberOfPeople").value = "";
  }
  