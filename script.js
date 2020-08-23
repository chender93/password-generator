// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


//String for lowercase characters
var lower = ["abcdefghijklmnopqrstuvwxyz"];
//String for uppercase characters
var upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
//String for numeric characters
var number = ["123456789"];
//String for special characters
var special = ["!#$%&'*+-./:;<=>,?@[]^_`{|}~"];

// Write password to the #password input
//BEGIN writePassword function
function writePassword() {

//Variables for confirmations
//Placeholder for password after defining
var possiblePassword = "";



//Variables for ultimate decision of characters
var choices;

//Begin Password Generator Function
//Password length must be 8 characters, but no more than 128 characters
var characterLength = parseInt(prompt("How many characters would you like in your password?\n\r Password must be between 8 and 128 characters."));
//console.log(characterLength);
if (characterLength === false) {
  window.alert("You must specify the length of the password! Start again.");
  } else if (characterLength < 8 || characterLength > 128) {
  window.alert("You must specify a length in between 8 and 128 characters! Start again.");
  return;
  } else {
  //Give the option for lowercase characters
   var confirmLower = window.confirm("Would you like to include lowercase letters?\n\r Hit cancel for no.");
  //Give the option for uppercase characters
  var confirmUpper = window.confirm("Would you like to include uppercase letters?\n\r Hit cancel for no.");
  //Give the option for numeric characters
  var confirmNumber = window.confirm("Would you like to include numbers?\n\r Hit cancel for no.");
  //Give the option for special characters
  var confirmSpecial = window.confirm("Would you like to include special characters?\n\r Hit cancel for no.");
 };
  //Ensure that the user choose at least one option
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    choices = window.alert("You need to choose at least one option! Start Again");
    return;
  }
  
  };
  console.log(choices);

  

  //For loop to select password length
  for (var i = 0; i < characterLength; i++) {
    var gatherChoices += choices(Math.floor(Math.random() * choices.length));
  }
 // console.log(gatherChoices);
  //Password is displayed in an alert or written to the page
 // var finalPassword = console.log(choices.join(""));

  window.alert("You're new password is " + gatherChoices);
  //Output password in the textbox
//  function UserInput(ps) {
//   document.getElementById("password").textContent = ps;

//}
var passwordText = document.querySelector("#password");

passwordText.value = finalPassw;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
