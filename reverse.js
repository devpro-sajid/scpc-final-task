const reverseString = originalString => {
  let reversedString = '';
  for (let i = originalString.length - 1; i >= 0; i--) {
    reversedString += originalString[i];
  }
  return reversedString;
};

// Function Call
const originalString = "Make Reverse";
const result = reverseString(originalString);
console.log(result);
