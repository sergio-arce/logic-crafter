/**
  
  3. Longest Substring Without Repeating Characters - Medium
 
  Given a string s, find the length of the longest substring without duplicate characters.

  Example 1:
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.
  
  Example 2:
    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.
  
  Example 3:
    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

  Constraints:
  s consists of English letters, digits, symbols and spaces.

*/

/**
 * @param {string} s
 * @return {number}
 */
export function lengthOfLongestSubstring(s: string): number {
  // Object to store the last seen index of each character
  const lastIndex: Record<string, number> = {}
  let start = 0
  let maxLength = 0

  for (let end = 0; end < s.length; end++) {
    const char = s[end]

    // If the character was seen before and is inside the current window,
    // move the start to one position after its last occurrence
    if (lastIndex[char] !== undefined && lastIndex[char] >= start) {
      start = lastIndex[char] + 1
    }

    // Update the last seen index of the character
    lastIndex[char] = end

    // Update the maximum length of substring found so far
    maxLength = Math.max(maxLength, end - start + 1)
  }

  return maxLength
}

/**
 *  use Map

  export function lengthOfLongestSubstring(s: string): number {
    const map = new Map<string, number>()
    let start = 0
    let maxLength = 0

    for (let end = 0; end < s.length; end++) {
      const char = s[end]

      if (map.has(char) && map.get(char)! >= start) {
        start = map.get(char)! + 1
      }

      map.set(char, end)

      maxLength = Math.max(maxLength, end - start + 1)
    }

    return maxLength
  }

 */
