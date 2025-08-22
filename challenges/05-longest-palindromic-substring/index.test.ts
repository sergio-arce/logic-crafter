import { longestPalindrome } from './index'
describe('05 longest palindromic substring', () => {
  const testCases = [
    {
      string: 'babad',
      expected: 'bab', // "aba" también sería válido
      description:
        'should return "bab" (or "aba") for a string with multiple palindromes',
    },
    {
      string: 'cbbd',
      expected: 'bb',
      description:
        'should return "bb" for a string with a simple even-length palindrome',
    },
    {
      string: 'a',
      expected: 'a',
      description:
        'should return the same single character for a string of length 1',
    },
    {
      string: 'ac',
      expected: 'a',
      description:
        'should return the first character for a string with no multi-character palindrome',
    },
    {
      string: 'racecar',
      expected: 'racecar',
      description:
        'should return the full string when the entire string is a palindrome',
    },
    {
      string: 'forgeeksskeegfor',
      expected: 'geeksskeeg',
      description: 'should return the longest palindrome in a longer string',
    },
    {
      string: '',
      expected: '',
      description: 'should return an empty string for an empty input',
    },
  ]

  testCases.forEach(({ description, string, expected }) => {
    test(description, () => {
      expect(longestPalindrome(string)).toBe(expected)
    })
  })
})
