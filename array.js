'use strict';
function createArray() {
  var array=["snickers", "hundred grand", "kitkat", "skittles"];
  return array
}
function addElementToArray(array) {
  array.push("A Christmas Story");
  return array
}
function accessElementFromArray(array) {
  return array[2]
}
function replaceElementInArray(names) {
  return names[1]="Carter";
}
function removeElementFromArray(dishes) {
  dishes.splice(2,2,"Roast Chicken");
  return dishes;
}

function iterateArray(numbers) {
  var newNums=[];
numbers.forEach(function helper(number) {
  newNums.push(number+5)
})
return newNums
}
