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

//Variables for confirmations
var submit;
var confirmLower;
var confrimUpper;
var confirmNumber;
var confirmSpecial;

//Variables for ultimate decision of characters
var choices;



//Array for lowercase characters
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Array for uppercase characters
upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//Array for numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Array for special characters
special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

//Begin Password Generator Function
function createPassword() {
//Password length must be 8 characters, but no more than 128 characters
var characterlength = window.prompt("How many characters would you like in your password?\n\r Password must be between 8 and 128 characters.");
if (characterlength === false) {
  window.alert("You must specify the length of the password! Start again.");
} else if (characterlength < 8 || characterlength > 128) {
  window.alert("You must specify a length in between 8 and 128 characters! Start again.");
} else {
  //Give the option for lowercase characters
  confirmLower = window.confirm("Would you like to include lowercase letters?\n\r Hit cancel for no.");
  //Give the option for uppercase characters
  confrimUpper = window.confirm("Would you like to include uppercase letters?\n\r Hit cancel for no.");
  //Give the option for numeric characters
  confirmNumber = window.confirm("Would you like to include numbers?\n\r Hit cancel for no.");
  //Give the option for special characters
  confirmSpecial = window.confirm("Would you like to include special characters?\n\r Hit cancel for no.");
 };
  //Ensure that each character type selected is included in the password
  if (!confirmLower && !confirmNumber && !confrimUpper && !confirmSpecial) {
    choices = window.alert("You need to choose at least one option! Start Again");
  }

}


//Password matches requested criteria

//Password is displayed in an alert or written to the page