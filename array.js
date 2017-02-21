'use strict';

var arr=["snickers","hundred grand","kitkat","skittles"];
function createArray(){
	return arr;
}

function addElementToArray(array){
	array.push("A Christmas Story");
	return array;
}

function accessElementFromArray(array){
	return array[2];
}

function replaceElementInArray(array_of_names){
	return (array_of_names[1]="Carter");
}

function removeElementFromArray(array_of_dishes){
	array_of_dishes.splice(2,2);
	array_of_dishes.push("Roast Chicken");
	return array_of_dishes;
}

function iterateArray(array_of_number){
	var newNum=[];
	array_of_number.forEach(function(number){
		newNum.push(number+5);
	});
	return newNum;
}