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

function modulo(a,b){
    if(b===0){
        throw new Error('Cannot calculate modulo with zero');
    }
    return a%b;
}

function calculate(a, b, operation) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Both inputs must be numbers.');
  }

  switch (operation) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    case '%':
        return modulo(a,b);
    default:
      throw new Error('Invalid operation');
  }
}

console.log(calculate(5, 2, '+')); // Output: 7
console.log(calculate(5, 2, '-')); // Output: 3
console.log(calculate(5, 2, '*')); // Output: 10
console.log(calculate(5, 2, '/')); // Output: 2.5
console.log(calculate(5, 0, '/')); // Throws an error
console.log(calculate(5,2,'%')); //Output: 1
console.log(calculate('a',2,'+')); // Throws an error