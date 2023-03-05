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
 * @returns {array}
 */

function branchSums(root) {
  const sumList = []

  const preOrder = (node, currentSum) => {
    if (node === null) return
    
    currentSum += node.value

    if (node.left === null && node.right === null) {
      sumList.push(currentSum)
      return 
    }
    
    preOrder(node.left, currentSum)
    preOrder(node.right, currentSum)
  }

  preOrder(root, 0)

  return sumList
}