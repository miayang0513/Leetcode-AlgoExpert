# [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)

`Easy` `Linked List`

### Question
Given the head of a singly linked list, reverse the list, and return the reversed list.

**Example 1:**
```js
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

**Example 2:**
```js
Input: head = [1,2]
Output: [2,1]
```

**Example 3:**
```js
Input: head = []
Output: []
```

**Constraints:**
* The number of nodes in the list is the range [0, 5000].
* -5000 <= Node.val <= 5000


### My Solution
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null
  let current = head
  let next = null

  while (current !== null) {
    next = current.next
    current.next = prev
    prev = current
    current = next
  }

  return prev
}
```
