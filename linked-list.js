class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push (val) {
    const newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++

    return this
  }

  pop () {
    if (this.length === 0) return undefined

    let currentNode = this.head
    let newTail = currentNode

    while (currentNode.next !== null) {
      newTail = currentNode
      currentNode = currentNode.next
    }

    this.tail = newTail
    this.tail.next = null
    this.length--

    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    return currentNode
  }

  shift () {
    if (this.length === 0) return undefined

    const shiftNode = this.head
    this.head = shiftNode.next
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    return shiftNode
  }

  unshift (val) {
    const newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
    return this
  }

  get (index) {
    if (index < 0 || index >= this.length) return null

    let count = 0
    let currentNode = this.head

    while (count < index) {
      count++
      currentNode = currentNode.next
    }

    return currentNode
  }

  set (index, val) {
    if (index < 0 || index >= this.length) return false

    const node = this.get(index)
    node.val = val

    return true
  }

  insert (index, val) {
    if (index < 0 || index > this.length) return false

    if (index === 0) {
      this.unshift(val)
    } else if (index === this.length) {
      this.push(val)
    } else {
      const prevNode = this.get(index - 1)
      const newNode = new Node(val)
      newNode.next = prevNode.next
      prevNode.next = newNode
      this.length++
    }

    return true
  }

  remove (index) {
    if (index < 0 || index >= this.length) return false

    if (index === 0) {
      return this.shift()
    } else if (index === this.length - 1) {
      return this.pop()
    } else {
      const prevNode = this.get(index - 1)
      const removeNode = prevNode.next
      prevNode.next = removeNode.next
      this.length--
      return removeNode
    }
  }

  reverse () {
    let prev = null
    let current = this.head
    let next
    [this.head, this.tail] = [this.tail, this.head]

    while (current) {
      next = current.next
      current.next = prev
      prev = current
      current = next
    }

    return this
  }

  print () {
    const nodeList = []
    let currentNode = this.head

    while (currentNode !== null) {
      nodeList.push(currentNode.val)
      currentNode = currentNode.next
    }

    console.log(nodeList.join(' -> '))
  }
}


const list = new SinglyLinkedList()
list.push(0) // 0
list.push(1) // 0 -> 1
list.push(2) // 0 -> 1 -> 2
list.push(3) // 0 -> 1 -> 2 -> 3
list.pop() // 0 -> 1 -> 2
list.pop() // 0 -> 1
list.shift() // 1
list.unshift(0) // 0 -> 1
console.log(list.get(1)) // { val: 1, next: null }
console.log(list.get(2)) // null

list.set(0, 100) // 100 -> 1
list.print() // 100 -> 1

list.insert(1, 99) // 100 -> 99 -> 1
list.insert(3, 0) // 100 -> 99 -> 1 -> 0
list.insert(2, 50) // 100 -> 99 -> 50 -> 1 -> 0
list.print() // 00 -> 99 -> 50 -> 1 -> 0

list.remove(1) // 100 -> 50 -> 1 -> 0
list.print() // 100 -> 50 -> 1 -> 0

list.reverse()
list.print() // 0 -> 1 -> 50 -> 100