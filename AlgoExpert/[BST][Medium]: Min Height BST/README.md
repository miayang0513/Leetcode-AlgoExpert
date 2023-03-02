# [Min Height BST](https://www.algoexpert.io/questions/min-height-bst)

`Easy` `BST`

### Question
Write a function that takes in a non-empty sorted array of distinct integers, constructs a BST from the integers, and returns the root of the BST.

The function should minimize the height of the BST.

You've been provided with a BST class that you'll have to use to construct the BST.

Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None / null.

A BST is valid if and only if all of its nodes are valid BST nodes.

Note that the BST class already has an insert method which you can use if you want.

**Sample Input**
```
array = [1, 2, 5, 7, 10, 13, 14, 15, 22]
```

**Sample Output**
```
         10
       /     \
      2      14
    /   \   /   \
   1     5 13   15
          \       \
           7      22
// This is one example of a BST with min height
// that you could create from the input array.
// You could create other BSTs with min height
// from the same array; for example:
         10
       /     \
      5      15
    /   \   /   \
   2     7 13   22
 /           \
1            14
```

### My Solution
```js
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * 
 * @param {array} array
 * @returns {BST}
 */

function minHeightBst(array) {
  let bst = null

  const helper = (arr, start, end) => {
    if (end < start) return
    const midIndex = Math.floor((start + end) / 2)
    if (bst === null) {
      bst = new BST(arr[midIndex])
    } else {
      bst.insert(arr[midIndex])
    }
    helper(arr, start, midIndex - 1)
    helper(arr, midIndex + 1, end)
  }

  helper(array, 0, array.length - 1)

  return bst
}
```
