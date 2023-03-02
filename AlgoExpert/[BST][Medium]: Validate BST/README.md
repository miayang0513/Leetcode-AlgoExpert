# [Validate BST](https://www.algoexpert.io/questions/validate-bst)

`Medium` `BST`

### Question
Write a function that takes in a potentially invalid Binary Search Tree (BST) and returns a boolean representing whether the BST is valid.

Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None / null.

A BST is valid if and only if all of its nodes are valid BST nodes.

**Sample Input**
```
tree =   10
       /     \
      5      15
    /   \   /   \
   2     5 13   22
 /           \
1            14
```

**Sample Output**

true

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
 * @param {BST} tree
 * @returns {boolean}
 */

// 1. this.value > this.left.value
// 2. this.value <= this.right.value
function validateBst(tree) {
  const helper = (node, minValue, maxValue) => {
    if (node === null) return true
    if (node.value < minValue || node.value >= maxValue) return false
    const isLeftValid = helper(node.left, minValue, node.value)
    return isLeftValid && helper(node.right, node.value, maxValue)
  }

  return helper(tree, -Infinity, Infinity)
}
```
