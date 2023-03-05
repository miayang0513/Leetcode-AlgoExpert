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
