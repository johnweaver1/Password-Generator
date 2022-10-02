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
  //creating an if statement for user selection of password
  if (!passwordLength) {
    alert("There must be a value! Please click the generate password button again.");
  } else if (passwordLength < 8 || passwordLength > 128) {
    var passwordLength = prompt("enter a numeric value (a number) between 8 and 128");
  } else {
     confirmLC = confirm("Do you want lower case characters?");
     confirmUC = confirm("Do you want upper case characters?");
     confirmN = confirm("Do you want numbers in your password?");
     confirmC = confirm("Do you want special characters?")
  };

  //Making if else statments for each variation of user inputs, so that the function creates a correct password.
  if (!confirmLC && !confirmUC && !confirmC && !confirmN) {
      alert("You have to select 'okay' on one thing to create the password! Please click the generate password button again.")
      //all selections are selected.Breaking this up for easier clarification
  } else if (confirmLC && confirmUC && confirmC && confirmN) {
    selection = lowerCase.concat(number,character,upperCase);
  } 
  // if three selections are made!
  else if (confirmLC && confirmN && confirmC){
    selection = lowerCase.concat(number,character);
  } else if (confirmLC && confirmUC && confirmC){
    selection = lowerCase.concat(upperCase,character);
  } else if (confirmLC && confirmUC && confirmN){
    selection = lowerCase.concat(upperCase,number);
  } else if (confirmN && confirmUC && confirmC){
    selection = number.concat(upperCase,character);
  }
  // if there are 2 selections made!
  else if (confirmLC && confirmUC){
    selection = lowerCase.concat(upperCase);
  } else if (confirmLC && confirmC){
    selection = lowerCase.concat(character);
  } else if (confirmLC && confirmN){
    selection = lowerCase.concat(number);
  } else if (confirmUC && confirmC){
    selection = upperCase.concat(character);
  } else if (confirmUC && confirmN){
    selection = upperCase.concat(number);
  } else if (confirmN && confirmC){
    selection = number.concat(character);
  }
  // 1 selection is made! (almost done)
  else if (confirmLC){
    selection = lowerCase;
  } else if (confirmUC){
    selection = upperCase;
  } else if (confirmC){
    selection = character;
  } else {
    selection = number;
  }
  //this variable is so that the user's selected number reflects the password's length. It has to be in the function or the password won't reset per generate!
  var text = [];
  //this creates the randmoly selected password from all the variables!
  for (var i = 0; i < passwordLength; i++) {
    var choice = selection[Math.floor(Math.random() * selection.length)];
    text.push(choice);
  }
  //This is for converting my arrays into string. Thank you Josh for this help!!!
  var finalPassword = text.join("");
  UserInput(finalPassword);
  return finalPassword;
}
  // modified function to put the password in the textbox using textcontent
  function UserInput(finalPassword) {
    document.getElementById("password").textContent = finalPassword;
  }

  generateBtn.addEventListener("click", function () {
    finalPassword = writePassword();
    document.getElementById("password").placeholder = finalPassword;
  });