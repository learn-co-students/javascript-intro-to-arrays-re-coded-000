'use strict';
function createArray() {
  return ["snickers", "hundred grand", "kitkat", "skittles"]
}
function addElementToArray(arr) {
  var e='A Christmas Story';
  arr.push(e);
  return arr;
}
function accessElementFromArray(arr) {
   return arr[2];
}
function replaceElementInArray(arr) {
   arr[2]="Carter";
   return arr[2];
}
function removeElementFromArray(arr) {
  arr.splice(2,2,"Roast Chicken") ;
  return arr;
}
function iterateArray(arr) {
  var new_arr=[];
  arr.forEach(function(n){
  if(n > 5) {
    new_arr.push(n) ;  new_arr.push(n+5) ;
  }
  });
  return new_arr.sort(function(a, b){return a-b});
}
iterateArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ;
