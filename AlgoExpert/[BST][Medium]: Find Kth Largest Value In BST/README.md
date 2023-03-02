# [Find Kth Largest Value In BST](https://www.algoexpert.io/questions/find-kth-largest-value-in-bst)

`Medium` `BST`

### Question
Write a function that takes in a Binary Search Tree (BST) and a positive integer k and returns the kth largest integer contained in the BST.

You can assume that there will only be integer values in the BST and that k is less than or equal to the number of nodes in the tree.

Also, for the purpose of this question, duplicate integers will be treated as distinct values. In other words, the second largest value in a BST containing values {5, 7, 7} will be 7—not 5.

Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None / null.

**Sample Input**
```
tree =   15
       /     \
      5      20
    /   \   /   \
   2     5 17   22
 /   \         
1     3       
k = 3
```

**Sample Output**

17

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
 * @param {number} k
 * @returns {number}
 */

function findKthLargestValueInBst(tree, k) {
  const valueList = []

  const inOrderTraverse = (node) => {
    if (node === null) {
      return
    }
    
    inOrderTraverse(node.left)
    valueList.push(node.value)
    inOrderTraverse(node.right)
  }

  inOrderTraverse(tree)

  return valueList[valueList.length - k]
}

// O(n) time | O(n) space, where n is the number of nodes in the tree.
```
