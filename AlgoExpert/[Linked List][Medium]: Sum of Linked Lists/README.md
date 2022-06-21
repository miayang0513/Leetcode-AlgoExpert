# [Sum of Linked Lists](https://www.algoexpert.io/questions/sum-of-linked-lists)

`Medium` `Linked List`

### Question
You're given two Linked Lists of potentially unequal length. Each Linked List represents a non-negative integer, where each node in the Linked List is a digit of that integer, and the first node in each Linked List always represents the least significant digit of the integer. Write a function that returns the head of a new Linked List that represents the sum of the integers represented by the two input Linked Lists.

Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None / null if it's the tail of the list. The value of each LinkedList node is always in the range of 0 - 9.

Note: your function must create and return a new Linked List, and you're not allowed to modify either of the input Linked Lists.

**Sample Input**
```js
linkedListOne = 2 -> 4 -> 7 -> 1
linkedListTwo = 9 -> 4 -> 5
```

**Sample Output**
```js
1 -> 9 -> 2 -> 2
// linkedListOne represents 1742
// linkedListTwo represents 549
// 1742 + 549 = 2291
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
 * @param {LinkedList} linkedListOne 
 * @param {LinkedList} linkedListTwo 
 * @returns {LinkedList}
 */
function sumOfLinkedLists (linkedListOne, linkedListTwo) {
  let fakeHead = new LinkedList(null)
  let tail = fakeHead
  let carry = 0
  while (linkedListOne && linkedListTwo) {
    const currentSum = linkedListOne.value + linkedListTwo.value + carry
    const currentValue = currentSum % 10
    const currentNode = new LinkedList(currentValue)
    tail.next = currentNode
    tail = currentNode
    linkedListOne = linkedListOne.next
    linkedListTwo = linkedListTwo.next

    carry = Math.floor(currentSum / 10)
  }

  if (linkedListOne) {
    tail.next = linkedListOne
    carry !== 0 && tail.next.value++
  } else if (linkedListTwo) {
    tail.next = linkedListTwo
    carry !== 0 && tail.next.value++
  } else if (carry !== 0) {
    tail.next = new LinkedList(carry)
  }

  return fakeHead.next
}
```
