// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var number = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const charactersArray=[];
var password=[];
var characters=0;
var passwordLetter="";

selectLowerCase=true;
selectUpperCase=true;
selectNumber=true;
selectSpecialCharacter=true;


// Write password to the #password input
function writePassword() {
  var characters = window.prompt("How many characters would you like your password to be? Chose between 8-128.");
  if (characters === null) {
    alert("You must enter a number between 8 and 128");
    return false;
} else if (characters < 8 || characters > 128) {
    window.confirm("You must enter a number between 8 and 128")
    return false;
  }
  else if (isNaN(characters)) {
  window.confirm("You must enter a number between 8 and 128")
  return false;
  }
  
  characters=parseInt(characters)

  var selectLowerCase = window.confirm("Will there be lowercase leters?");
  var selectUpperCase = window.confirm("Will there be uppercase letters");
  var selectNumber = window.confirm("Will there be numbers?");
  var selectSpecialCharacter = window.confirm("Will there be special characters?");

  
  if (selectLowerCase === true) {
    charactersArray.push(...lowerCase);
  }

  if (selectUpperCase === true) {
    charactersArray.push(...upperCase);
  }

  if (selectNumber === true) {
    charactersArray.push(...number);
  }

  if (selectSpecialCharacter === true) {
    charactersArray.push(...specialCharacter);
  }

  if (selectLowerCase === false && selectUpperCase === false && selectNumber === false && selectSpecialCharacter === false){
    window.confirm("You must select critera!")
    return false;
  }

  for (i=0;i<characters;i++)
  {
 passwordLetter = charactersArray[Math.floor(Math.random() * charactersArray.length)];
 password.push(passwordLetter)
  }

  password = password.join("");
  alert("Your generated password is: " +password);
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



