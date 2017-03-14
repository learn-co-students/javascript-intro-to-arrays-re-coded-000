'use strict';
function createArray(){
	var array=["snickers", "hundred grand", "kitkat","skittles"];
	return (array);
}
function addElementToArray(item){
	item.push("A Christmas Story" );
	return item;
}
function accessElementFromArray(items){
return items[2];
}
function replaceElementInArray(array){
	return array[1]="Carter"
}
function removeElementFromArray(array){
	array.splice(2,3,"Roast Chicken");
	return array;
}
function iterateArray(numbers){
	var array=[];
	numbers.forEach(function(item){
	array.push(item + 5);
	})
		return array;

}