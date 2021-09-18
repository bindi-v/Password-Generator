
// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function writePassword() {
// Generate function
  var generatePassword = function() {
  
  var number = [0,1,2,3,4,5,6,7,8,9];
  var lowerCase = //"abcdefghijklmnopqrstuvwxyz";
  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase = //"ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var specialChar = ["!","@","#","$","%","^","&","*","_","+","-","=","|","?","(",")","{","}","[","]",":","<",">"];
  var chosenChar = [];
  var password = [];

  var userChoicePasswordLength
   userChoicePasswordLength = window.prompt("Enter length of password from 8 to 128 ");
  if (userChoicePasswordLength >= 8 && userChoicePasswordLength <= 128) {
    window.confirm("You chose lenght of Password is " + userChoicePasswordLength);
} else {
  window.alert ("Thank You!");
  return;
}

  var userChoiceNumber = window.confirm("Add Number in Password ");
  if (userChoiceNumber) {
    chosenChar += number;
    var index = Math.floor(Math.random() * number.length);
    password += number[index];
    window.alert("You chose " + userChoiceNumber);
    
  }else {
   (!userChoiceNumber)
    return "Password must require a number, special character, lowercase & uppercase alphabet! ";
  }

  var userChoiceLowerCase = window.confirm("Add Lower Case alphabet ");
  if (!userChoiceLowerCase) {
    return; "Password must require a number, special character, lowercase & uppercase alphabet!  ";
  } else {
     chosenChar += lowerCase;
     index = Math.floor(Math.random() * lowerCase.length);
     password += lowerCase[index];
    window.alert("You chose " + userChoiceLowerCase);
  }

  var userChoiceUpperCase = window.confirm("Add upper Case Alphabet ");
  if (!userChoiceUpperCase) {
    return;
  } else {
    chosenChar += upperCase;
    index = Math.floor(Math.random() * upperCase.length);
    password += upperCase[index];
    window.alert("You Chose " + userChoiceUpperCase);
  }

var userChoiceSpecialChar = window.confirm("Add Special Character ");
if (!userChoiceSpecialChar) {
  return "Password require special character!";
} else {
  chosenChar += specialChar;
  index = Math.floor(Math.random() * specialChar.length);
  password += specialChar[index];
  window.alert("You Chose " + userChoiceSpecialChar);
}


for ( var i = 0; i < userChoicePasswordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chosenChar.length);
  password += chosenChar.substring(randomNumber, randomNumber + 1);
} 
var passwordText = document.querySelector("#password");
passwordText.value = password;
window.alert("Your new password is " + password);
console.log(password);
// Ask user to generate password again
var generatePasswordAgain = window.confirm("Generate Password Again?");

if (generatePasswordAgain) {
 generatePassword();
} 
};
// end generatePassword

generatePassword();



}; //ends writePassword function