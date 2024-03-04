var prenotazioni = {};
function verificaDisponibilita(date, time) {
    // Definisci gli orari disponibili per ciascun giorno della settimana
    const orariDisponibili = {
        Lunedi: ["12:00", "13:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
        Martedi: [],
        Mercoledi: ["12:00", "13:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
        Giovedi: ["12:00", "13:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
        Venerdi: [], // Aggiungi gli orari disponibili per ciascun giorno
        Sabato: ["12:00", "13:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
        Domenica: ["12:00", "13:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
    };

    // Ottieni il giorno della settimana dalla data fornita
    const giorno = new Date(date).toLocaleDateString('en-US', { weekday: 'long' });

    // Controlla se l'orario è presente negli orari disponibili per il giorno specificato
    if (orariDisponibili[giorno].includes(time)) {
        return true; // Orario disponibile
    } else {
        return false; // Orario non disponibile
    }
}

// Esempi di utilizzo della funzione
console.log(verificaDisponibilita("2024-03-10", "12:00")); // Output: true
console.log(verificaDisponibilita("2024-03-10", "14:00")); // Output: false