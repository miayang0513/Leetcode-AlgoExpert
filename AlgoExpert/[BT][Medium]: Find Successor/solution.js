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
