"use strict";
//🟢CHAPTER1-ALERT
// alert( "Thanks for your input!" );
// window.alert( "Thanks for your Input!" );


//🟢CHAPTER2-VARIABLE FOR STRINGS
var Name = "Mark";
Name = 'Ace';
var nationality;
nationality = "U.S.";
var floogle = 'Mark';
// variable
var lessonAuthor = 'Mark';
var aGuyWhoKeepSayingHisName = 'Mark';
var x = 'Mark';
//string
var lastName = 'Smith';
var cityOfOrigin = 'New Orleans';
var aussieGreeting = "g'day";
var nickname = 'Bub';
var thanks = "Thanks for your Input!"
// window.alert(thanks);


//🟢CHAPTER3-VARIABLE FOR NUMBERS
var weight = 150;
weight + 25;
var originalNumber = 23;
var numToBeAdded = 7;
var newNum = originalNumber + 7;
newNum = originalNumber + numToBeAdded;
originalNumber = 90;
originalNumber = originalNumber + 10;
originalNumber = '23';
newNum = originalNumber + 7;
// alert(newNum);
// var 1stPresident = 'washington';
var prezWhoCame1st = 'zashington';
// alert(144);
var caseQty = 144;
// alert(caseQty);


//🟢CHAPTER4-VARIABLE NAMES LEGAL AND ILLEGAL
//ILLEGAL
// var 123 = 'abc';
// var var = 'abc';
// var "abc" = "abc"
// var ab c = "abc";

// LEGAL
var $abc = "abc";
var _abc = "abc";
var abc123 = "abc";
var userResponse;
var userResponseTime;


//🟢CHAPTER5-MATH EXPRESSIONS: FAMILIAR OPERATORS
// (+, -, /, *, %)
var popularNumber = 4;
popularNumber = 2 + 2;
// alert(2 + 2); 
popularNumber = 12 - 24;
popularNumber= 3 * 12;
// alert(popularNumber);
var num = 10;
popularNumber = num + 200;
num = 10;
var anotherNumber = 1;
popularNumber = num + anotherNumber;
var whatLeftOver = 10 % 3;
// alert(whatLeftOver);
whatLeftOver = 9 % 3;
// alert(whatLeftOver);


//🟢CHAPTER6-MATH EXPRESSIONS: UNFAMILIAR OPERATORS
// num = num + 1;
num++;
//num = num - 1;
num--;
num = 1;
newNum = num++; //1
newNum = ++num; //2
num = 1;
newNum = num--; //1
newNum = --num; //0


//🟢CHAPTER7-MATH EXPRESSIONS: ELIMINATING AMBIGUITY
var totalCost = 1 + 3 * 4; //13
totalCost = 1 + (3 * 4);
totalCost = (1 + 3) * 4;
var resultOfComputation = (2 * 4) * 4 + 2;//34
//use more parenthesis
resultOfComputation = ((2 * 4) * 4) + 2; //34
resultOfComputation = (2 * 4) * (4 + 2); //48


//🟢CHAPTER8-CONCATENATING TEXT STRINGS
var userName = "Susan";
var message = "thanks";
var banger = "!";
// alert(message + userName + banger); //variables 
// alert("thanks" + "susan" + "!"); //strings
var customMess = message + userName + banger;
// alert("2" + "2"); //22
// alert("2 plus 2 equals" + 2 + 2); //2 plus 2 equals 22


//🟢CHAPTER9-PROMPTS
// var spec = prompt("your species?", "human");
var question = "your species ?";
var defaultAnswer = "human";
// var spec = prompt(question, defaultAnswer);
// var number0fCats = window.prompt("How many cats ?");
// var tooManyCats = number0fCats + 1; //11


//🟢CHAPTER10-IF STATEMENTS
var x = prompt("where does the pope live");
if( x === "vetican"){
    alert("correct!");
}
var correctAnswer = "vetican";
if(x === correctAnswer){
    score++;
    userIQ = "genius";
    alert("correct!");
}


//🟢CHAPTER11-COMPARISON OPERATORS
// ===
var fullName = "Mark Myers";
var firstName = "Mark";
if(fullName === "Marks" + " " + "Myers"){}
if(fullName === firstName + "Myers"){}
if(totalCost === 81.50 + 135){}
// if(x + y === a - b){}
// !==
// if(yourTicketNumber !== 43578){
//     alert("better luck next time");
// }

