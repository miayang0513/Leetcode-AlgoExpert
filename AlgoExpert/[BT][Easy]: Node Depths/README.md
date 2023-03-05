# [Node Depths](https://www.algoexpert.io/questions/node-depths)

`Easy` `BT`

### Question
The distance between a node in a Binary Tree and the tree's root is called the node's depth.

Write a function that takes in a Binary Tree and returns the sum of its nodes' depths.

Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null.

**Sample Input**
```
tree =    1
       /     \
      2       3
    /   \   /   \
   4     5 6     7
 /   \
8     9
```

**Sample Output**
16
// The depth of the node with value 2 is 1.
// The depth of the node with value 3 is 1.
// The depth of the node with value 4 is 2.
// The depth of the node with value 5 is 2.
// Etc..
// Summing all of these depths yields 16.

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
 * @param {BinaryTree} root 
 * @returns {number}
 */

function nodeDepths(root) {
  // use pre order traverse
  let sum = 0
  const helper = (node, depth) => {
    if (node === null) return

    sum += depth
    helper(node.left, depth + 1)
    helper(node.right, depth + 1)
  }

  helper(root, 0)

  return sum
}
```
