document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Salvataggio dei dati nel localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    
    // Alert per confermare la registrazione
    alert("Registrazione completata. Username: " + username + ", Password: " + password);

      // Reindirizza alla pagina di accesso
      window.location.href = "Logineprenotazione.html";
    
    // Reset dei campi del form
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  });
  document.addEventListener("DOMContentLoaded", function() {
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
        alert("Login effettuato. Benvenuto, " + username + "!");
  
        // Reindirizza alla pagina principale dopo il login
        window.location.href = "index.html";
      } else {
        // Alert se le credenziali non sono corrette
        alert("Credenziali non valide. Riprova.");
      }
  
      // Reset dei campi del form
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    });
  });