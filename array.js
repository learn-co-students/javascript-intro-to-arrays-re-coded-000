'use strict';

function createArray(){

 var myArray = ["snickers", "hundred grand", "kitkat", "skittles"] ;
 return myArray
}

function addElementToArray(myArray){

	myArray.push("A Christmas Story");
	return myArray

}

function accessElementFromArray(states){

	return states[2]

}

function replaceElementInArray(names){

	names[2] = "Carter" ;
	return names[2]
}

function removeElementFromArray(dishes){

	dishes.splice(2,2,"Roast Chicken")
	return dishes

}

function iterateArray(numbers){
	var newNums = []

	numbers.forEach(function(number) {
		newNums.push(number + 5);});
	return newNums
}
