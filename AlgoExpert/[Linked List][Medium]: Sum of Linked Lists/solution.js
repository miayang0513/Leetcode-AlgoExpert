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

// 1. create and return new Linked List
// 2. Not allow to modify either of the input Linked Lists

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let sumLinkedList = new LinkedList(null)
  let current = sumLinkedList

  let one = linkedListOne
  let two = linkedListTwo
  let carry = 0
  
  while (one !== null || two !== null || carry !== 0)  {
    const oneValue = one !== null ? one.value : 0
    const twoValue = two !== null ? two.value : 0
    const sum = oneValue + twoValue + carry
    carry = Math.floor(sum / 10)
    const remainder = sum % 10

    const newNode = new LinkedList(remainder)
    current.next = newNode
    current = newNode

    if (one !== null) {
      one = one.next
    }

    if (two !== null) {
      two = two.next
    }
  }

  return sumLinkedList.next
}

// O(max(n, m)) time | O(max(n, m)) space, where n is the length of the first Linked List and m is another Linked List.
