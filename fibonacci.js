"use strict";

function userInput(message){
	if(message != null){
		return prompt(message);
	}
	else{
		return prompt("Enter user input:");
	}
}

// function createFibonacciString(){
// 	var fibonacciArray = [];

// 	var initialAdditor = 0;
// 	for(var numberToPrint = 1; numberToPrint < 100; numberToPrint += placeHolder){
// 		let placeHolder = placeHolder + numberToPrint;
// 		console.log(numberToPrint);
// 	}
// }


// function fibonacci(){
// 	let leftMostNumber = 0;
// 	let leftNumber = 1;
// 	for (var i = 0; i < 15; i++) {
// 		console.log("leftNumber " + leftNumber);
// 		console.log("leftMostNumber " + leftMostNumber);
		
// 		leftNumber = leftNumber + leftMostNumber;
// 		leftMostNumber = leftNumber;
// 	}
// }

// function fibonacci(){
// 	var fibonacciArray = ["1", "1", "1"];
// 	let penultimateVariable = 1;
// 	let lastVariable = 1;
// 	for(var i = 2; i < 100; i++) {
// 		lastVariable = fibonacciArray[i - 1];
// 		penultimateVariable = fibonacciArray[i - 2];
// 		fibonacciArray[i] = (lastVariable + penultimateVariable);
// 	}
// 	console.log(fibonacciArray);
// }



function fibonacci(){
	var fibonacciArray = [0, 1];
	for (var i = 2; i < 10; i++) {
		fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray [i - 2];
		console.log(fibonacciArray);
	}
}

userFibonacci();

function userFibonacci(){
	var fibonacciArray = [userInput()];
	return fibonacciArray[0];
}

function runUserFibonacci(){
	var fibonacciArray = userFibonacci();
	for (var i = 0; i < 10; i++) {
		[i]
	}
}