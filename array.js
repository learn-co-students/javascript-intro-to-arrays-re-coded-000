'use strict';
function createArray() {
    var random = new Array();
      return random = ["snickers", "hundred grand", "kitkat", "skittles"];
}
function replaceElementInArray(names) {
  names[1] = "Carter";
  return names[1];
}

function addElementToArray(practice) {
  practice.push("A Christmas Story");
  return practice;
}
function accessElementFromArray(item) {
  return item[2];
}
function removeElementFromArray(dishes) {
  dishes.splice(2, 2, "Roast Chicken");
  return dishes;
}
function iterateArray(numbers) {
  var num = new Array();
  numbers.forEach(function(number) {
      num.push( number + 5 );
  });
  return num;
};