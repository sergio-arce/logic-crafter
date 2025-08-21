import { lengthOfLongestSubstring } from './index'

describe('03 longest substring without repeat character', () => {
  const testCases = [
    {
      str: 'abcabcbb',
      expected: 3,
      description: 'should return 3 for "abcabcbb" (substring "abc")',
    },
    {
      str: 'bbbbb',
      expected: 1,
      description: 'should return 1 for "bbbbb" (substring "b")',
    },
    {
      str: 'pwwkew',
      expected: 3,
      description: 'should return 3 for "pwwkew" (substring "wke")',
    },
    {
      str: '',
      expected: 0,
      description: 'should return 0 for empty string',
    },
    {
      str: 'abcdef',
      expected: 6,
      description:
        'should return 6 for "abcdef" (entire string without duplicates)',
    },
    {
      str: 'aab',
      expected: 2,
      description: 'should return 2 for "aab" (substring "ab")',
    },
    {
      str: 'dvdf',
      expected: 3,
      description: 'should return 3 for "dvdf" (substring "vdf")',
    },
    {
      str: 'a1b2c3!@#a1b2',
      expected: 9,
      description: 'should handle special characters and digits',
    },
    {
      str: 'hello  world',
      expected: 6,
      description: 'should handle strings with spaces',
    },
  ]

  testCases.forEach(({ description, str, expected }) => {
    test(description, () => {
      expect(lengthOfLongestSubstring(str)).toBe(expected)
    })
  })
})
