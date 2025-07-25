/**
  21. Merge Two Sorted Lists
  Easy

  You are given the heads of two sorted linked lists list1 and list2.

  Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

  Return the head of the merged linked list.

  Example 1:

    Input: list1 = [1,2,4], list2 = [1,3,4]
    Output: [1,1,2,3,4,4]

  Example 2:

    Input: list1 = [], list2 = []
    Output: []
  
  Example 3:

    Input: list1 = [], list2 = [0]
    Output: [0]
  

  Constraints:

    The number of nodes in both lists is in the range [0, 50].
    Both list1 and list2 are sorted in non-decreasing order.

*/


export interface ListNode {
  val: number
  next: ListNode | null
}

// ListNode.ts
export const ListNode = function (
  this: ListNode,
  val?: number,
  next?: ListNode | null
) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
} as any 

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

export function mergeTwoLists(
  list1: ListNode | null, 
  list2: ListNode | null
): ListNode | null {

  const dummy = new ListNode()
  let current = dummy
  
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1
      list1 = list1.next
    } else {
      current.next = list2
      list2 = list2.next
    }
    current = current.next
  }
  
  current.next = list1 !== null ? list1 : list2
  
  return dummy.next
}