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
 