class LinkedList {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

/**
 * 
 * @param {LinkedList} headOne
 * @param {LinkedList} headTwo
 * @returns {LinkedList}
 */

function mergeLinkedLists(headOne, headTwo) {
  let one = headOne
  let two = headTwo
  let prev = null

  while (one !== null && two !== null) {
    if (one.value > two.value) {
      if (prev !== null) prev.next = two
      prev = two
      two = two.next
      prev.next = one
    } else {
      prev = one
      one = one.next
    }
  }

  if (one === null) {
    prev.next = two
  }

  return headOne.value > headTwo.value ? headTwo : headOne
}

// O(n + m) time | O(1) space, where n is the number of nodes in the first Linked List
// and m is the number of nodes in the second Linked List