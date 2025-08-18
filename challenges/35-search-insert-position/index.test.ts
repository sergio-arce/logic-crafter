import { searchInsert } from './index'

describe('35 search insert position', () => {
  const testCases = [
    {
      nums: [1, 3, 5, 6],
      target: 5,
      description:
        'should returns 2 when target is found in the middle of the [1, 3, 5, 6]',
      expected: 2,
    },
    {
      nums: [1, 3, 5, 6],
      target: 2,
      description:
        'should returns 1 when target should be placed between elements',
      expected: 1,
    },
    {
      nums: [1, 3, 5, 6],
      target: 7,
      description:
        'should returns length of array when target is greater than all elements',
      expected: 4,
    },
    {
      nums: [],
      target: 5,
      description: 'should returns 0 when array is empty',
      expected: 0,
    },
    {
      nums: [-5, -3, 0, 2],
      target: -4,
      description:
        'should negative numbers and returns correct insertion index',
      expected: 1,
    },
  ]

  testCases.forEach(({ description, nums, target, expected }) => {
    it(description, () => {
      expect(searchInsert(nums, target)).toBe(expected)
    })
  })
})
