import { ListNode, mergeTwoLists } from './index'

describe('merge two sorted lists', () => {
  test('should merges two sorted lists "[] and []"', () => {
    // List1: 1 -> 2 -> 4
    const list1 = new ListNode(1, new ListNode(2, new ListNode(4)))
    // List2: 1 -> 3 -> 4
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4)))
    const merged = mergeTwoLists(list1, list2)

    expect(merged?.val).toBe(1)
    expect(merged?.next?.val).toBe(1)
    expect(merged?.next?.next?.val).toBe(2)
    expect(merged?.next?.next?.next?.val).toBe(3)
    expect(merged?.next?.next?.next?.next?.val).toBe(4)
    expect(merged?.next?.next?.next?.next?.next?.val).toBe(4)
    expect(merged?.next?.next?.next?.next?.next?.next).toBeNull()
  })

  test('should returns empty list when both inputs are empty', () => {
    expect(mergeTwoLists(null, null)).toBeNull()
  })

  test('should returns the non-empty list when one input is empty', () => {
    const list2 = new ListNode(0)
    const merged = mergeTwoLists(null, list2)

    expect(merged?.val).toBe(0)
    expect(merged?.next).toBeNull()
  })
})
