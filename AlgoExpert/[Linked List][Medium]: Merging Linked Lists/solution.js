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

function mergingLinkedLists(linkedListOne, linkedListTwo) {
  let currentNodeOne = linkedListOne
  let countOne = 0
  while (currentNodeOne !== null) {
    countOne++
    currentNodeOne = currentNodeOne.next
  }
  
  let currentNodeTwo = linkedListTwo
  let countTwo = 0
  while (currentNodeTwo !== null) {
    countTwo++
    currentNodeTwo = currentNodeTwo.next
  }

  let biggerNode = countOne > countTwo ? linkedListOne : linkedListTwo
  let smallerNode = countOne > countTwo ? linkedListTwo : linkedListOne

  const difference = Math.abs(countOne - countTwo)
  for (let i = 0; i < difference; i++){
    biggerNode = biggerNode.next
  }

  while (biggerNode !== smallerNode) {
    biggerNode = biggerNode.next
    smallerNode = smallerNode.next
  }

  return biggerNode
}

// O (n + m) time | O(1) space, where n is the length of the first Linked List, and m is the length of the second Linked List
