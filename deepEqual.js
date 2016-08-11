// exercises for eloquent javascript chapter 4
function deepEqual(a, b) {
  var propsInA = 0;
  var propsInB = 0;

  if (a === b) {
    return true;
  }

  if (typeof a !== "object" || a == null ||
      typeof b !== "object" || b == null) {
    return false;
  }

  for (var prop in a) {
    propsInA += 1;
  }

  for (var prop in b) {
    propsInB += 1;

    if (!a[prop] || !deepEqual(a[prop], b[prop])) {
      return false;
    }
  }

  return propsInA === propsInB;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
