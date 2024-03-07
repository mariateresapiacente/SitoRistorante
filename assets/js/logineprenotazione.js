// Funzione per gestire il login
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Recupero delle credenziali memorizzate nel localStorage
  var storedUsername = localStorage.getItem("username");
  var storedPassword = localStorage.getItem("password");

  // Verifica delle credenziali
  if (username === storedUsername && password === storedPassword) {
    // Memorizza lo stato di accesso dell'utente nel localStorage
    localStorage.setItem("isLoggedIn", "true");

    // Alert per confermare il login
    alert("Login effettuato con successo!");
    localStorage.setItem("isLoggedIn", "true");

    // Reindirizza l'utente alla pagina prenota.html
    window.location.href = "prenota.html";

    // Esempio di utilizzo dei dati memorizzati
    console.log("Dati memorizzati durante la registrazione:");
    console.log("Username:", storedUsername);
    console.log("Password:", storedPassword);
  } else {
    // Alert se le credenziali non sono corrette
    alert("Credenziali non valide. Riprova.");
  }

  // Reset dei campi del form
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
});

  // Funzione per il logout
  function logout() {
    localStorage.removeItem("isLoggedIn"); // Rimuove lo stato di accesso memorizzato
    window.location.href = "index.html"; // Reindirizza alla pagina principale
  }

  // Controlla lo stato di accesso e mostra/nasconde i link di login/logout
  document.addEventListener("DOMContentLoaded", function () {
    // Recupera lo stato di accesso memorizzato
    var isLoggedIn = localStorage.getItem("isLoggedIn");

    // Se l'utente è loggato, mostra il link "Log-out" e nasconde il link "Log-in"
    if (isLoggedIn === "true") {
      document.getElementById("loginLink").style.display = "none";
      document.getElementById("logoutLink").style.display = "block";
    } else {
      // Altrimenti, mostra il link "Log-in" e nasconde il link "Log-out"
      document.getElementById("loginLink").style.display = "block";
      document.getElementById("logoutLink").style.display = "none";
    }
  });
