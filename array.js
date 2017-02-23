'use strict';
function createArray() {
	return ["snickers", "hundred grand", "kitkat", "skittles"];
}

function addElementToArray(arr) {
	arr.push('A Christmas Story');
	return arr;
}

function accessElementFromArray(q) {
	return q[2];
}

function replaceElementInArray(q) {
	// body...
	q[1]="Carter";
	return q[1];
}

function removeElementFromArray(dishesArr){
  dishesArr.splice(2, 2, "Roast Chicken");
  return dishesArr;
}

function iterateArray(arr) {
	var newarray=[];
	arr.forEach(function(item){
		newarray.push(item +5);
	});
	return newarray;

}