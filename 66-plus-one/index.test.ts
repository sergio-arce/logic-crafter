import { plusOne } from './index'

describe('66 plus one', () => {
  const testCases = [
    {
      digits: [1, 2, 3],
      output: [1, 2, 4],
      description: 'should increment last digit (123 → 124)',
    },
    {
      digits: [4, 3, 2, 1],
      output: [4, 3, 2, 2],
      description: 'should increment last digit (4321 → 4322)',
    },
    {
      digits: [8, 9],
      output: [9, 0],
      description: 'should be 0 last digit and increment next digit (89 → 90)',
    },
    {
      digits: [9],
      output: [1, 0],
      description: 'should handles single digit 9 (9 → 10)',
    },
    {
      digits: [9, 9],
      output: [1, 0, 0],
      description: 'should handles over across all digits (99 → 100)',
    },
  ]

  testCases.forEach(({ digits, output, description }) => {
    it(description, () => {
      expect(plusOne(digits)).toEqual(output)
    })
  })
})
