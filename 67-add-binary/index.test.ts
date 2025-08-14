import { addBinary } from './index'

describe('67 add binary', () => {
  const testCases = [
    {
      a: '11',
      b: '1',
      output: '100',
      description: 'should handle single digit binary addition (11 + 1 = 100)',
    },
    {
      a: '1010',
      b: '1011',
      output: '10101',
      description:
        'should handle multi-digit binary addition with multiple carryovers',
    },
    {
      a: '0',
      b: '0',
      output: '0',
      description: 'should return zero when adding two zeros (0 + 0 = 0)',
    },
    {
      a: '1111',
      b: '1',
      output: '10000',
      description:
        'should handle carryover propagating through all digits (1111 + 1 = 10000)',
    },
  ]

  testCases.forEach(({ description, a, b, output }) => {
    it(description, () => {
      expect(addBinary(a, b)).toBe(output)
    })
  })
})
