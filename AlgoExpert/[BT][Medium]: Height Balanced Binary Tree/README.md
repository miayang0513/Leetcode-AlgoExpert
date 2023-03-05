# [Height Balanced Binary Tree](https://www.algoexpert.io/questions/height-balanced-binary-tree)

`Medium` `BT`

### Question
You're given the root node of a Binary Tree. Write a function that returns true if this Binary Tree is height balanced and false if it isn't.

A Binary Tree is height balanced if for each node in the tree, the difference between the height of its left subtree and the height of its right subtree is at most 1.

Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null.

**Sample Input**
```
tree = 1
     /   \
    2     3
  /   \     \
 4     5     6
     /   \
    7     8
```

**Sample Output**
```
true
```

### My Solution
```js
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * 
 * @param {BinaryTree} tree
 * @returns {boolean}
 */

function heightBalancedBinaryTree(tree) {
  let isBalanced = true
  const traverse = (node) => {
    if (node === null) return 0
    
    const leftHeight = traverse(node.left)
    const rightHeight = traverse(node.right)
    
    if (Math.abs(leftHeight - rightHeight) > 1) {
      isBalanced = false
    }
    
    return Math.max(leftHeight, rightHeight) + 1
  }
  traverse(tree)

  return isBalanced
}
```
