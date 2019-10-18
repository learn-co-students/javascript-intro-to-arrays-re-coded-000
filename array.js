'use strict';

function createArray() {
	var myArray = ["snickers", "hundred grand", "kitkat", "skittles"];
	return myArray;
}

function addElementToArray(array) {
	array.push("A Christmas Story")
	return array
}

function accessElementFromArray(array) {
	var myArray = ["New York", "California", "Virginia", "Louisiana", "Nevada"]
	return  myArray[2];
}

function replaceElementInArray(name) {
      var myArray=["Joe", "Tim", "Stephen", "Sarah", "Stephanie"]
      return myArray[1] = "Carter"
}

function removeElementFromArray(dishes) {
	dishes.splice(2, 2, "Roast Chicken");
	return dishes;
}

function iterateArray(number) {
	var newNums =[];
	number.forEach(function(num) {
  newNums.push(num+ 5);
  
});
	return newNums;
}
