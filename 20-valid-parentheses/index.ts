/**
20. Valid Parentheses
  Easy
  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

  An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.
  

  Example 1:

  Input: s = "()"
  Output: true

  Example 2:

  Input: s = "()[]{}"
  Output: true

  Example 3:

  Input: s = "(]"
  Output: false

  Example 4:

  Input: s = "([])"
  Output: true

  Example 5:

  Input: s = "([)]"
  Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
export function validParentheses(s: string): boolean {
  const stack: string[] = []

  const pairs: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '[',
  }

  for (const char of s) {
    if (pairs[char]) {
      // Si encontramos un cierre, verificamos que coincida con el último abierto
      if (stack.pop() !== pairs[char]) {
        return false
      }
    } else {
      // Si es una apertura, la agregamos a la pila
      stack.push(char)
    }
  }

  // La pila debe estar vacía al final
  return stack.length === 0
}
