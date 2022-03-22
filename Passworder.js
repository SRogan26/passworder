
//SEARCH DOCUMENT FOR THE SUBMIT BUTTON
var btn = document.querySelector("#submit-button");
//CREATING VARIABLES TO STORE POSSIBLE CHARACTERS
var numList = [0,1,2,3,4,5,6,7,8,9];
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
//THE .SPLIT FUNCTION BREAKS THE STRING INTO INDIVIDUAL CHARACTERS
var lowerList = lowerLetters.split("");
var upperList = lowerLetters.toUpperCase().split("");
console.log(lowerList, upperList);
var specialChar = "!@#$%^&*".split("");
console.log(specialChar);
console.log(numList);

//ADDING FUNCTION TO CLICKING SUBMIT
function clickSubmit(){
    //THE ID #Upper REFERENCES THE ID OF THE UPPERCASE CHECKBOX
    var isUsingUpper = document.querySelector("#Upper").checked;
    var isUsingLower = document.querySelector("#Lower").checked;
    var isUsingNumber = document.querySelector("#Number").checked;
    var isUsingSpecial = document.querySelector("#Special").checked;
    var passwordLength = document.querySelector("#quantity").value;
    console.log(passwordLength);
    //SETTING UP EMPTY ARRAY FOR STORING PASSWORD CHARACTERS
    var posChar = [];

    //CHECKING FOR CHECKED BOXES AND ADDING THEM TO OUR PASSWORD CHARACTERS IF TRUE
    if(isUsingUpper){
        posChar = posChar.concat(upperList);
    };
    if(isUsingLower){
        posChar = posChar.concat(lowerList);
    };
    if(isUsingNumber){
        posChar = posChar.concat(numList);
    };
    if(isUsingSpecial){
        posChar = posChar.concat(specialChar);
    };

    //USE LOOP TO CREATE RANDOM PASSWORD 
    var password = [];
    console.log(posChar);
    //INCREMENTS THE index COUNTER UP TO THE AMOUNT OF TIMES EQUAL TO PASSWORD LENGTH
    for (var index = 0; index <= passwordLength-1; index++){
        //Math.floor WILL ROUND DOWN
        var randomIndex = Math.floor(Math.random() * posChar.length);
        var randomChar = posChar [randomIndex];
        password.push(randomChar);
    }
    //DISPLAY PASSWORD IN TEXT AREA
    var passText = document.querySelector("#password-text-area");
    passText.value = password.join("");
    console.log(password.join(""));

}
//CHECKS FOR THE click EVENT TO TRIGGER THE clickSubmit FUNCTION
btn.addEventListener("click", clickSubmit);