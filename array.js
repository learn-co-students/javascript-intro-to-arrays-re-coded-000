'use strict';
function createArray(){
	var array = ["snickers", "hundred grand", "kitkat", "skittles"];
	return array;
}

function addElementToArray(array) {
 array.push("A Christmas Story");
 return array;
}

function accessElementFromArray(array){
	return array[2];
}

function replaceElementInArray(array){
	return array[1]="Carter";
}

function removeElementFromArray(array){
	array.splice(2,1,'Roast Chicken');
	array.splice(3,1);
	return array;
}

function iterateArray(array){
	var newArray=[];
	array.forEach(function(item){newArray.push(item+5)});
	return newArray;
}