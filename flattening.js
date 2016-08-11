// exercises for eloquent javascript chapter 5

var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
console.log(flattenArray(arrays));

function flattenArray (array) {
  return array.reduce(function (a, b) {
    return a.concat(b);
  });
}
// → [1, 2, 3, 4, 5, 6]
