function loginNow() {
     var user = document.getElementById("usernameEnter").value;
     var pass = document.getElementById("passwordEnter").value;

     // Checks if user has entered a username and passowrd
     switch (true) {
          case (user === "" || pass === ""):
               alert("Please fill in both username and password fields.");
               break;
          default:
               window.location.href = "notebook.html";
               break;
     }
}