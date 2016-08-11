// exercises for eloquent javascript chapter 4

function range(start, end) {
  var range = [];
  var step = arguments[2] || 1;

  if (step < 0) {
    for (var i = start; i >= end; i += step) {
      range.push(i);
    }
  } else {
    for (var i = start; i <= end; i += step) {
      range.push(i);
    }
  }

  return range;
}

function sum(array) {
  var sum = 0;

  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}
console.log(range(2, 10, 2));

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
