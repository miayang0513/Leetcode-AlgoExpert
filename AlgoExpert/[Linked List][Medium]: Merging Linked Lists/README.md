# [Merging Linked Lists](https://www.algoexpert.io/questions/merging-linked-lists)

`Medium` `Linked List`

### Question
You're given two Linked Lists of potentially unequal length. These Linked Lists potentially merge at a shared intersection node. Write a function that returns the intersection node or returns None / null if there is no intersection.

Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None / null if it's the tail of the list.

Note: Your function should return an existing node. It should not modify either Linked List, and it should not create any new Linked Lists.

**Sample Input**
```js
linkedListOne = 2 -> 3 -> 1 -> 4
linkedListTwo = 8 -> 7 -> 1 -> 4
```

**Sample Output**
```js
1 -> 4 // The lists intersect at the node with value 1
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

```
