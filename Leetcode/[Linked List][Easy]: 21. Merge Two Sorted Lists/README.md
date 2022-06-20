# [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

`Easy` `Linked List`

### Question
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

**Example 1:**
```js
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

**Example 2:**
```js
Input: list1 = [], list2 = []
Output: []
```

**Example 3:**
```js
Input: list1 = [], list2 = [0]
Output: [0]
```

**Constraints:**
* The number of nodes in both lists is in the range [0, 50].
* -100 <= Node.val <= 100
* Both list1 and list2 are sorted in non-decreasing order.


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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let mergeSortedList = {
    val: 0,
    next: null
  }
  let tail = mergeSortedList

  while (list1 && list2) {
    if (list1.val > list2.val) {
      tail.next = list2
      tail = list2
      list2 = list2.next
    } else {
      tail.next = list1
      tail = list1
      list1 = list1.next
    }
  }

  if (list1) {
    tail.next = list1
  }
  if (list2) {
    tail.next = list2
  }

  return mergeSortedList.next
}
```
