// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Password length must be 8 characters, but no more than 128 characters
var characterlenght = window.prompt("How many characters would you like in your password?");
//Give the option for lowercase characters
var lowercase = window.confirm("Would you like to include lowercase letters?\n\r Hit cancel for no.");
//Give the option for uppercase characters
var uppercase = window.confirm("Would you like to include uppercase letters?");
//Give the option for numeric characters
var numbers = window.confirm("Would you like to include numbers?");
//Give the option for special characters
var special = window.confirm("Would you like to include special characters?");
//Ensure that each character type selected is included in the password

//Password matches requested criteria

//Password is displayed in an alert or written to the page