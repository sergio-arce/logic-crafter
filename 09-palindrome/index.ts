/**
9. Palindrome Number
  Easy
  Given an integer x, return true if x is a palindrome, and false otherwise.
  
  Example 1:
  
  Input: x = 121
  Output: true
  Explanation: 121 reads as 121 from left to right and from right to left.

  Example 2:
  
  Input: x = -121
  Output: false
  Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
  
  Example 3:
  
  Input: x = 10
  Output: false
  Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

  Follow up: Could you solve it without converting the integer to a string?
*/



/**
 * @param {number} x
 * @return {boolean}
 */
export function isPalindrome(x: number): boolean {  
  // All negative numbers aren't palindrome
  if (x < 0) return false;
  
  // Single digit are always palindrome
  if (x < 10) return true;

  let reversed = 0
  let remaining = x  // restantes
  
  while (remaining > 0) {
    const lastDigit = remaining % 10        // Extract the last digit 
    reversed = reversed * 10 + lastDigit    // Build the reversed number
    remaining = Math.floor(remaining / 10)  // Remove the last digit
  }
  
  return x === reversed
}


// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// export function isPalindrome(x: number):boolean {
//   const xString = String(x)
//   const reverseXString = xString.split('').reverse().join('')
//   return xString === reverseXString
// }