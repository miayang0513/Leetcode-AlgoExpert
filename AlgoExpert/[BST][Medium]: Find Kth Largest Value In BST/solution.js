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
 * @param {number} k
 * @returns {number}
 */

function findKthLargestValueInBst(tree, k) {
  const valueList = []

  const inOrderTraverse = (node) => {
    if (node === null) {
      return
    }
    
    inOrderTraverse(node.left)
    valueList.push(node.value)
    inOrderTraverse(node.right)
  }

  inOrderTraverse(tree)

  return valueList[valueList.length - k]
}

// O(n) time | O(n) space, where n is the number of nodes in the tree.