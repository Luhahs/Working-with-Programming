var boxEle = document.body.querySelector(".box");

var numberOne = prompt("What is your first number?")

var numberTwo = prompt("What is your second number?")

var Number1 = +numberOne
var Number2 = +numberTwo

boxEle.innerHTML=Number1+Number2;

// boxEle.innerHTML=userInput;