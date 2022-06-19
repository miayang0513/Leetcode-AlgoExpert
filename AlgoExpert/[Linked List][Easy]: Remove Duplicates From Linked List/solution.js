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
  while (currentNode !== null) {
    const nextNode = currentNode.next

    if (nextNode === null) {
      break
    }

    if (currentNode.value === nextNode.value) {
      currentNode.next = nextNode.next
    } else {
      currentNode = nextNode
    }
  }

  return linkedList
}