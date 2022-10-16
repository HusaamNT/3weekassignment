// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
const charsLowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const charsUpperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const charsNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const charsSpecial = ["!", ".", "?", ",", " ", "&", "*", "£", "$"];
let charConfig = [];
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  function generatePassword() {
    
    let password = "";
    let passwordLength = prompt(
      "Enter the number of characters you would like your password to be:"
    ); //gives the user a prompt window so they can choose a length for thei password
    if (passwordLength < 8 || 128 < passwordLength) {
      //this makes the password between 8 and 128 characters long
      window.alert("That character length isn't allowed");
      return
    }
    charConfig = charConfig.concat(charsLowerCase)
    let upperCase = confirm(
      "Would you like to include upper case letters in your password?"
    ); //gives a confirm box for the optional characters
    /*
    if (upperCase === true){
         console.log("hello")    this confirms if that confirm window works
    }*/
    if (upperCase === true)(
      charConfig = charConfig.concat(charsUpperCase)
    )

    let numbers = confirm(
      "Would you like to include numbers in your password?"
    );
    if (upperCase === true)(
      charConfig = charConfig.concat(charsNumbers)
    )
    let special = confirm(
      "Would you like to include special characters in your password?"
    );
    if (upperCase === true)(
      charConfig = charConfig.concat(charsSpecial)
    )
    for (let i = 0; i < passwordLength; i++) {
      var passwordConfig = Math.floor(Math.random() * charConfig.length); //the random character generation for the lower case
      var randomPassword = charConfig[passwordConfig];
      password = password + randomPassword;
    }
    return password;
    console.log(password);
  }

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
