function romanToInteger(romanNumeral) {
    const romanNumeralsMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let integer = 0;
  
    for (let i = 0; i < romanNumeral.length; i++) {
      const currentNumeral = romanNumeral[i];
      const nextNumeral = romanNumeral[i + 1];
      const currentNumeralValue = romanNumeralsMap[currentNumeral];
      const nextNumeralValue = romanNumeralsMap[nextNumeral];
      
      if (nextNumeralValue > currentNumeralValue) {
        integer += nextNumeralValue - currentNumeralValue;
        i++;
      } else {
        integer += currentNumeralValue;
      }
    }
  
    return integer;
  }
  
  // Call the function
  const romanNumeral = "XXI";
  const result = romanToInteger(romanNumeral);
  console.log(result); // Output: 9