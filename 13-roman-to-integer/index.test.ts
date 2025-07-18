import { romanToInt } from './index';

describe('roman to integer', () => { 

  /**
   * Valid Cases
   */
  const validTestCases = [
    { input: 'III', expected: 3 },
    { input: 'LVIII', expected: 58 },
    { input: 'MCMXCIV', expected: 1994 },
  ] 
  
  validTestCases.forEach(({ input, expected }) => {
    test(`should return ${expected} for the input ${input}`, () => {
      expect(romanToInt(input)).toEqual(expected)
     }) 
  })


  /**
   * Invalid Cases
   */
  const invalidTestCases = [
    { input: 'Z', expectedError: 'Invalid roman numeral' },
    { input: 'ABC', expectedError: 'Invalid roman numeral' },
    { input: 'lc', expectedError: 'Invalid roman numeral' },
  ] 
  
  invalidTestCases.forEach(({ input, expectedError }) => {
    test(`should throw error for invalid input ${input}`, () => {
      expect(() => romanToInt(input)).toThrow(expectedError);
    });
  });
})