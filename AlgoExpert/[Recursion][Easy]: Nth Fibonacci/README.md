# [Nth Fibonacci](https://www.algoexpert.io/questions/non-constructible-change)

`Easy` `Recursion`

### Question
The Fibonacci sequence is defined as follows: the first number of the sequence is 0, the second number is 1, and the nth number is the sum of the (n - 1)th and (n - 2)th numbers. Write a function that takes in an integer n and returns the nth Fibonacci number.

Important note: the Fibonacci sequence is often defined with its first two numbers as F0 = 0 and F1 = 1. For the purpose of this question, the first Fibonacci number is F0; therefore, getNthFib(1) is equal to F0, getNthFib(2) is equal to F1, etc..

**Sample Input 1**

n = 2

**Sample Output 1**

1 // 0, 1

**Sample Input 2**

n = 6

**Sample Output 2**

5 // 0, 1, 1, 2, 3, 5

### My Solution
```js
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
```
