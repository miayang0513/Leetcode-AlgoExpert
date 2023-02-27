# [Reverse Linked List](https://www.algoexpert.io/questions/reverse-linked-list)

`Hard` `Linked List`

### Question
Write a function that takes in the head of a Singly Linked List, reverses the list in place (i.e., doesn't create a brand new list), and returns its new head.

Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None / null if it's the tail of the list.

You can assume that the input Linked List will always have at least one node; in other words, the head will never be None / null.

**Sample Input**
```js
head = 0 -> 1 -> 2 -> 3 -> 4 -> 5 // the head node with value 0
```

**Sample Output**
```js
5 -> 4 -> 3 -> 2 -> 1 -> 0 // the new head node with value 5
```

### My Solution
```js
// This is an input class. Do not edit.
class LinkedList {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

/**
 * 
 * @param {LinkedList} head
 * @returns {LinkedList}
 */

function reverseLinkedList (head) {
  let prev = null
  let current = head

  while (current) {
    const next = current.next
    current.next = prev
    prev = current
    current = next
  }

  head = prev
  return head
}

// O(n) time | O(1) space, where n is the number of nodes in the Linked List
```
