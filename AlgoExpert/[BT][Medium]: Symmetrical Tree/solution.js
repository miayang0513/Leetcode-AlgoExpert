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

function symmetricalTree(tree) {
  const compare = (tree1, tree2) => {
    if (tree1 === null) return tree1 === tree2
    if (tree2 === null) return tree1 === tree2
    
    const isSame = tree1.value === tree2.value

    return isSame && compare(tree1.left, tree2.right) && compare(tree1.right, tree2.left)
  }

  return compare(tree.left, tree.right)
}

