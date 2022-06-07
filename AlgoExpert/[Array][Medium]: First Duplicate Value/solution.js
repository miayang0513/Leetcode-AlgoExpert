/**
 * 
 * @param {number[]} array 
 * @returns {number}
 */
 function firstDuplicateValue (array) {
  const map = {}

  for (let i = 0; i < array.length; i++) {
    if (array[i] in map) {
      return array[i]
    } else {
      map[array[i]] = true
    }
  }

  return -1
}

console.log(firstDuplicateValue([2, 1, 5, 3, 3, 2, 4]))