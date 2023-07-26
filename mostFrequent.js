function findMostFrequentElement(arr) {
  const frequencyCounter = {};
  let mostFrequentElement;
  let maxFrequency = 0;
  
  for (const num of arr) {
    frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;

    if (frequencyCounter[num] > maxFrequency) {
      maxFrequency = frequencyCounter[num];
      mostFrequentElement = num;
    }
  }

  return mostFrequentElement;
}

// Call The Function
const inputArr = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const outputElement = findMostFrequentElement(inputArr);
console.log(outputElement); 