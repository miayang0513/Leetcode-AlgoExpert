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

function reverseLinkedList (head) {
  let prev = null
  let current = head

  while (current) {
    const next = current.next
    current.next = prev
    prev = current
    current = next
  }

  head = prev
  return head
}

// O(n) time | O(1) space, where n is the number of nodes in the Linked List
