# [Remove Duplicates From Linked List](https://www.algoexpert.io/questions/remove-duplicates-from-linked-list)

`Easy` `Linked List`

### Question

You're given the head of a Singly Linked List whose nodes are in sorted order with respect to their values. Write a function that returns a modified version of the Linked List that doesn't contain any nodes with duplicate values. The Linked List should be modified in place (i.e., you shouldn't create a brand new list), and the modified Linked List should still have its nodes sorted with respect to their values.

Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None / null if it's the tail of the list.

**Sample Input**
```js
linkedList = 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6 // the head node with value 1
```

**Sample Output**
```js
1 -> 3 -> 4 -> 5 -> 6 // the head node with value 1
```

### My Solution
```js
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
```
