import { mergeTwoLists } from './index'
import { arrayToList, listToArray } from '../../data-structures/list-node'

describe('21 merge two sorted lists', () => {
  const testCases = [
    {
      list1: [1, 2, 4],
      list2: [1, 3, 4],
      expected: [1, 1, 2, 3, 4, 4],
      description:
        'should merge two sorted lists: [1,2,4] and [1,3,4] → [1,1,2,3,4,4]',
    },
    {
      list1: [],
      list2: [],
      expected: [],
      description:
        'should return empty list when both inputs are empty: [] and [] → []',
    },
    {
      list1: [],
      list2: [0],
      expected: [0],
      description:
        'should return second list when first is empty: [] and [0] → [0]',
    },
    {
      list1: [1, 2, 4],
      list2: [1, 3, 4],
      expected: [1, 1, 2, 3, 4, 4],
      description:
        'should merge lists with overlapping values: [1,2,4] and [1,3,4] → [1,1,2,3,4,4]',
    },
    {
      list1: [1, 3, 5],
      list2: [2, 4, 6],
      expected: [1, 2, 3, 4, 5, 6],
      description:
        'should merge interleaved sorted lists: [1,3,5] and [2,4,6] → [1,2,3,4,5,6]',
    },
    {
      list1: [5],
      list2: [1, 2, 3, 4, 6],
      expected: [1, 2, 3, 4, 5, 6],
      description:
        'should merge single element with longer list: [5] and [1,2,3,4,6] → [1,2,3,4,5,6]',
    },
    {
      list1: [1, 1, 1],
      list2: [2, 2, 2],
      expected: [1, 1, 1, 2, 2, 2],
      description:
        'should merge lists with repeated values: [1,1,1] and [2,2,2] → [1,1,1,2,2,2]',
    },
    {
      list1: [1, 5, 9],
      list2: [10, 20, 30],
      expected: [1, 5, 9, 10, 20, 30],
      description:
        'should merge non-overlapping lists: [1,5,9] and [10,20,30] → [1,5,9,10,20,30]',
    },
  ]

  testCases.forEach(({ list1, list2, expected, description }) => {
    test(description, () => {
      const result = mergeTwoLists(arrayToList(list1), arrayToList(list2))
      expect(listToArray(result)).toEqual(expected)
    })
  })
})
