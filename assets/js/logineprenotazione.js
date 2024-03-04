document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Recupero delle credenziali memorizzate nel localStorage
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");
  
    // Verifica delle credenziali
    if (username === storedUsername && password === storedPassword) {
      // Alert per confermare il login
      alert("Login effettuato con successo!");

      window.location.href="prenota.html";
  
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