// Assignment Code
//--------------------------------------------------------------------------
//Setting Variables
//--------------------------------------------------------------------------
var generateBtn = document.querySelector("#generate");
var specialCharacter =['@',
'%',
'+',
'\\',
'/',
"'",
'!',
'#',
'$',
'^',
'?',
':',
',',
')',
'(',
'}',
'{',
']',
'[',
'~',
'-',
'_',
'.']
var number = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const charactersArray=[];
var password=[];
var characters=0;
var passwordLetter="";



//--------------------------------------------------------------------------
//Setting Criteria Variables
//--------------------------------------------------------------------------
var selectLowerCase=true;
var selectUpperCase=true;
var selectNumber=true;
var selectSpecialCharacter=true;

//--------------------------------------------------------------------------
// Criteria Questions and Prompts
//--------------------------------------------------------------------------
function writePassword() {
  var characters = window.prompt("How many characters would you like your password to be? Chose between 8-128.");
  if (characters === null) {
    alert("You must enter a number between 8 and 128.");
    return false;
} else if (characters < 8 || characters > 128) {
    window.confirm("You must enter a number between 8 and 128.")
    return false;
  }
  else if (isNaN(characters)) {
  window.confirm("You must enter a number between 8 and 128.")
  return false;
  }
  
  characters=parseInt(characters)
  alert("You selected "+ characters + " characters.")

  var selectLowerCase = window.confirm("Will there be lowercase letters?");
  if (selectLowerCase === true) {
    charactersArray.push(...lowerCase);
    alert("You have confirmed lower case letters.");  }
    else {
      alert("You said no to lower case letters.")
    }
  var selectUpperCase = window.confirm("Will there be uppercase letters");
  if (selectUpperCase === true) {
    charactersArray.push(...upperCase);
    alert("You have confirmed upper case letters.")
  }
  else {
    alert("You said no to upper case letters.")
  }
  var selectNumber = window.confirm("Will there be numbers?");
  if (selectNumber === true) {
    charactersArray.push(...number);
    alert("You have confirmed numbers.")
  }
  else {
    alert("You said no to numbers.")
  }
  var selectSpecialCharacter = window.confirm("Will there be special characters?");
  if (selectSpecialCharacter === true) {
    charactersArray.push(...specialCharacter);
    alert("You have confirmed special characters.")
  }
  else {
    alert("You said no to special characters.")
  }
  


  if (selectLowerCase === false && selectUpperCase === false && selectNumber === false && selectSpecialCharacter === false){
    window.confirm("You must select at least one critera.")
    location.reload();
    return false; 
  }

  //--------------------------------------------------------------------------
  //Creating Password by getting length chosen by user, selecting random characters from the combined array, and adding it to the password variable, removing
  //commas, and displaying it an alert.
  //--------------------------------------------------------------------------

  for (i=0;i<characters;i++)
  {
 passwordLetter = charactersArray[Math.floor(Math.random() * charactersArray.length)];
 password.push(passwordLetter)
  }

  password = password.join("");
  alert("Your generated password is: " +password);
alert("Congratulations!");
location.reload();


  //--------------------------------------------------------------------------
  //The rest is from the starter code
  //--------------------------------------------------------------------------
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



