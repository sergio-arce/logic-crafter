import { removeDuplicates } from './index'

describe('Remove Duplicates from Sorted Array', () => {

    const testCases = [
        {input: [1, 1, 2], expected: 2, description: 'should return 2 and modify array to [1, 2] for input [1, 1, 2]' },
        {input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], expected: 5,  description: 'should return 5 and modify array to [0, 1, 2, 3, 4] for longer array with duplicates' },
        {input: [], expected: 0, description: 'should return 0 for empty array' },
        {input: [1], expected: 1, description: 'should return 1 for single element array [1]' }
    ]

    testCases.forEach(({ input, expected, description }) => {
        it(description, () => {
            expect(removeDuplicates(input)).toBe(expected)
        })
    })
})
