var passwordLength;
var confirmLC;
var confirmUC;
var confirmC;
var confirmN;
//Password Variables values
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = lowerCase.map(function(x){
  return x.toUpperCase();
})
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var character = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/","\:","\;","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
// This variable is for the concat statements later in the if statements!
var selection;
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordLength = prompt("Your password must be between 8 and 128 characters. Pick a numeric value")
  if (!passwordLength) {
    alert("There must be a value!");
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Numeric value has to be between 8 and 128");
  } else {
    confirmLC = confirm("Do you want lower case characters?");
    confirmUC = confirm("Do you want upper case characters?");
    confirmN = confirm("Do you want numbers in your password?");
    confirmC = confirm("Do you want special characters?")
  };
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
