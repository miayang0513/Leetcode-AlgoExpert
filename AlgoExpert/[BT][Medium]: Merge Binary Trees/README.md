# [Merge Binary Trees](https://www.algoexpert.io/questions/merge-binary-trees)

`Medium` `BT`

### Question
Given two binary trees, merge them and return the resulting tree. If two nodes overlap during the merger then sum the values, otherwise use the existing node.

Note that your solution can either mutate the existing trees or return a new tree.

**Sample Input**
```
tree1 =   1
        /   \
       3     2
     /   \
    7     4

tree2 =   1
        /   \
       5     9
     /      / \
    2      7   6
```

**Sample Output**
```
output =  2
        /   \
      8      11
    /  \    /  \
  9     4  7    6
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
 * @param {BinaryTree} tree1
 * @param {BinaryTree} tree2
 * @returns {BinaryTree}
 */

function mergeBinaryTrees(tree1, tree2) {
  if (tree1 === null) return tree2
  if (tree2 === null) return tree1
  
  tree1.value += tree2.value
  tree1.left = mergeBinaryTrees(tree1.left, tree2.left)
  tree1.right = mergeBinaryTrees(tree1.right, tree2.right)

  return tree1
}
```
