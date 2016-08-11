// exercises for eloquent javascript chapter 4

function arrayToList(array) {
  var list = null;

  for (var i = 0; i < array.length; i++) {
    list = prepend(array[array.length - 1 - i], list);
  }

  return list;
}

function listToArray(list) {
  var array = [];

  for (var node = list; node; node = node.rest) {
    array.push(node.value);
  }

  return array;
}

function prepend (element, list) {
  return {value: element, rest: list};
}

function nth (list, position) {
  if (!list) {
    return undefined;
  } else if (position === 0) {
    return list.value;
  } else {
    return nth(list.rest, position - 1);
  }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
