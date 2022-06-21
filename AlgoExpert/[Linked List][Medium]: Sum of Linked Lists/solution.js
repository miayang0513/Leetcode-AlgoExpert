// This is an input class. Do not edit.
class LinkedList {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

/**
 * 
 * @param {LinkedList} linkedListOne 
 * @param {LinkedList} linkedListTwo 
 * @returns {LinkedList}
 */
function sumOfLinkedLists (linkedListOne, linkedListTwo) {
  let fakeHead = new LinkedList(null)
  let tail = fakeHead
  let carry = 0
  while (linkedListOne && linkedListTwo) {
    const currentSum = linkedListOne.value + linkedListTwo.value + carry
    const currentValue = currentSum % 10
    const currentNode = new LinkedList(currentValue)
    tail.next = currentNode
    tail = currentNode
    linkedListOne = linkedListOne.next
    linkedListTwo = linkedListTwo.next

    carry = Math.floor(currentSum / 10)
  }

  if (linkedListOne) {
    tail.next = linkedListOne
    carry !== 0 && tail.next.value++
  } else if (linkedListTwo) {
    tail.next = linkedListTwo
    carry !== 0 && tail.next.value++
  } else if (carry !== 0) {
    tail.next = new LinkedList(carry)
  }

  return fakeHead.next
}
