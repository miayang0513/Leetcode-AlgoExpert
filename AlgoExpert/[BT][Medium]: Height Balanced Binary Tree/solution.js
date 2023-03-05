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
