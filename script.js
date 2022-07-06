// Assignment Code
var generateBtn = document.querySelector("#generate");
var submitBtn = document.querySelector("#submit");
var randomBtn = document.querySelector("#random");

//generateBtn.addEventListener('click', () => {
  function formvisible(){
  var modal = document.querySelector("#modal");
  console.log("modal", modal);
  if (modal.style.visibility === 'hidden') {
    modal.style.visibility = 'visible';
    randomBtn.style.visibility = 'hidden';
  } else {
    modal.style.visibility = 'hidden';
  }
};
generateBtn.addEventListener("click", formvisible);

var minL = document.querySelector("#min");
var maxL = document.querySelector("#max");
var lowerC = document.querySelector("#lower");
var upperC = document.querySelector("#upper");
var numC = document.querySelector("#numeric");
var specialC = document.querySelector("#special");

submitBtn.addEventListener("click", function checkValidity() {
  var minVal = minL.value;
  var maxVal = maxL.value;
  //var lowerVal = lowerC.value;
  //var upperVal = upperC.value;
  //var numVal = numC.value;
  //var specialVal = specialC.value;

  if(minVal<8 || maxVal>128 || minVal>128 || maxVal<8) { 
    window.alert("The length should be at least 8 characters and no more than 128 characters.");
  }
  /*else if (minVal>maxVal){
    window.alert("The minimum length cannot be greater than the maximum length");
  }*/
  else if 
    (!lowerC.checked && !upperC.checked && !numC.checked && !specialC.checked) 
    {
    window.alert("Please select atleast one character type from the checkboxes");
  }
  else {
    randomBtn.style.visibility = 'visible';
    window.alert("You have met all the password selection criteria. Please click on the random password button to generate your password");
  }
});

function generatePassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var cLow = "abcdefghijklmnopqrstuvwxyz";
  var cUpp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var cNum = "0123456789";
  var cSpecial = "!@#$%^&*()";
  var cLowUpp = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var cLowNum = "abcdefghijklmnopqrstuvwxyz0123456789";
  var cLowSp = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()";
  var cUppNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var cUppSp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";
  var cNumSp = "0123456789!@#$%^&*()";
  var cLowUpNum = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var cLowUpSp = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";
  var cLowNumSp = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  var cUpNumSp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  var passwordLength = minL.value;
  var password = "";

if (lowerC.checked && !upperC.checked && !numC.checked && !specialC.checked){
  for (var i = 0; i <= passwordLength-1; i++) {
    var randomNumber = Math.floor(Math.random() * cLow.length);
    password += cLow.substring(randomNumber, randomNumber +1);
  }
}
else if 
  (!lowerC.checked && upperC.checked && !numC.checked && !specialC.checked)
for (var i = 0; i <= passwordLength-1; i++) {
  var randomNumber = Math.floor(Math.random() * cUpp.length);
  password += cUpp.substring(randomNumber, randomNumber +1);
}

else if (!lowerC.checked && !upperC.checked && numC.checked && !specialC.checked)
  for (var i = 0; i <= passwordLength-1; i++) {
  var randomNumber = Math.floor(Math.random() * cNum.length);
  password += cNum.substring(randomNumber, randomNumber +1);
}

else if (!lowerC.checked && !upperC.checked && !numC.checked && specialC.checked)
for (var i = 0; i <= passwordLength-1; i++) {
  var randomNumber = Math.floor(Math.random() * cSpecial.length);
  password += cSpecial.substring(randomNumber, randomNumber +1);
}

else if (lowerC.checked && upperC.checked && !numC.checked && !specialC.checked)
for (var i = 0; i <= passwordLength-1; i++) {
  var randomNumber = Math.floor(Math.random() * cLowUpp.length);
  password += cLowUpp.substring(randomNumber, randomNumber +1);
}

else if (lowerC.checked && !upperC.checked && numC.checked && !specialC.checked)
for (var i = 0; i <= passwordLength-1; i++) {
  var randomNumber = Math.floor(Math.random() * cLowNum.length);
  password += cLowNum.substring(randomNumber, randomNumber +1);
}

else if (lowerC.checked && !upperC.checked && !numC.checked && specialC.checked)
for (var i = 0; i <= passwordLength-1; i++) {
  var randomNumber = Math.floor(Math.random() * cLowSp.length);
  password += cLowSp.substring(randomNumber, randomNumber +1);
}

else if (!lowerC.checked && upperC.checked && numC.checked && !specialC.checked)
for (var i = 0; i <= passwordLength-1; i++) {
  var randomNumber = Math.floor(Math.random() * cUppNum.length);
  password += cUppNum.substring(randomNumber, randomNumber +1);
}

else if (!lowerC.checked && upperC.checked && !numC.checked && specialC.checked)
for (var i = 0; i <= passwordLength-1; i++) {
  var randomNumber = Math.floor(Math.random() * cUppSp.length);
  password += cUppSp.substring(randomNumber, randomNumber +1);
}

else if (!lowerC.checked && !upperC.checked && numC.checked && specialC.checked)
for (var i = 0; i <= passwordLength-1; i++) {
  var randomNumber = Math.floor(Math.random() * cNumSp.length);
  password += cNumSp.substring(randomNumber, randomNumber +1);
}

else if (lowerC.checked && upperC.checked && numC.checked && !specialC.checked)
for (var i = 0; i <= passwordLength-1; i++) {
  var randomNumber = Math.floor(Math.random() * cLowUpNum.length);
  password += cLowUpNum.substring(randomNumber, randomNumber +1);
}

else if (lowerC.checked && upperC.checked && !numC.checked && specialC.checked)
for (var i = 0; i <= passwordLength-1; i++) {
  var randomNumber = Math.floor(Math.random() * cLowUpSp.length);
  password += cLowUpSp.substring(randomNumber, randomNumber +1);
}

else if (lowerC.checked && !upperC.checked && numC.checked && specialC.checked)
for (var i = 0; i <= passwordLength-1; i++) {
  var randomNumber = Math.floor(Math.random() * cLowNumSp.length);
  password += cLowNumSp.substring(randomNumber, randomNumber +1);
}

else if (!lowerC.checked && upperC.checked && numC.checked && specialC.checked)
for (var i = 0; i <= passwordLength-1; i++) {
  var randomNumber = Math.floor(Math.random() * cUpNumSp.length);
  password += cUpNumSp.substring(randomNumber, randomNumber +1);
}

else {
  for (var i = 0; i <= passwordLength-1; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }
}

      document.querySelector("#password").textContent = password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  password = passwordText.value;
  //console.log(password);
  document.querySelector("#password").textContent = password;

  var minVal = minL.value;
  var maxVal = maxL.value;

  if(minVal<8 || maxVal>128) { 
    window.alert("The length should be at least 8 characters and no more than 128 characters");
  }
  else if 
    (!lowerC.checked && !upperC.checked && !numC.checked && !specialC.checked) 
    {
    window.alert("Please select atleast one character type from the checkboxes");
  }
}

// Add event listener to generate button
//submitBtn.addEventListener("click", checkValidity);
randomBtn.addEventListener("click", writePassword);
  

