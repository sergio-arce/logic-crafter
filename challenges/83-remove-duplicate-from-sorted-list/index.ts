/**

  83. Remove Duplicates from Sorted List - Easy
 
  Given the head of a sorted linked list, delete all duplicates such that each element appears only once. 
  Return the linked list sorted as well.
  
  Example 1:
    Input: head = [1,1,2]
    Output: [1,2]

  Example 2:
    Input: head = [1,1,2,3,3]
    Output: [1,2,3]

*/

import { ListNode } from '../../data-structures/list-node'

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head

  let current = head

  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next // duplicate delete
    } else {
      current = current.next
    }
  }

  return head
}
