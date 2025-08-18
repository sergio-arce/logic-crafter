import { mySqrt } from './index'

describe('69 sqrt', () => {
  const testCases = [
    {
      input: 4,
      expected: 2,
      description:
        'should return exact square root for perfect squares (4 -> 2)',
    },
    {
      input: 8,
      expected: 2,
      description:
        'should return floored square root for non-perfect squares (8 -> 2)',
    },
    {
      input: 0,
      expected: 0,
      description: 'should handle zero correctly (0 -> 0)',
    },
    {
      input: 1,
      expected: 1,
      description: 'should handle smallest non-zero input (1 -> 1)',
    },
    {
      input: 2147395599,
      expected: 46339,
      description:
        'should handle large numbers correctly (2147395599 -> 46339)',
    },
    {
      input: 2,
      expected: 1,
      description:
        'should return correct value for smallest non-perfect square (2 -> 1)',
    },
    {
      input: -9,
      expected: NaN,
      description:
        'should return NaN (or handle error) for negative inputs (-9 -> NaN)',
    },
  ]

  testCases.forEach(({ input, expected, description }) => {
    test(description, () => {
      expect(mySqrt(input)).toBe(expected)
    })
  })
})
