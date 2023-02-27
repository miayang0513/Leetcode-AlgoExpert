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
 * @returns {LinkedList}
 */

function shiftLinkedList(head, k) {
  let length = 1
  let originalTail = head

  while (originalTail.next !== null) {
    length++
    originalTail = originalTail.next
  }

  const newOffset = Math.abs(k) % length

  if (newOffset === 0) return head
  
  const newTailIndex = k > 0 ? length - newOffset - 1 : newOffset - 1
  let newTail = head

  for (let i = 0; i < newTailIndex; i++) {
    newTail = newTail.next
  }

  const newHead = newTail.next
  originalTail.next = head
  newTail.next = null

  return newHead
}
// O(n) time | O(1) space, where n is the number of nodes in the Linked List
