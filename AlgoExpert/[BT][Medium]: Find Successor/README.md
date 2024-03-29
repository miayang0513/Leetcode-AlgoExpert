# [Find Successor](https://www.algoexpert.io/questions/find-successor)

`Medium` `BT`

### Question
Write a function that takes in a Binary Tree (where nodes have an additional pointer to their parent node) as well as a node contained in that tree and returns the given node's successor.

A node's successor is the next node to be visited (immediately after the given node) when traversing its tree using the in-order tree-traversal technique. A node has no successor if it's the last node to be visited in the in-order traversal.

If a node has no successor, your function should return None / null.

Each BinaryTree node has an integer value, a parent node, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null.



**Sample Input**
```
tree = 
              1
            /   \
           2     3
         /   \ 
        4     5
       /       
      6  
node = 5   
```

**Sample Output**
```
1
// This tree's in-order traversal order is:
// 6 -> 4 -> 2 -> 5 -> 1 -> 3 
// 1 comes immediately after 5.
```

### My Solution
```js
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

/**
 * 
 * @param {BinaryTree} tree 
 * @param {BinaryTree} node 
 * @returns {BinaryTree}
 */

function findSuccessor(tree, node) {
  const getLeftMostChild = (node) => {
    while (node.left !== null) {
      node = node.left
    }
    return node
  }

  const getRightMostParent = (node) => {
    while (node.parent !== null && node.parent.right === node) {
      node = node.parent
    }
    return node.parent
  }
  
  if (node.right !== null) return getLeftMostChild(node.right)

  return getRightMostParent(node)
}

```
