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

// 1. create and return new Linked List
// 2. Not allow to modify either of the input Linked Lists

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let sumLinkedList = new LinkedList(null)
  let current = sumLinkedList

  let one = linkedListOne
  let two = linkedListTwo
  let carry = 0
  
  while (one !== null || two !== null || carry !== 0)  {
    const oneValue = one !== null ? one.value : 0
    const twoValue = two !== null ? two.value : 0
    const sum = oneValue + twoValue + carry
    carry = Math.floor(sum / 10)
    const remainder = sum % 10

    const newNode = new LinkedList(remainder)
    current.next = newNode
    current = newNode

    if (one !== null) {
      one = one.next
    }

    if (two !== null) {
      two = two.next
    }
  }

  return sumLinkedList.next
}

// O(max(n, m)) time | O(max(n, m)) space, where n is the length of the first Linked List and m is another Linked List.

```
