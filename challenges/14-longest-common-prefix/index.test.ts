import { longestCommonPrefix } from './index'

describe('longest common prefix', () => {
  const testCases = [
    { input: ['flower', 'flow', 'flight'], expected: 'fl' },
    { input: ['dog', 'racecar', 'car'], expected: '' },
    { input: [], expected: '' },
  ]

  testCases.forEach(({ input, expected }) => {
    test(`should return "${expected}" for the input "${input}"`, () => {
      expect(longestCommonPrefix(input)).toBe(expected)
    })
  })
})
