/**

  67. Add Binary - Easy
 
  Given two binary strings a and b, return their sum as a binary string.

  Example 1:

    Input: a = "11", b = "1"
    Output: "100"
  
  Example 2:

    Input: a = "1010", b = "1011"
    Output: "10101"

  Constraints:
    1 <= a.length, b.length <= 104
    a and b consist only of '0' or '1' characters.
    Each string does not contain leading zeros except for the zero itself.

*/

export function addBinary(a: string, b: string): string {
  let carry = 0
  let result = ''
  const maxLength = Math.max(a.length, b.length)

  for (let i = 0; i < maxLength || carry > 0; i++) {
    // Obtiene el dígito actual de cada cadena (comenzando desde el final)
    // Si no hay más dígitos, usa 0 como valor por defecto
    const bitA = i < a.length ? parseInt(a[a.length - 1 - i]) : 0
    const bitB = i < b.length ? parseInt(b[b.length - 1 - i]) : 0

    const sum = bitA + bitB + carry
    // Calcula el bit resultante:
    // Se antepone al resultado (porque procesamos de derecha a izquierda)
    result = (sum % 2) + result
    // Calcula el nuevo acarreo:
    // Math.floor(sum / 2) será 1 si sum >= 2, 0 en otro caso
    carry = Math.floor(sum / 2)
  }

  return result
}
