class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * 
 * @param {array} array
 * @returns {BST}
 */

function minHeightBst(array) {
  let bst = null

  const helper = (arr, start, end) => {
    if (end < start) return
    const midIndex = Math.floor((start + end) / 2)
    if (bst === null) {
      bst = new BST(arr[midIndex])
    } else {
      bst.insert(arr[midIndex])
    }
    helper(arr, start, midIndex - 1)
    helper(arr, midIndex + 1, end)
  }

  helper(array, 0, array.length - 1)

  return bst
}