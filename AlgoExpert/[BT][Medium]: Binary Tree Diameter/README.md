# [Binary Tree Diameter](https://www.algoexpert.io/questions/binary-tree-diameter)

`Medium` `BT`

### Question
Write a function that takes in a Binary Tree and returns its diameter. The diameter of a binary tree is defined as the length of its longest path, even if that path doesn't pass through the root of the tree.

A path is a collection of connected nodes in a tree, where no node is connected to more than two other nodes. The length of a path is the number of edges between the path's first node and its last node.

Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null.

**Sample Input**
```
tree =        1
            /   \
           3     2
         /   \ 
        7     4
       /       \
      8         5
     /           \
    9             6
```

**Sample Output**
```
6 // 9 -> 8 -> 7 -> 3 -> 4 -> 5 -> 6
// There are 6 edges between the
// first node and the last node
// of this tree's longest path.

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
 * @returns {number}
 */

class TreeInfo {
  constructor(diameter, height) {
    this.diameter = diameter
    this.height = height
  }
}

function binaryTreeDiameter(tree) {
  const getTreeInfo = (tree) => {
    if (tree === null) {
      return new TreeInfo(0, 0)
    } else {
      const leftTree = getTreeInfo(tree.left)
      const rightTree = getTreeInfo(tree.right)

      const newDiameter = Math.max(leftTree.diameter, rightTree.diameter, leftTree.height + rightTree.height)
      const newHeight = Math.max(leftTree.height, rightTree.height) + 1

      return new TreeInfo(newDiameter, newHeight)
    }
  }

  return getTreeInfo(tree).diameter
}

// O(n) time | O(h) space
// n is the number of nodes in the tree
// h si the height of the tree
```
