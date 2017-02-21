/*'use strict';
function createArray(){
	 return ["snickers", "hundred grand", "kitkat", "skittles"];
}
function addElementToArray(array){
	array.push("A Christmas Story");
	return array ;
}
function accessElementFromArray(array){
	return array[2];
}
function replaceElementInArray(array){
	array[1] = "Carter"
}
function removeElementFromArray(array){
	var new = arry.splice(2,2,"Roast Chicken")
	return new
}
function iterateArray(numArr){
  var newNums = [];
  numArr.forEach(function(num) {
    newNums.push(num + 5);
  });
  return newNums;
}*/
'use strict';

function createArray(){
  return ["snickers", "hundred grand", "kitkat", "skittles"];

}

function addElementToArray(movieArr){
  movieArr.push("A Christmas Story");
  return movieArr;
}

function accessElementFromArray(statesArr){
  return statesArr[2];
}

function replaceElementInArray(namesArr){
  namesArr[1] = "Carter";
  return namesArr[1];
}

function removeElementFromArray(dishesArr){
  dishesArr.splice(2, 2, "Roast Chicken");
  return dishesArr;
}

function iterateArray(numArr){
  var newNums = [];
  numArr.forEach(function(num) {
    newNums.push(num + 5);
  });
  return newNums;
}
