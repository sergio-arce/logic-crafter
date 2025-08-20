import { arrayToList, listToArray } from '../../data-structures/list-node'
import { addTwoNumbers } from './index'

describe('02 add two numbers', () => {
  const testCases = [
    {
      l1: [2, 4, 3],
      l2: [5, 6, 4],
      expected: [7, 0, 8],
      description:
        'should add two numbers with same length: [2,4,3] + [5,6,4] → [7,0,8]',
    },
    {
      l1: [0],
      l2: [0],
      expected: [0],
      description: 'should handle zeros: [0] + [0] → [0]',
    },
    {
      l1: [9, 9, 9, 9, 9, 9, 9],
      l2: [9, 9, 9, 9],
      expected: [8, 9, 9, 9, 0, 0, 0, 1],
      description:
        'should handle carry with different lengths: [9,9,9,9,9,9,9] + [9,9,9,9] → [8,9,9,9,0,0,0,1]',
    },
    {
      l1: [1],
      l2: [9, 9, 9],
      expected: [0, 0, 0, 1],
      description: 'should handle carry propagation: [1] + [9,9,9] → [0,0,0,1]',
    },
    {
      l1: [5],
      l2: [5],
      expected: [0, 1],
      description: 'should handle single digit carry: [5] + [5] → [0,1]',
    },
    {
      l1: [1, 8],
      l2: [0],
      expected: [1, 8],
      description: 'should handle zero as second number: [1,8] + [0] → [1,8]',
    },
    {
      l1: [0],
      l2: [1, 2, 3],
      expected: [1, 2, 3],
      description:
        'should handle zero as first number: [0] + [1,2,3] → [1,2,3]',
    },
    {
      l1: [9],
      l2: [1],
      expected: [0, 1],
      description: 'should handle carry from single digits: [9] + [1] → [0,1]',
    },
    {
      l1: [2, 7, 4],
      l2: [5, 3, 6],
      expected: [7, 0, 1, 1],
      description:
        'should handle multiple carries: [2,7,4] + [5,3,6] → [7,0,1,1]',
    },
  ]

  testCases.forEach(({ l1, l2, expected, description }) => {
    test(description, () => {
      const result = addTwoNumbers(arrayToList(l1), arrayToList(l2))
      expect(listToArray(result)).toEqual(expected)
    })
  })
})
