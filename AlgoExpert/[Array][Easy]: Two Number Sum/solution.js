// 1. Non-empty array.
// 2. can't use single integer twice.
// 3. no two numbers sum up to the target sum, then return empty array.
// 4. the numbers could be in any order [x1, x2] or [x2, x1]
/**
 * 
 * @param {number[]} array 
 * @param {number} targetSum 
 * @returns {number[]}
 */
function twoNumberSum(array, targetSum) {
  const map = {}

  for (const current of array) {
    if (current in map) {
      return [current, map[current]]
    }

    map[targetSum - current] = current
  }

  return []
}

// O(n) time | O(n) space