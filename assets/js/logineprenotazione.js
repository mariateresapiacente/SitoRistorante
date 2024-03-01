document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerLink = document.getElementById('register-link');
    const bookingForm = document.getElementById('booking-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        // Qui inserisci la logica per verificare le credenziali
        if (username === 'admin' && password === 'password123') {
            // Le credenziali sono corrette, consenti l'accesso
            alert('Accesso riuscito!');
        } else {
            // Le credenziali sono errate, informa l'utente
            alert('Credenziali non valide. Riprova.');
        }
    });

    registerLink.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Funzionalità di registrazione non implementata.');
    });
});