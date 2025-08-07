/**
  28. Find the Index of the First Occurrence in a String - Easy
 
  Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, 
  or -1 if needle is not part of haystack.

  Example 1:

    Input: haystack = "sadbutsad", needle = "sad"
    Output: 0
    Explanation: "sad" occurs at index 0 and 6.
    The first occurrence is at index 0, so we return 0.

  Example 2:

    Input: haystack = "leetcode", needle = "leeto"
    Output: -1
    Explanation: "leeto" did not occur in "leetcode", so we return -1.

*/


export function findPosition(haystack: string, needle: string):number {
  if (needle === "") return 0
  
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let found = true
    
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        found = false
        break
      }
    }
    
    if (found) return i // return the position 
  }
  
  return -1 // if not found
};

// /**
//  * Method indexOf 
//  * - Time complexity: O(n * m)
//  * - Space Complexity: O(1)
//  */
// export function strStr(haystack: string, needle: string):number {
//   return haystack.indexOf(needle)
// };