class LinkedList {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

/**
 * 
 * @param {LinkedList} head
 * @returns {LinkedList}
 */

function findLoop(head) {
  let first = head.next
  let second = head.next.next

  while (first !== second) {
    first = first.next
    second = second.next.next
  }

  first = head
  while (first !== second) {
    first = first.next
    second = second.next
  }

  return first
}

// O(n) time | O(1) space, where n is the number of nodes in the Linked List