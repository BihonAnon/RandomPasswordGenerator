// Assignment Code
const capitals = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const lowers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//Array Being Dumb
const specials = ["/", "[", "!", "@", "#", "?", "$", "%", "^", "&", "*", "(", ")", "_", "+", , "-", "=",  ";", "'", ":", "/", "|", ",", ".", "<", ">", "/", "?", "~", "]", "/", ";"];
specials.push("", "`")
//"\[", "\]", "\{", "}"."\"
const numbers = ["1","2","3","4","5","6","7","8","9","0"];
const passwordFinal = []
const passwordCharacters = []
var capitalsSelected = ""
var numbersSelected = ""
var lowersSelected = ""
var specialsSelected = ""
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(click) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  let characterLength = prompt("Please enter # of characters","sir")
  if (characterLength != null && capitalsSelected === "T"){
    let capitalsSelected = prompt("You have" + characterLength + " characters, would you like upper case characters? (T/F)")
    passwordCharacters = letCharacters.concat(capitals);
  }
  if (lowersSelected != null && lowersSelected === "T"){
    let lowersSelected = prompt ("You have" + characterLength + " characters, would you like lower case characters? (T/F) [Uppercase: " + capitalsSelected + "] [Lowercase: " + lowersSelected + "]") 
    passwordCharacters = letCharacters.concat(lowers);
  }
  if (numbersSelected != null && numbersSelected === "T"){
    let numbersSelected = prompt ("You have" + characterLength + " characters, would you like numbers case characters? (T/F) [Uppercase: " + capitalsSelected + "] [Lowercase: " + lowersSelected + "] [numbers: " + numbersSelected + "]" ); 
    passwordCharacters = letCharacters.concat(numbers);
  }
  if (specialsSelected != null && specialsSelected === "T"){
    let numbersSelected = prompt ("You have" + characterLength + " characters, would you like lower case characters? (T/F) [Uppercase: " + capitalsSelected + "] [Lowercase: " + lowersSelected + "] [Specialcase: " + specialsSelected + "] [numbers: " + numbersSelected + "]") 
    passwordCharacters = letCharacters.concat(specials);
  }
  console.log(passwordCharacters)
  //passwordFinal.join()
  //passwordText.value = passwordFinal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
