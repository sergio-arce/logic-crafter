/**
  
  5. Longest Palindromic Substring - Medium
 
  Given a string s, return the longest palindromic substring in s.

  Example 1:
    Input: s = "babad"
    Output: "bab"
    Explanation: "aba" is also a valid answer.

  Example 2:
    Input: s = "cbbd"
    Output: "bb"

*/

/**
 * @param {string} s
 * @return {string}
 */
export function longestPalindrome(s: string): string {
  const n = s.length
  if (n === 0) return ''

  let start = 0
  let maxLength = 1

  // Recorremos cada posición como posible center
  for (let center = 0; center < n; center++) {
    // --- Caso impar: palíndromo con un solo carácter en el center ---
    let left = center
    let right = center // caso impar
    while (left >= 0 && right < n && s[left] === s[right]) {
      const currentLength = right - left + 1
      if (currentLength > maxLength) {
        start = left
        maxLength = currentLength
      }
      left--
      right++
    }

    // --- Caso par: palíndromo con dos caracteres en el center ---
    left = center
    right = center + 1 // caso par
    while (left >= 0 && right < n && s[left] === s[right]) {
      const currentLength = right - left + 1
      if (currentLength > maxLength) {
        start = left
        maxLength = currentLength
      }
      left--
      right++
    }
  }

  // Devolvemos la subcadena palíndroma más larga
  return s.substring(start, start + maxLength)
}

/**
 *  option b
 */
// export function longestPalindrome(s: string): string {
//   const n = s.length
//   if (n === 0) return ''

//   let start = 0
//   let maxLength = 1

//   // Tabla para marcar si la subcadena s[i..j] es un palíndromo
//   const palindrome = Array.from({ length: n }, () => Array(n).fill(false))

//   // Todos los caracteres individuales son palíndromos
//   for (let i = 0; i < n; i++) {
//     palindrome[i][i] = true
//   }

//   // Recorremos todas las longitudes posibles de subcadenas (desde 2 hasta n)
//   for (let length = 2; length <= n; length++) {
//     for (let i = 0; i <= n - length; i++) {
//       const j = i + length - 1

//       // Si los extremos son iguales, puede ser palíndromo
//       if (s[i] === s[j]) {
//         if (length === 2) {
//           // Subcadena de 2 caracteres iguales → palíndromo
//           palindrome[i][j] = true
//         } else {
//           // Subcadena más larga → depende de si la subcadena interior es palíndromo
//           palindrome[i][j] = palindrome[i + 1][j - 1]
//         }

//         // Actualizamos el palíndromo más largo si es necesario
//         if (palindrome[i][j] && length > maxLength) {
//           start = i
//           maxLength = length
//         }
//       }
//     }
//   }

//   return s.substring(start, start + maxLength)
// }
