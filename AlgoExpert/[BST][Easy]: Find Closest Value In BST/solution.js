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
 * @param {number} target
 * @returns {number}
 */

/**
 * 1. 將 root(tree) 設為比較對象 (currentNode = tree)
 * 2. 初始 closet 值為 tree.value
 * 3. 開始迭代，條件 currentNode !== null
 *   3-1. 如果 currentNode.value === target，return currentNode.value
 *   3-2. 如果 Math.abs(target - closet) > Math.abs(target - currentNode.value)，closet = currentNode.value
 *   3-3. 如果 currentNode.value > target，currentNode = currentNode.left
 *   3-4. 如果 currentNode.value < target，currentNode = currentNode.right
 * 4. return closet
 */
function findClosestValueInBst(tree, target) {
  let currentNode = tree
  let closet = tree.value

  while (currentNode !== null) {
    if (currentNode.value === target) return currentNode.value

    if (Math.abs(target - closet) > Math.abs(target - currentNode.value)) {
      closet = currentNode.value
    }

    if (currentNode.value > target) {
      currentNode = currentNode.left
    } else {
      currentNode = currentNode.right
    }
  }

  return closet
}

// Average: O(log(n)) time | O(1) space
// Worst: O(n) time | O(1) space
// where n is the number of nodes in tree