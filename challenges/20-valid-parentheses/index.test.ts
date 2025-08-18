import { validParentheses } from './index'
describe('valid parentheses', () => {
  const testCases = [
    { input: '()', expected: true },
    { input: '()[]{}', expected: true },
    { input: '(]', expected: false },
    { input: '([])', expected: true },
    { input: '([)]', expected: false },
    // Casos adicionales para mayor cobertura
    { input: '{[]}', expected: true },
    { input: '{[()]}', expected: true },
    { input: '((()))', expected: true },
    { input: '[{()}]', expected: true },
    { input: '[(])', expected: false },
    { input: '', expected: true }, // Caso borde: string vacío
    { input: '[', expected: false }, // Paréntesis sin cerrar
    { input: ']', expected: false }, // Paréntesis sin abrir
  ]

  testCases.forEach(({ input, expected }) => {
    test(`should return ${expected} for input '${input}'`, () => {
      expect(validParentheses(input)).toBe(expected)
    })
  })
})
