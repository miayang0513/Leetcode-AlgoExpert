# [Remove Kth Node From End](https://www.algoexpert.io/questions/remove-kth-node-from-end)

`Medium` `Linked List`

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

// 1. mutated (no create new)
// 2. if the head is the node that's supposed to be removed, your function should simply mutate its value and next pointer.
// 3. linked list have at least k nodes. and k >= 2.
// 4. doesn't need to return anything.

function removeKthNodeFromEnd(head, k) {
  let first = head
  let second = head
  let count = 0

  while (count < k) {
    count++
    first = first.next
  }

  if (first === null) {
    const next = head.next
    head.next = next.next
    head.value = next.value
    return
  }
  
  while (first.next !== null) {
    first = first.next
    second = second.next
  }
  second.next = second.next.next
}

// O(n) time | O(1) space, where n is the number of nodes in the Linked List
```
