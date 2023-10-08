let numbers = "0123456789";
let capsAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let smallAlpha = "abcdefghijklmnopqrstuvwxyz";
let spclChar = `!@#$%^&*()_+/\""'':;,.?|><~`;

function generatePassword(noOfCharInPass, Options){

    let dispayPass = document.getElementById("dispayGeneratedPass");
    if(!noOfCharInPass){
         noOfCharInPass = parseInt(document.getElementById("charInputVal").value);
         if(!noOfCharInPass){
           noOfCharInPass = 8;
         }
    }
    let passWordCharecters = "";
    if(Options){
        if(Options.numbers || Options.numbers != false){
            passWordCharecters += numbers;
        }
        if(Options.capsAlpha || Options.capsAlpha != false){
            passWordCharecters += capsAlpha;
        }
        if(Options.smallAlpha || Options.smallAlpha != false){
            passWordCharecters += smallAlpha;
        }
        if(Options.spclChar || Options.spclChar != false){
            passWordCharecters += spclChar;
        }
        if(!passWordCharecters){
            passWordCharecters = numbers + capsAlpha + smallAlpha + spclChar;
        }
    }else{
        passWordCharecters = numbers + capsAlpha + smallAlpha + spclChar;
    }

    let generatedPassword = [];

    new Array(noOfCharInPass).fill().forEach(function(){
       let randomNumberPasswordCharLength = Math.floor(Math.random()*passWordCharecters.length)
       randomNumberPasswordCharLength; //4,7,1,3,1,5,8,4
       generatedPassword.push(passWordCharecters.substring(randomNumberPasswordCharLength, randomNumberPasswordCharLength+1));
    });
    generatedPassword = generatedPassword.join("");

    // console.log(generatedPassword);

    dispayPass.innerHTML = generatedPassword;
    return generatedPassword;
}

// console.log(generatePassword(8, {numbers: false}));
// console.log(generatePassword(8, {numbers: false, capsAlpha: false}));
// console.log(generatePassword(8, {numbers: false, capsAlpha: false, smallAlpha: false}));
// console.log(generatePassword(8, {numbers: false, capsAlpha: false, smallAlpha: false, spclChar: false}));
// console.log(generatePassword(8, {capsAlpha: false, smallAlpha: false, spclChar: false}));

console.log(generatePassword(8));

// console.log(generatePassword());