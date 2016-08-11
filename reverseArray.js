// exercises for eloquent javascript chapter 4

function reverseArray(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    newArray.unshift(array[i]);
  }

  return newArray;
}

function reverseArrayInPlace(array) {
  var temp;

  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
