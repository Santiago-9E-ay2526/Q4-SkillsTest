function loginNow() {
     var user = document.getElementById("usernameEnter").value;
     var pass = document.getElementById("passwordEnter").value;

     switch (true) {
          // Checks if user inputted correct username and password
          case (user === "Radiant" && pass === "2345"):
               window.location.href = "notebook.html";
               break;

          default:
               alert("Incorrect username or password.");
               break;
     }
}