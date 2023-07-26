function findSecondSmallest(arr) {
    if (arr.length < 2) {
      return "Array should have at least two elements";
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (const num of arr) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    return secondSmallest === Infinity ? "No second smallest element found" : secondSmallest;
  }
  
  // Call The function
  const inputArr = [8,9,7,6,5,4];
  const secondSmallest = findSecondSmallest(inputArr);
  console.log(secondSmallest);