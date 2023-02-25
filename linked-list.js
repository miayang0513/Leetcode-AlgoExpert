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

  // add an element to the end of list and return itself.
  push (val) {
    const newNode = new Node(val)

    if (this.head === null) { // length === 0
      this.head = newNode
    } else {
      this.tail.next = newNode
    }

    this.tail = newNode
    this.length++

    return this
  }

  // remove the last element from teh list and return that element.
  pop () {
    if (this.length === 0) return undefined

    let currentNode = this.head
    let newTail = currentNode

    while (currentNode.next !== null) {
      newTail = currentNode
      currentNode = currentNode.next
    }

    this.length--

    if (this.length === 0) {
      this.head = null
      this.tail = null
    } else {
      this.tail = newTail
      this.tail.next = null
    }

    return currentNode
  }

  // remove the first element from the list return that element.
  shift () {
    if (this.length === 0) return undefined

    let currentNode = this.head
    this.head = this.head.next
    this.length--

    if (this.length === 0) {
      this.tail = null
    }

    return currentNode
  }

  // add an element to the beginning of the list and return itself.
  unshift (val) {
    const newNode = new Node(val)

    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
    return this
  }

  // return the element at that index.
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

  // set the value at that index.
  set (index, val) {
    if (index < 0 || index >= this.length) return false

    const node = this.get(index)
    node.val = val

    return true
  }

  // add new element at that index.
  insert (index, val) {
    if (index < 0 || index > this.length) return false

    const newNode = new Node(val)

    if (index === 0) {
      newNode.next = this.head
      this.head = newNode

      if (this.length === 0) {
        this.tail = newNode
      }
    } else if (index === this.length) {
      this.tail.next = newNode
      this.tail = newNode
    } else {
      let count = 0
      let currentNode = this.head
      let prevNode = currentNode

      while (count < index) {
        count++
        prevNode = currentNode
        currentNode = currentNode.next
      }
      prevNode.next = newNode
      newNode.next = currentNode
    }

    this.length++
    return true
  }

  // remove the element at that index.
  remove (index) {
    if (index < 0 || index >= this.length) return false

    if (index === 0) {
      this.head = this.head.next

      if (this.length === 1) {
        this.tail = null
      }
    } else {
      let count = 0
      let currentNode = this.head
      let prevNode = currentNode

      while (count < index) {
        prevNode = currentNode
        currentNode = currentNode.next
        count++
      }

      prevNode.next = currentNode.next

      if (index === this.length - 1) {
        this.tail = prevNode
      }
    }

    this.length--
    return true
  }

  reverse () {
    this.tail = this.head
    let prevNode = null
    let currentNode = this.head
    let nextNode

    while (currentNode !== null) {
      nextNode = currentNode.next
      currentNode.next = prevNode
      prevNode = currentNode
      currentNode = nextNode
    }

    this.head = prevNode
    return this
  }

  print () {
    let currentNode = this.head
    const valueList = []

    while (currentNode !== null) {
      valueList.push(currentNode.val)
      currentNode = currentNode.next
    }

    console.log(valueList.join(' -> '))
  }
}


const list = new SinglyLinkedList()
list.push(0) // 0
list.push(1) // 0 -> 1
list.push(2) // 0 -> 1 -> 2
list.push(3) // 0 -> 1 -> 2 -> 3
list.print() // 0 -> 1 -> 2 -> 3
list.pop() // 0 -> 1 -> 2
list.pop() // 0 -> 1
list.print() // 0 -> 1
list.shift() // 1
list.print() // 1
list.unshift(0) // 0 -> 1
list.print() // 0 -> 1
console.log(list.get(1)) // { val: 1, next: null }
console.log(list.get(2)) // null

list.set(0, 100) // 100 -> 1
list.print() // 100 -> 1

list.insert(1, 99) // 100 -> 99 -> 1
list.insert(3, 0) // 100 -> 99 -> 1 -> 0
list.insert(2, 50) // 100 -> 99 -> 50 -> 1 -> 0
list.insert(0, 101) // 101 -> 100 -> 99 -> 50 -> 1 -> 0
list.print() // 101 -> 100 -> 99 -> 50 -> 1 -> 0

list.remove(0) // 100 -> 99 -> 50 -> 1 -> 0
list.remove(1) // 100 -> 50 -> 1 -> 0
list.print() // 100 -> 50 -> 1 -> 0

list.reverse()
list.print() // 0 -> 1 -> 50 -> 100