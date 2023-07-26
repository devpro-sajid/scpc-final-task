function generateRandomPassword(length) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';
  
    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
    let password = '';
  
    const getRandomCharacter = (str) => {
      const randomIndex = Math.floor(Math.random() * str.length);
      return str.charAt(randomIndex);
    };
  
    // Generate the password with at least one character from each character set
    password += getRandomCharacter(uppercaseChars);
    password += getRandomCharacter(lowercaseChars);
    password += getRandomCharacter(numberChars);
    password += getRandomCharacter(specialChars);
  
    // Generate the remaining characters
    for (let i = password.length; i < length; i++) {
      password += getRandomCharacter(allChars);
    }
  
    return password;
  }
  
  // Call The Function
  const passwordLength = 8;
  const randomPassword = generateRandomPassword(passwordLength);
  console.log("Generated Password:", randomPassword);