/**
  2. Add Two Numbers - Medium
  
  You are given two non-empty linked lists representing two non-negative integers. 
  The digits are stored in reverse order, and each of their nodes contains a single digit. 
  Add the two numbers and return the sum as a linked list.
  You may assume the two numbers do not contain any leading zero, except the number 0 itself.

  Example 1:
    Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.

  Example 2:
    Input: l1 = [0], l2 = [0]
    Output: [0]

  Example 3:
    Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    Output: [8,9,9,9,0,0,0,1]

  The number of nodes in each linked list is in the range [1, 100].
*/

import { ListNode } from '../../data-structures/list-node'

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  //
  const resultHead = new ListNode(0)
  let current = resultHead
  let carry = 0

  while (l1 !== null || l2 !== null || carry !== 0) {
    // get current digits or 0 if null
    const digit1 = l1?.val ?? 0
    const digit2 = l2?.val ?? 0

    const sum = digit1 + digit2 + carry

    // calculate new carry and current digit
    carry = Math.floor(sum / 10)
    const digit = sum % 10

    // create new node with the digit
    current.next = new ListNode(digit)
    current = current.next

    if (l1 !== null) l1 = l1?.next
    if (l2 !== null) l2 = l2?.next
  }

  return resultHead.next
}
