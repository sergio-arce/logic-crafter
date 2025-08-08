import { lengthOfLastWord } from './index'

describe('58 length of last word', () => {
  const testCases = [
    {
      input: 'Hello World',
      expected: 5,
      description: 'should return 5 of last word "Hello World"',
    },
    {
      input: '   fly me   to   the moon  ',
      expected: 4,
      description: 'should return 4 of last word "moon"',
    },
    {
      input: 'luffy is still joyboy',
      expected: 6,
      description: 'should return 6 of last word "joyboy"',
    },
    {
      input: '',
      expected: 0,
      description: 'returns 0 for empty string',
    },
    {
      input: '     ',
      expected: 0,
      description: 'returns 0 for string with only spaces',
    },
  ]

  testCases.forEach(({ description, input, expected }) => {
    it(description, () => {
      expect(lengthOfLastWord(input)).toBe(expected)
    })
  })
})
