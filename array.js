'use strict';
function createArray(){
	var myArray=["snickers", "hundred grand", "kitkat", "skittles"]
    return myArray;
}

function addElementToArray(myArray){

	 myArray.push("A Christmas Story");
     return myArray;
}

function accessElementFromArray(myArray){
	return myArray[2];
}

function replaceElementInArray(myArray){
 return myArray[1]="Carter";
}

function removeElementFromArray(myArray){
	myArray.splice(2, 3, "Roast Chicken");
	return myArray;
}

function iterateArray(myArray){
var newNums = [];
myArray.forEach(function(number){
	 newNums.push(number+5);
});
return newNums;

}

