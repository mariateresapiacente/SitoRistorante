function verificaDisponibilita() {
    var data = document.getElementById("datePicker").value;
    var orario = document.getElementById("timeSlot").value;
    var numeroPersone = document.getElementById("numberOfPeople").value;

    // Definisci gli orari disponibili per ciascun giorno della settimana
    const orariDisponibili = {
        Lunedi: ["12:00", "13:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
        Martedi: [],
        Mercoledi: ["12:00", "13:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
        Giovedi: ["12:00", "13:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
        Venerdi: [],
        Sabato: ["12:00", "13:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
        Domenica: ["12:00", "13:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
    };

    // Ottieni il giorno della settimana dalla data fornita
    const giorno = new Date(data).toLocaleDateString('it-ITA', { weekday: 'long' });

    // Controlla se l'orario è presente negli orari disponibili per il giorno specificato
    if (orariDisponibili[giorno].includes(orario)) {
        // Orario disponibile
        alert("Prenotazione confermata per il " + data + " alle " + orario + " per " + numberOfPeople + " persone.");
    } else {
        // Orario non disponibile
        alert("L'orario selezionato non è disponibile per la prenotazione. Si prega di selezionare un altro orario.");
    }
}

verificaDisponibilita();