# [Remove Kth Node From End](https://www.algoexpert.io/questions/remove-kth-node-from-end)

`Easy` `Linked List`

### Question

Write a function that takes in the head of a Singly Linked List and an integer k and removes the kth node from the end of the list.

The removal should be done in place, meaning that the original data structure should be mutated (no new structure should be created).

Furthermore, the input head of the linked list should remain the head of the linked list after the removal is done, even if the head is the node that's supposed to be removed. In other words, if the head is the node that's supposed to be removed, your function should simply mutate its value and next pointer.

Note that your function doesn't need to return anything.

You can assume that the input Linked List will always have at least two nodes and, more specifically, at least k nodes.

Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None / null if it's the tail of the list.

**Sample Input**
```js
head = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 // the head node with value 0
k = 4
```

**Sample Output**
```js
// No output required.
// The 4th node from the end of the list (the node with value 6) is removed.
0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 8 -> 9
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
```
