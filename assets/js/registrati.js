function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
  
    if (username.length < 4) {
        errorMessage.innerHTML = "Username deve contenere almeno 4 caratteri.";
        return false;
    }
  
    if (password.length < 6) {
        errorMessage.innerHTML = "La password deve contenere almeno 6 caratteri.";
        return false;
    }
}

//funzione per la registrazione
function register() {
    const username= document.getElementById('username').value;
    const password= document.getElementById('password').value;

    //salva i dati in localstorage
    localStorage.setItem('username',username);
    localStorage.setItem('password',password);

    alert('Registrazione avvenuta con successo!Effettua log in');
}