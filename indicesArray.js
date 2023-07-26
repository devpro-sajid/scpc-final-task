function indicesArray(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    for (let i = 0; i < arr.length; i++) {
      const sum = arr[left] + arr[right];
  
      if (sum === target) {
        console.log(sum)
        return [left, right];
        
      } else if (sum < target) {
        left++
      } else {
        console.log(sum)
       right--
      }
    }
  
    return [];
  }
  
  // Call The Function
  const inputArr =[1, 3, 6, 8, 11, 15];
  const targetValue = 9;
  const outputIndices = indicesArray(inputArr, targetValue);
  console.log(outputIndices); 