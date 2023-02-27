const buildTree = (root, curr_index=0, index=false, delimiter='-') => {
  if(!root) return [[],0,0,0];
  let line1 = [];
  let line2=[]
  let node_repr = index ? `${curr_index}${delimiter}${root.val}` : root.val.toString();
  let new_root_width = node_repr.length;
  let gap_size = node_repr.length;
  let [l_box, l_box_width, l_root_start, l_root_end] = buildTree(root.left, (2 * curr_index) + 1, index, delimiter);
  let [r_box, r_box_width, r_root_start, r_root_end] = buildTree(root.right, (2 * curr_index) + 2, index, delimiter);
  let new_root_start=0;
  let new_root_end=0;
  if(l_box_width > 0){
      l_root = Math.floor((l_root_start + l_root_end) / 2) + 1;
      line1.push(' '.repeat(l_root +1));
      line1.push('_'.repeat(l_box_width - l_root));
      line2.push(' '.repeat(l_root) + '/');
      line2.push(' '.repeat(l_box_width - l_root));
      new_root_start = l_box_width + 1;
      gap_size += 1;
  }else{
      new_root_start = 0;
  }
  line1.push(node_repr);
  line2.push(' '.repeat(new_root_width));
  if(r_box_width > 0){
      r_root = Math.floor((r_root_start + r_root_end) / 2);
      line1.push('_'.repeat(r_root));
      line1.push(' '.repeat(r_box_width - r_root + 1));
      line2.push(' '.repeat(r_root) + '\\');
      line2.push(' '.repeat(r_box_width - r_root));
      gap_size += 1;
  }
  new_root_end = new_root_start + new_root_width - 1;
  new_box = [line1.join(''), line2.join('')];
  let l_line,r_line;
  for(let i=0; i < Math.max(l_box.length, r_box.length); i++){
    if(i < l_box.length) l_line = l_box[i];
    else l_line = ' '.repeat(l_box_width);
    if(i < r_box.length) r_line = r_box[i];
    else r_line = ' '.repeat(r_box_width);
    new_box.push(l_line + ' '.repeat(gap_size) + r_line);
  }
  return [new_box, new_box[0].length, new_root_start, new_root_end];
};

/**
 * The following functions each refer to the following link
 * 
 * ref: https://github.com/saibabanadh/print-bst/blob/master/bst.js
 * - print
 * 
 * ref: https://arsenekuo.com/post/2021/12/13/implementation-of-bst-in-javascript
 * - insertByIteration
 * - insertByRecursion
 * - findByIteration
 * - findByRecursion
 * - remove
 * 
 * ref: https://pjchender.dev/dsa/dsa-bst/ & https://break0344.medium.com/data-structures-and-algorithms-8-tree-fc835b8f548e
 * - preOrder
 * - inOrder
 * - postOrder
 * - BFS
 */
// 
class Node {
  constructor (val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null
  }
  print(){
    let lines = buildTree(this.root,0,false,'-')[0];
    let output = "";
    for(let line of lines){
      output += line +'\n';
    }
    console.log(output)
  }

  /**
   * 1. 建立 newNode
   * 2. 如果沒有 root，則將 root = newNode。
   * 3. 反之，將 root 設為比較對象 (currentNode = root)
   *  3-1. 如果 newNode.val < currentNode.val
   *    3-1-1. 如果有 left child，則 currentNode = currentNode.left ，並重複上述比較步驟。
   *    3-1-2. 如果沒有 left child，則 left = newNode
   *  3-2. 如果 newNode.val > currentNode.val
   *    3-2-1. 如果有 right child，則 currentNode = currentNode.right，並重複上述比較步驟。
   *    3-2-2. 如果沒有 right child，則 right = newNode
   */
  insertByIteration (val) {
    // step 1
    const newNode = new Node(val)

    // step 2
    if (this.root === null) {
      this.root = newNode
      return this
    }

    // step 3
    let currentNode = this.root

    while (currentNode) {
      if (currentNode.val === newNode.val) return undefined // it shouldn't happens

      // step 3-1
      if (newNode.val < currentNode.val) {
        // step 3-1-1
        if (currentNode.left !== null) {
          currentNode = currentNode.left
        } else {
          // step 3-1-2
          currentNode.left = newNode
          return this
        }
      } else {
        // step 3-2-1
        if (currentNode.right !== null) {
          currentNode = currentNode.right
        } else {
          // step 3-2-2
          currentNode.right = newNode
          return this
        }
      }
    }
  }

  insertByRecursion (val) {
    const insertHelper = (val, currentNode) => {
      const newNode = new Node(val)

      if (currentNode.val === newNode.val) return undefined

      // step 3-1
      if (currentNode.val > newNode.val) {
        return currentNode.left !== null
        // step 3-1-1
        ? insertHelper(val, currentNode.left)
        // step 3-1-2
        : (currentNode.left = newNode)
      } else {
        // step 3-2
        return currentNode.right !== null
        // step 3-2-1
        ? insertHelper(val, currentNode.right)
        // step 3-2-2
        : (currentNode.right = newNode)
      }
    }

    if (this.root === null) {
      // step 1 & 2
      this.root = new Node(val)
      return this
    }

    // step 3
    insertHelper(val, this.root)
    return this

  }

  /**
   * 1. 如果沒有 root，return false
   * 2. 反之，將 root 設為比較對象 (currentNode = root)
   *  2-1. 如果 currentNode === null，return false
   *  2-2. 如果 currentNode.val = val，return currentNode
   *  2-3. 如果 currentNode.val > val，則 currentNode = currentNode.left，並重複 step 2-1 ~ step 2-4
   *  2-4. 如果 currentNode.val < val，則 currentNode = currentNode.right ，並重複 step 2-1 ~ step 2-4
   */
  findByIteration (val) {
    // step 1
    if (this.root === null) return false

    // step 2
    let currentNode = this.root

    // step 2-1
    while (currentNode !== null) {
      // step 2-2
      if (currentNode.val === val) return currentNode
      // step 2-3
      if (currentNode.val > val) {
        currentNode = currentNode.left
      } else {
        // step 2-4
        currentNode = currentNode.right
      }
    }
    // step 2-1
    return false
  }
  
  findByRecursion (val) {
    const findHelper = (val, currentNode) => {
      // step 2-1
      if (currentNode === null) return false

      // step 2-2
      if (currentNode.val === val) return currentNode
      // step 2-3
      if (currentNode.val > val) {
        return findHelper(val, currentNode.left)
      } else {
        // step 2-4
        return findHelper(val, currentNode.right)
      }
    }

    // step 1
    if (this.root === null) return false

    // step 2
    return findHelper(val, this.root)

  }

  /**
   * 1. 如果 val 為 null，return undefined
   * 2  將 root 設為比較對象 (currentNode = root)
   *  2-1. 如果 currentNode === null，return undefined
   *  2-2. 如果 currentNode.val > val，往 currentNode.left 繼續尋找
   *  2-3. 如果 currentNode.val < val，往 currentNode.right 繼續尋找
   *  2-4. 如果 currentNode.val === val
   *    2-4-1. 如果 currentNode 沒有任何 child，則將 currentNode 移除
   *    2-4-2. 如果 currentNode 只有一個 child，則讓該 child 取代 currentNode
   *    2-4-3. 如果 currentNode 有兩個 child
   *      2-4-3-1. 找 currentNode right child 中最小的 node 或 left child 中最大的 node
   *      2-4-3-2. 將找到的結果取代 currentNode
   *      2-4-3-3. 並將找到的結果原來的位置設為 null
   */
  remove (val) {
    const removeHelper = (val, currentNode) => {
      // step 2-1
      if (currentNode === null) return undefined
      // step 2-2
      if (currentNode.val > val) {
        currentNode.left = removeHelper(val, currentNode.left)
        return currentNode
      } else if (currentNode.val < val) {
        // step 2-3
        currentNode.right = removeHelper(val, currentNode.right)
        return currentNode
      }
      // step 2-4
      // step 2-4-1
      if (currentNode.left === null && currentNode.right === null) {
        return null
      } else if (currentNode.left === null && currentNode.right !== null) {
        // step 2-4-2
        return currentNode.right
      } else if (currentNode.right === null && currentNode.left !== null) {
        // step 2-4-2
        return currentNode.left
      } else {
        // step 2-4-3
        // step 2-4-3-1
        const minRightNode = findMinNode(currentNode.right)
        // step 2-4-3-2
        currentNode.val = minRightNode.val
        // step 2-4-3-3
        currentNode.right = removeHelper(minRightNode.val, currentNode.right)
        return currentNode
      }
    }
    const findMinNode = (currentNode) => {
      while (currentNode.left) {
        currentNode = currentNode.left
      }
      return currentNode
    }

    // step 1
    if (val === null) return undefined
    // step 2
    this.root = removeHelper(val, this.root)
    return this
  }

  // 中左右
  preOrder () {
    const nodeList = []
    
    const traverse = (node) => {
      if (!node) return

      nodeList.push(node.val)
      traverse(node.left)
      traverse(node.right)
    }
    
    traverse(this.root)

    console.log(nodeList.join(' -> '))
  }

  // 左中右
  inOrder () {
    const nodeList = []
    
    const traverse = (node) => {
      if (!node) return

      traverse(node.left)
      nodeList.push(node.val)
      traverse(node.right)
    }
    
    traverse(this.root)

    console.log(nodeList.join(' -> '))
  }

  // 左右中
  postOrder () {
    const nodeList = []
    
    const traverse = (node) => {
      if (!node) return

      traverse(node.left)
      traverse(node.right)
      nodeList.push(node.val)
    }
    
    traverse(this.root)

    console.log(nodeList.join(' -> '))
  }

  BFS () {
    if (this.root === null) return undefined

    const visited = []
    const queue = [this.root]

    while (queue.length !== 0) {
      const currentNode = queue.shift()
      visited.push(currentNode.val)

      if (currentNode.left) queue.push(currentNode.left)
      if (currentNode.right) queue.push(currentNode.right)
    }

    console.log(visited.join(' -> '))
  }
}

const tree = new BinarySearchTree()

tree.insertByIteration(10)
tree.insertByIteration(5)
tree.insertByIteration(2)
tree.insertByIteration(13)
tree.insertByRecursion(11)
tree.insertByRecursion(2)
tree.insertByRecursion(16)
tree.insertByRecursion(7)


console.log(tree.findByRecursion(5), tree.findByIteration(5))

tree.print()
tree.remove(2)
tree.print()
tree.remove(10)
tree.print()

tree.preOrder()
tree.inOrder()
tree.postOrder()
tree.BFS()