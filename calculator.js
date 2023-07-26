function calculate(num1, operator, num2) {
    if (operator === '+') {
      return num1 + num2;
    } else if (operator === '-') {
      return num1 - num2;
    } else if (operator === '*') {
      return num1 * num2;
    } else if (operator === '/') {
      return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
    } else {
      return 'Invalid operator';
    }
  }
  
  // Call the function
  const number1 = 15;
  const operator = '*';
  const number2 = 5;
  const result = calculate(number1, operator, number2);
  console.log(result); 