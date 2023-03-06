/**
 * @param {number} n 
 * @returns {number}
 */

// Recursion
// O(2^n) time | O(n) space
function getNthFibByRecursion(n) {
  if (n <= 1) return 0
  if (n === 2) return 1
  return getNthFib(n - 1) + getNthFib(n - 2)
}


// Iteration
// O(n) time | O(1) space
function getNthFibByIteration(n) {
  if (n <= 1) return 0
  
  const lastTwo = [0, 1]

  for (let i = 3; i <= n; i++) {
    const next = lastTwo[0] + lastTwo[1]
    lastTwo[0] = lastTwo[1]
    lastTwo[1] = next
  }

  return lastTwo[1]
}