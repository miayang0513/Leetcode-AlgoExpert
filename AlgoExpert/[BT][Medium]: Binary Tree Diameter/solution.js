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