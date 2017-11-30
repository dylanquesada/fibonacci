"use strict";

function userInput(message){
	if(message != null){
		return prompt(message);
	}
	else{
		return prompt("Enter user input:");
	}
}

function fibonacci(){
	var fibonacciArray = [0, 1];
	for (var i = 2; i < 10; i++) {
		fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray [i - 2];
		console.log(fibonacciArray);
	}
}

function runUserFibonacci(){
	var start = userInput("Enter your start number:");
	var fibonacciArray = [];
	fibonacciArray[0] = start;
	fibonacciArray[1] = fibonacciArray[0] * 2;
	for (var i = 2; i < 10; i++) {
		fibonacciArray[i] = parseInt(fibonacciArray[i - 1]) + parseInt(fibonacciArray [i - 2]);
		console.log(fibonacciArray);
	}
}

runUserFibonacci();

