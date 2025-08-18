/**

  69. Sqrt(x) - Easy
  Given a non-negative integer x, return the square root of x rounded down to the nearest integer. 
  The returned integer should be non-negative as well.

  You must not use any built-in exponent function or operator.
  For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

  Example 1:

    Input: x = 4
    Output: 2
    Explanation: The square root of 4 is 2, so we return 2.
  
  Example 2:

    Input: x = 8
    Output: 2
    Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

*/

export function mySqrt(x: number): number {
  if (x === 0) return 0
  if (x < 0) return NaN
  let left = 1
  let right = x
  let sqrt = 0

  // Binary search
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (mid * mid === x) {
      return mid

      // if mid^2 < x, search in the right half
    } else if (mid * mid < x) {
      left = mid + 1 // update left boundary
      sqrt = mid // updates the current best result
    } else {
      right = mid - 1 // update right boundary
    }
  }

  return sqrt
}
