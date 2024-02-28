var username = prompt("Enter your name:");

  // Check if the user entered a name
  if (username !== null && username !== "") {
    // Display a greeting with the entered username
    alert("Hello, " + username + "!");
  } else {
    // Handle case where user didn't enter a name
    alert("Hello, Anonymous!");
  }
