# [Symmetrical Tree](https://www.algoexpert.io/questions/symmetrical-tree)

`Medium` `BT`

### Question
Write a function that takes in a Binary Tree and returns if that tree is symmetrical. A tree is symmetrical if the left and right subtrees are mirror images of each other.

Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null.

**Sample Input**
```
tree =    1
       /     \
      2       2
    /   \   /   \
   3     4 4     3
 /   \          /  \
5     6        6    5
```

**Sample Output**
```
True
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

function symmetricalTree(tree) {
  const compare = (tree1, tree2) => {
    if (tree1 === null) return tree1 === tree2
    if (tree2 === null) return tree1 === tree2
    
    const isSame = tree1.value === tree2.value

    return isSame && compare(tree1.left, tree2.right) && compare(tree1.right, tree2.left)
  }

  return compare(tree.left, tree.right)
}
```
