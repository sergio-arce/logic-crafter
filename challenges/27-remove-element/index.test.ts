import { removeElement } from './index'

describe('removeElement', () => {
  const testCases = [
    {
      val: 3,
      nums: [3, 2, 2, 3],
      expected: 2,
      expectedNums: [2, 2], // Solo importan los primeros `k` elementos
      description:
        'should remove all 3s and return k = 2 with nums modified to [2, 2, ...]',
    },
    {
      val: 2,
      nums: [0, 1, 2, 2, 3, 0, 4, 2],
      expected: 5,
      expectedNums: [0, 1, 3, 0, 4], // Orden no importa, pero deben ser estos valores
      description:
        'should remove all 2s and return k = 5 with nums modified to [0, 1, 3, 0, 4, ...]',
    },
    {
      val: 7,
      nums: [],
      expected: 0,
      expectedNums: [],
      description: 'should return 0 for empty array',
    },
    {
      val: 4,
      nums: [4, 4, 4],
      expected: 0,
      expectedNums: [],
      description:
        'should remove all 4s and return k = 0 with empty modified array',
    },
  ]

  testCases.forEach(({ val, nums, expected, expectedNums, description }) => {
    test(description, () => {
      const k = removeElement(nums, val)
      expect(k).toBe(expected)
      // Verifica que los primeros `k` elementos no contengan `val`
      expect(nums.slice(0, k)).not.toContain(val)
      // Verifica que coincidan con los elementos esperados (orden no importa)
      expect(expectedNums).toEqual(expect.arrayContaining(nums.slice(0, k)))
    })
  })
})
