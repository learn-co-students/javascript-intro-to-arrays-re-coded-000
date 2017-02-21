'use strict';

function createArray(){
  return ["snickers", "hundred grand", "kitkat", "skittles"];

}

function addElementToArray(array){
	array.push("A Christmas Story");
	return array;
}

function accessElementFromArray(array){
	return array[2];
}

function replaceElementInArray(array){
  array[1]="Carter";
	return array[1];
}

function removeElementFromArray(dishesArray){
	dishesArray.splice(2,3,"Roast Chicken");
	return dishesArray
}

function iterateArray(numArr){
  var newNums = [];
  numArr.forEach(function(num) {
    newNums.push(num + 5);
  });
  return newNums;
}