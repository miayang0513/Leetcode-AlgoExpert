/**
 * 
 * @param {number[]} coins 
 * @returns {number}
 */

// 1. array of positive integers (could have multiple coins of same value).
// 2. return minimum amount of change that you can not create.
// 3. it can be empty input array.

function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b)

  let sum = 0

  for (const value of coins) {
    if (sum + 1 < value) {
      break
    }
    sum += value
  }


  return ++sum
}

// O(nlogn) time | O(n) space, where n is the number of coins

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]))