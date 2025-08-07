/**
14. Longest Common Prefix
    Easy

  Write a function to find the longest common prefix string amongst an array of strings.
  If there is no common prefix, return an empty string "".

  Example 1:

  Input: strs = ["flower","flow","flight"]
  Output: "fl"

  Example 2:

  Input: strs = ["dog","racecar","car"]
  Output: ""
 
  Explanation: There is no common prefix among the input strings.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return ''

  let prefix = ''
  const firstWord = strs[0]

  for (let i = 0; i < firstWord.length; i++) {
    const firstChar = firstWord[i]

    for (let j = 0; j < strs.length; j++) {
      // Condición crítica: verifica dos casos:
      // 1. Si la palabra actual (strs[j]) es más corta que el índice actual (i)
      //    (no puede haber prefijo común más allá de la palabra más corta)
      // 2. Si el carácter en la posición i de la palabra actual (strs[j][i])
      //    no coincide con el carácter de referencia (firstChar)
      if (i >= strs[j].length || strs[j][i] != firstChar) {
        return prefix // Si alguna condición falla, retornamos el prefijo acumulado
      }
    }
    // Si todos los caracteres coincidieron, añadimos el carácter al prefijo
    prefix += firstChar
  }

  return prefix
}
