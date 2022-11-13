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
function removeKthNodeFromEnd (head, k) {
  let counter = 0
  let first = head
  let second = head

  while (counter < k) {
    second = second.next
    counter++
  }

  if (second === null) {
    head.value = head.next.value
    head.next = head.next.next
    return
  }

  while (second.next !== null) {
    second = second.next
    first = first.next
  }
  first.next = first.next.next
}