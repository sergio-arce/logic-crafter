import { isPalindrome } from './index';


describe('palindrome', () => {

  const testCases = [
    { input: 121, expected: true },
    { input: -121, expected: false },
    { input: 10, expected: false },
    { input: 12321, expected: true },
    { input: 0, expected: true }
  ]
  
  testCases.forEach(({ input, expected }) => {
    it(`shuold return ${expected} for ${input}`, () => {
      expect(isPalindrome(input)).toBe(expected)
    })
  })
  
})