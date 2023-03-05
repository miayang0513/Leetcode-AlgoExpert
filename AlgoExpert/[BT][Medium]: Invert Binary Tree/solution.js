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
 * @returns {array}
 */

function invertBinaryTree(tree) {
  const helper = (node) => {
    if (node === null) return
    
    [node.right, node.left] = [node.left, node.right]
    helper(node.left)
    helper(node.right)
  }

  helper(tree)

  return tree
}
