import { climbStairs } from './index'

describe('70 climbing stairs', () => {
  const testCases = [
    {
      n: 1,
      expected: 1,
      description: 'should return 1 when n = 1',
    },
    {
      n: 2,
      expected: 2,
      description: 'should return 2 when n = 2',
    },
    {
      n: 3,
      expected: 3,
      description: 'should return 3 when n = 3',
    },
    {
      n: 4,
      expected: 5,
      description: 'should return 5 when n = 4',
    },
    {
      n: 5,
      expected: 8,
      description: 'should return 8 when n = 5',
    },
    {
      n: 10,
      expected: 89,
      description: 'should return 89 when n = 10',
    },
  ]

  testCases.forEach(({ description, n, expected }) => {
    test(description, () => {
      expect(climbStairs(n)).toBe(expected)
    })
  })
})
