// This is an input class. Do not edit.
class LinkedList {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

/**
 * 
 * @param {LinkedList} head 
 * @param {number} k
 */

// 1. mutated (no create new)
// 2. if the head is the node that's supposed to be removed, your function should simply mutate its value and next pointer.
// 3. linked list have at least k nodes. and k >= 2.
// 4. doesn't need to return anything.

function removeKthNodeFromEnd(head, k) {
  let first = head
  let second = head
  let count = 0

  while (count < k) {
    count++
    first = first.next
  }

  if (first === null) {
    const next = head.next
    head.next = next.next
    head.value = next.value
    return
  }
  
  while (first.next !== null) {
    first = first.next
    second = second.next
  }
  second.next = second.next.next
}

// O(n) time | O(1) space, where n is the number of nodes in the Linked List
