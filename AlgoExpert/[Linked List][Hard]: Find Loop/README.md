# [Find Loop](https://www.algoexpert.io/questions/find-loop)

`Hard` `Linked List`

### Question
Write a function that takes in the head of a Singly Linked List that contains a loop (in other words, the list's tail node points to some node in the list instead of None / null). The function should return the node (the actual node--not just its value) from which the loop originates in constant space.

Each LinkedList node has an integer value as well as a next node pointing to the next node in the list.

**Sample Input**
```js
head = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 // the head node with value 0
                           ^         v
                           9 <- 8 <- 7
```

**Sample Output**
```js
4 -> 5 -> 6 // the node with value 4
^         v
9 <- 8 <- 7
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

function findLoop(head) {
  let first = head.next
  let second = head.next.next

  while (first !== second) {
    first = first.next
    second = second.next.next
  }

  first = head
  while (first !== second) {
    first = first.next
    second = second.next
  }

  return first
}

```
