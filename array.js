'use strict';
function createArray() {
  var arr = ["snickers", "hundred grand", "kitkat", "skittles"];
  return arr;
}

function addElementToArray(array) {
  array.push("A Christmas Story");
  return array;
}

function accessElementFromArray(states_arr) {
   return states_arr[2];
}

function replaceElementInArray(arr_of_names) {
  arr_of_names[1] = "Carter"
  return arr_of_names[1]
}

function removeElementFromArray(arr_of_dishes) {
  arr_of_dishes.splice(2, 2, 'Roast Chicken');  /*this will return the removed e */
  return arr_of_dishes
}

function iterateArray(arr_of_num) {
  var newNums = [];
   arr_of_num.forEach(function(num) {
     num = num + 5;
     newNums.push(num);
   });
   return newNums
}
