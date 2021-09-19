// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

//  Write function 
function writePassword() {

// Generate function
  var generatePassword = function() {

  // Array of options for computer to pick from
  var number =   "0123456789";
  var lowerCase =  "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChar =   "~!@#$%^&*()_+}{:?><|";
  var chosenChar = [];
  var password = [];

  // Ask user for their choice of password length between 8 to 128 characters
  var userChoicePasswordLength
   userChoicePasswordLength = window.prompt("Enter length of password from 8 to 128 "); 
  if (userChoicePasswordLength >= 8 && userChoicePasswordLength <= 128) {
    window.alert("You chose lenght of Password is " + userChoicePasswordLength);

    // If user pressed Cancel, function immediately End 
  } else if(!userChoicePasswordLength){
  window.alert ("Thank You!!");
  return; 
  }else {
  // If user choose password length < 8 and > 128 than function alert message and end.
  window.alert( "Password Length must be 8 to 128!");
  return;
  }

// Ask user for to add Number in password 
  var userChoiceNumber = window.confirm("Add Number in Password ");

  // If user select Cancel function end
  if (!userChoiceNumber) {
    window.alert("Password must require Number!");
      return;
  } else {
    chosenChar += number;
    var index = Math.floor(Math.random() * number.length);
    password += number[index];
    window.alert("You chose " + userChoiceNumber);
    }

    // Ask user to add lowercase alphabet
 var userChoiceLowerCase = window.confirm("Add LowerCase Alphabet! ");

 // If user select Cancel, function end
  if (!userChoiceLowerCase) {
    window.alert("Password must require Lowercase Alphabet!  ");
    return ;
  } else {
     chosenChar += lowerCase;
     index = Math.floor(Math.random() * lowerCase.length);
     password += lowerCase[index];
    window.alert("You chose " + userChoiceLowerCase);
  }

  // Ask user to add uppercase alphabet
 var userChoiceUpperCase = window.confirm("Add UpperCase Alphabet! ");

 // If user select Cancel, function end 
  if (!userChoiceUpperCase) {
    window.alert("Password must require Uppercase Alphabet!");
    return ;
  } else {
    chosenChar += upperCase;
    index = Math.floor(Math.random() * upperCase.length);
    password += upperCase[index];
    window.alert("You Chose " + userChoiceUpperCase);
  }


  // Ask user to add special characters
var userChoiceSpecialChar = window.confirm("Add Special Character! ");

// If user select Cancel function will end
if (!userChoiceSpecialChar) {
  window.alert("Password must require Special Character!");
  return ;
} else {
  chosenChar += specialChar;
  index = Math.floor(Math.random() * specialChar.length);
  password += specialChar[index];
  window.alert("You Chose " + userChoiceSpecialChar);
}

// Get random characters from array of options based on password length
for ( var i = 0; i < userChoicePasswordLength - 4 ; i++) {
  var randomNumber = Math.floor(Math.random() * chosenChar.length);
  password += chosenChar[randomNumber]; 
} 

var passwordText = document.querySelector("#password");
passwordText.value = password;

// Print generated password
window.alert("Hooray!! Your new password is :   " + password);
console.log(password);

var generatePasswordAgain = window.confirm("Generate Password Again?");

// Ask user to generate password again
if (generatePasswordAgain) {
 generatePassword();
  }
};

// Generate the password first time 
generatePassword();

};