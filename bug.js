function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function calculate(a, b, operation) {
  switch (operation) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      throw new Error('Invalid operation');
  }
}

console.log(calculate(5, 2, '+')); // Output: 7
console.log(calculate(5, 2, '-')); // Output: 3
console.log(calculate(5, 2, '*')); // Output: 10
console.log(calculate(5, 2, '/')); // Output: 2.5
console.log(calculate(5, 0, '/')); // Throws an error
console.log(calculate(5, 2, '%')); // Throws an error