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

function mergeLinkedLists (headOne, headTwo) {
  let one = headOne
  let two = headTwo
  let prev = null

  while (one && two) {
    if (one.value < two.value) {
      prev = one
      one = one.next
    } else {
      if (prev !== null) prev.next = two
      prev = two
      two = two.next
      prev.next = one
    }
  }

  if (!one) prev.next = two
  return headOne.value < headTwo.value ? headOne : headTwo
}
