class LinkedList {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

/**
 * 
 * @param {LinkedList} linkedList 
 * @returns {LinkedList}
 */

function removeDuplicatesFromLinkedList (linkedList) {
  let currentNode = linkedList

  while (currentNode) {
    let nextDistinctNode = currentNode.next
    while (nextDistinctNode && nextDistinctNode.value === currentNode.value) {
      nextDistinctNode = nextDistinctNode.next
    }
    currentNode.next = nextDistinctNode
    currentNode = nextDistinctNode
  }

  return linkedList
}