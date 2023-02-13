# [Non-Constructible Change](https://www.algoexpert.io/questions/non-constructible-change)

`Easy` `Array`

### Question
Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create. The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).

For example, if you're given coins = `[1, 2, 5]`, the minimum amount of change that you can't create is `4`. If you're given no coins, the minimum amount of change that you can't create is `1`.

**Sample Input**

coins = [5, 7, 1, 1, 2, 3, 22]

**Sample Output**

20

### My Solution
```js
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
```
