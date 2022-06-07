# [Smallest Difference](https://www.algoexpert.io/questions/smallest-difference)

`Medium` `Array`

### Question
Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the first position.

Note that the absolute difference of two integers is the distance between them on the real number line. For example, the absolute difference of -5 and 5 is 10, and the absolute difference of -5 and -4 is 1.

You can assume that there will only be one pair of numbers with the smallest difference.

**Sample Input**

arrayOne = [-1, 5, 10, 20, 28, 3]
arrayTwo = [26, 134, 135, 15, 17]

**Sample Output**

[28, 26]

### My Solution
```js
/**
 * 
 * @param {number[]} arrayOne 
 * @param {number[]} arrayTwo 
 * @return {number[]}
 */

function smallestDifference (arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)

  let indexOne = 0
  let indexTwo = 0
  let smallestDifference = Infinity
  const smallestValue = []

  while (indexOne < arrayOne.length && indexTwo < arrayTwo.length) {
    let currentDifference
    let firstNum = arrayOne[indexOne]
    let secondNum = arrayTwo[indexTwo]

    if (firstNum === secondNum) {
      return [firstNum, secondNum]
    } else if (firstNum > secondNum) {
      currentDifference = firstNum - secondNum
      indexTwo++
    } else {
      currentDifference = secondNum - firstNum
      indexOne++
    }

    if (smallestDifference > currentDifference) {
      smallestDifference = currentDifference
      smallestValue[0] = firstNum
      smallestValue[1] = secondNum
    }
  }
  return smallestValue
}
```
