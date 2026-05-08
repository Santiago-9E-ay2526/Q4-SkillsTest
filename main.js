function loginNow() {
     var user = document.getElementById("usernameEnter").value;
     var pass = document.getElementById("passwordEnter").value;

     if (user === "" || pass === "") {
          alert("Please fill in both username and password fields.");
     } else {
          window.location.href = "notebook.html";
     }
}