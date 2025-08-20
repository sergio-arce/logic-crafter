import { arrayToList, listToArray } from '../../data-structures/list-node'
import { deleteDuplicates } from './index'

describe('83 remove duplicate from sorted list', () => {
  const testCases = [
    {
      input: [1, 1, 2],
      expected: [1, 2],
      description: 'should remove duplicates: [1,1,2] → [1,2]',
    },
    {
      input: [1, 1, 2, 3, 3],
      expected: [1, 2, 3],
      description:
        'should remove beginning and end duplicates: [1,1,2,3,3] → [1,2,3]',
    },
    {
      input: [1, 2, 2, 3, 4, 4],
      expected: [1, 2, 3, 4],
      description:
        'should remove multiple duplicate groups: [1,2,2,3,4,4] → [1,2,3,4]',
    },
    {
      input: [1],
      expected: [1],
      description: 'should handle single element: [1] → [1]',
    },
    {
      input: [],
      expected: [],
      description: 'should handle empty list: [] → []',
    },
    {
      input: [1, 1, 1, 1],
      expected: [1],
      description: 'should remove all duplicates: [1,1,1,1] → [1]',
    },
    {
      input: [1, 2, 3, 4],
      expected: [1, 2, 3, 4],
      description: 'should return unique list unchanged: [1,2,3,4] → [1,2,3,4]',
    },
  ]

  testCases.forEach(({ description, input, expected }) => {
    test(description, () => {
      const head = arrayToList(input)
      const result = deleteDuplicates(head)
      expect(listToArray(result)).toEqual(expected)
    })
  })
})
