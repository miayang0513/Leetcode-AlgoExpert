/**
 * 
 * @param {number[]} array 
 * @param {number} targetSum 
 * @returns {number[]}
 */
function twoNumberSum(array, targetSum) {
  if (array.length === 1) {
    return []
  }

  const map = {}
  for (let i = 0; i < array.length; i++) {
    if (array[i] in map) {
      return [array[i], array[map[array[i]]]]
    }
    map[targetSum - array[i]] = i
  }

  return []
}