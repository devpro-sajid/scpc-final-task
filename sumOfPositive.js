const sumOfPositiveNumbers = numbers => numbers.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);

// Call the funtion
const numbers = [3,-4,5,-6,8,-2,6,-1];
const totalSum = sumOfPositiveNumbers(numbers);
console.log(totalSum);