// Assignment Code
var generateBtn = document.querySelector("#generate");

var low = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var up = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbols = ["!", "@", "#", "$", "%", "&", "*", "_", "-", "^", "/", "?", ":", ";", "=", "+", ")", "(", "{", "}", "[", "]", "<", ">"];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var possibleOptions = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function userSelection (){
  
  // ask the user about password criteria & manage it by setting if statements
  var numOfChars = prompt("How many characters would you like your password to be? Please select a number between 8 and 128");
  if (!parseInt(numOfChars)) {
    alert ("You must enter a number")
    return;
  }
  if (numOfChars < 8) {
    window.alert("You must include at least 8 characters.");
    return;
  } else if (numOfChars > 128) {
    window.alert("You may not select more than 128 characters.");
    return;
  } 
  var lowerCase = confirm("Would you like your password to include any lowercase letters?");
  if (lowerCase) {
    possibleOptions = possibleOptions.concat(low);
    console.log(possibleOptions);
  }
  var upperCase = confirm("Would you like your password to include any uppercase letters?");
  if(upperCase) {
    possibleOptions = possibleOptions.concat(up);
  }
  var specialChar = confirm("Would you like your password to include any special characters?");
  if(specialChar) {
    possibleOptions = possibleOptions.concat(symbols);
  }
  var numeric = confirm("Would you like your password to include any numeric characters?");
  if (numeric) {
    possibleOptions = possibleOptions.concat(num);
    console.log(possibleOptions);
  }
  if (!lowerCase && !upperCase && !specialChar && !numeric) {
    alert ("You need to select at least one type of character");
}
return numOfChars;
}


function generatePassword() {

  var selectedOptions = userSelection();
  console.log(selectedOptions)

  var generatedPassword = "";

  for (var i = 0; i < selectedOptions; i++) {
    var randomIndex = Math.floor(Math.random() * possibleOptions.length);
    generatedPassword += possibleOptions[randomIndex];  // or generatedPassword = generatedPasword + possibleOptions[randomIndex]
    console.log(generatedPassword)
    
  }
  return generatedPassword;
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
