document.getElementById("btn-submit").addEventListener("click", function () {
  // Email Value
  const userEmail = document.getElementById("user-email");
  const userField = userEmail.value;
  // password value
  const userPassword = document.getElementById("user-password");
  const passwordField = userPassword.value;
  // check email and password
  if (userField == "Baap.beta@gmail.com" && passwordField == 1234) {
    window.location.href = "bank.html";
  } else {
    alert("invalid email and password");
  }
});
