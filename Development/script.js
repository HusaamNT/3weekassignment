// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
const charsLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const charsUpperCase = [""]
const charsNumbers = [""]
const charsSpecial = [""]

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  function generatePassword(){
    let passwordLength = prompt("Enter the number of characters you would like your password to be:")
    if (passwordLength < 8 || 128 < passwordLength){
      window.alert("That character length isn't allowed")
    }
    for (let i = 0; i < passwordLength; i++) {
       let result = charsLowerCase.charAt(Math.floor(Math.random() * passwordLength));
       
    }
    return result
  } 
  

  passwordText.value = password; 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
