# [Merge Linked Lists](https://www.algoexpert.io/questions/merge-linked-lists)

`Hard` `Linked List`

### Question
Write a function that takes in the heads of two Singly Linked Lists that are in sorted order, respectively. The function should merge the lists in place (i.e., it shouldn't create a brand new list) and return the head of the merged list; the merged list should be in sorted order.

Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None / null if it's the tail of the list.

You can assume that the input linked lists will always have at least one node; in other words, the heads will never be None / null.

**Sample Input**
```js
headOne = 2 -> 6 -> 7 -> 8 // the head node with value 2
headTwo = 1 -> 3 -> 4 -> 5 -> 9 -> 10 // the head node with value 1
```

**Sample Output**
```js
1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 // the new head node with value 1
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
 * @param {LinkedList} headOne
 * @param {LinkedList} headTwo
 * @returns {LinkedList}
 */

function mergeLinkedLists (headOne, headTwo) {
  let one = headOne
  let two = headTwo
  let prev = null

  while (one && two) {
    if (one.value < two.value) {
      prev = one
      one = one.next
    } else {
      if (prev !== null) prev.next = two
      prev = two
      two = two.next
      prev.next = one
    }
  }

  if (!one) prev.next = two
  return headOne.value < headTwo.value ? headOne : headTwo
}
```
