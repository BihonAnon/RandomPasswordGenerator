//  Create variables to hold the character options for Special, lowercase, uppercase and numeric character
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCase = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":", "'", '"'];
var numbersNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var finalPass= [];
var numChars;
//Chosen vars
var specialChose;
var numChose;
var lowerChose;
var upperChose;
//----- chosen var
var OptionsArray = []; //Array of selected
var possibleChars = [];
function PasswordFinder() {
    numChars = parseInt(prompt("How many characters would you like? 8-128"));
//user input 8-128
    if (numChars < 8 || numChars > 128) {
        alert("Pick 8 - 128")
        PasswordFinder();
        return null;
    }
    else if (numChars >= 8 && numChars <= 128) {
        userPara();
        return numChars;
    }
//validation
    else {
        alert("validification failed")
        PasswordFinder();
        return null;
    }
}

//character selection varibales
function userPara() {
    specialChose = confirm("special characters?");
    numericalChose = confirm("numbers?");
    lowerChose = confirm("lowercase characters?");
    upperChose = confirm("uppercase characters?");
    //validifies
    if (!specialChose && !numChose && !lowerChose && !upperChose) {
        alert("valdific failed no types chosen");
        userPara();
        return null();
    }
    ChosenArray();
}
// pass charactesr into new array with characters chosen
function ChosenArray() {
  possibleChars = [];
  if (specialChose) {
      possibleChars = possibleChars.concat(specialCase);
  }
  if (upperChose) {
      possibleChars = possibleChars.concat(upperCase);
  }
  if (lowerChose) {
      possibleChars = possibleChars.concat(lowerCase);
  }
  if (numericalChose) {
      possibleChars = possibleChars.concat(numbersNumbers);
  }
  var password = finalPassLoop();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//final pass loop using units from array of chosen
function finalPassLoop() {
  finalPass = [];
  for (let i = 0; i < numChars; i++) {
   finalPass = finalPass.concat(possibleChars[Math.floor(Math.random() * possibleChars.length)]);
  }
  return finalPass.join ("");
}


// Assignmenmt code
var generateBtn = document.querySelector("#generate");

// write password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = finalPass;
}
  
  generateBtn.addEventListener("click", PasswordFinder) 
