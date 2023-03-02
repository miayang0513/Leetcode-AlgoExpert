class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * 
 * @param {BST} tree
 * @returns {boolean}
 */

// 1. this.value > this.left.value
// 2. this.value <= this.right.value
function validateBst(tree) {
  const helper = (node, minValue, maxValue) => {
    if (node === null) return true
    if (node.value < minValue || node.value >= maxValue) return false
    const isLeftValid = helper(node.left, minValue, node.value)
    return isLeftValid && helper(node.right, node.value, maxValue)
  }

  return helper(tree, -Infinity, Infinity)
}