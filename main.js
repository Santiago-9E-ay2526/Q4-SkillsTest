function loginNow() {
     // Get values entered by user
     let usernameEnter = document.getElementById('usernameEnter').value;
     let passwordEnter = document.getElementById('passwordEnter').value;

     let status;

    // IF/ELSE: Determine login status based on input
     if (usernameEnter === "" || passwordEnter === "") {
          // If any field is empty
          status = "empty";
     } 
     else if (usernameEnter === "radiant" && passwordEnter === "9876") {
          // If both username and password are correct
          status = "success";
     } 
     else if (usernameEnter !== "radiant" && passwordEnter !== "9876") {
          // If both are incorrect
          status = "bothWrong";
     } 
     else if (usernameEnter !== "radiant") {
          // If only username is incorrect
          status = "wrongUsername";
     } 
     else {
          // If only password is incorrect
          status = "wrongPassword";
     }

    // SWITCH: Display result based on status
     switch (status) {
          case "empty":
               alert("Please fill in all fields.");
               break;

          case "success":
               alert("Welcome radiant!");
               break;

          case "bothWrong":
               alert("Username and password are incorrect.");
               break;

          case "wrongUsername":
               alert("Incorrect username.");
               break;

          case "wrongPassword":
               alert("Wrong password.");
               break;

          default:
               alert("Something went wrong.");
     }
}