// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


var character= "!@#$%^&*()?,./><:;'\\[]\""
var numbers= "1234567890"
var alpha= "abcdefghijklmopqrstuvwxyz"




function generatePassword(){
  
  var characterLength= prompt("lenght of password", "8-128");
  if (characterLength <8){
    characterLength=8;

  } else if (characterLength>128){
    characterLength=128;
  }
  console.log(characterLength)
    
  var result="";
  var passwordLength=parseInt(characterLength);  
  
  var hasSpecialCharacters= confirm("Will this contain special characters?")    
  
  var hasUppercaseLetters= confirm("Will this contain uppercase letters?")
  
  var hasLowercaseLetters= confirm("Will this contain lowercase letters?")
  
  var hasNumbers= confirm("Will this contain numbers?")
  

  for(var i=0; i<passwordLength;i++){
    var possibleCharacters=alpha;
    if (hasSpecialCharacters){
      possibleCharacters=possibleCharacters+character;
    }
    
    if(hasUppercaseLetters){
      possibleCharacters=possibleCharacters+alpha.toUpperCase;
    }

    if(hasLowercaseLetters){
      possibleCharacters=possibleCharacters+alpha;
    }
    
    if(hasNumbers)
      possibleCharacters=possibleCharacters+numbers

    result=result+possibleCharacters.charAt(Math.floor(Math.random()*possibleCharacters.length));
  }

  return result;
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
