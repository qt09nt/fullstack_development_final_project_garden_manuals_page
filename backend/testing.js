let myVariable = 45;
console.log(typeof myVariable); // returns "number"
console.log(typeof(myVariable)); // returns "number"

console.log(typeof(12345))

function isNumber(value) {
    return typeof value === 'number';
  }

  console.log(isNumber(42)); // true
  console.log(isNumber('hello')); // false
  console.log(isNumber(true)); // false

  console.log(isNumber(12345));
  