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
  let length = 0
  let currentNode = head

  while (currentNode) {
    length++
    currentNode = currentNode.next
  }

  if (k === length) {
    head.value = head.next.value
    head.next = head.next.next
  } else {
    let count = 0
    currentNode = head
    while (count < length - k) {
      const nextNode = currentNode.next
      if (count === length - k - 1) {
        currentNode.next = nextNode.next
      }
      currentNode = nextNode
      count++
    }
  }
}