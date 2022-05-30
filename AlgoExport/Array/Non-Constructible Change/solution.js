/**
 * 
 * @param {number[]} coins 
 * @returns {number}
 */
function nonConstructibleChange(coins) {
  coins.sort((a, b) => a-b)

  let sum = 0
  for (let i = 0; i < coins.length; i++) {
    if (sum + 1 < coins[i]) {
      break
    }
    sum += coins[i]
  }
  return ++sum
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]))