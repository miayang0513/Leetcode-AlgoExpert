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

// 1. given a linked list whose nodes are in sorted order.
// 2. return a modified version of linked list (can't create a brand new list).

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

// O(n) time | O(1) space, where n is the number of nodes in the Linked List