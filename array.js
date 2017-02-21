'use strict';

function createArray(){
	return ["snickers","hundred grand","kitkat","skittles"]
}

function addElementToArray(addToArr){
  addToArr.push("A Christmas Story");
  return addToArr
}

function accessElementFromArray(ThirdItemArr){
	return ThirdItemArr[2];
}

function replaceElementInArray(nameArr){
	nameArr[2] = "Carter";
	return nameArr[2];
}

function removeElementFromArray(dishesArr){
	dishesArr.splice(2,3,"Roast Chicken");
	return dishesArr;
}


function iterateArray(numArr){
  var newNums = [];
  numArr.forEach(function(num) {
    newNums.push(num + 5);
  });
  return newNums;
}
