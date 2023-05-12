function isPalindrome(word) {
  // Write your algorithm here
  // create a function that takes a string as an argument
  // evaluate that argument in the block of code to check if the argument is a palindrome
  // if the word is a plindrome
  // return true, otherise false
}

/* 
  a function that thats a string as an input

    if the input evaluates as a palindrome
      return true
    else
      return false
  
  use the function to accept a string as an argument to test the code
*/

function isPalindrome(string) {
  if (string === string.split('').reverse().join('')) {
    return true
  }
  else {
    return false
  }
  
}

isPalindrome("racecar")

/*
  I created a function that takes in a string as an argument
  I used an if else statement to evaluate whether a string is palindrome
  If a string is a palindrome, the return should state true, otherwise false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
