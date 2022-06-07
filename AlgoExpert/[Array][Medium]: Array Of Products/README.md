# [Array Of Products](https://www.algoexpert.io/questions/array-of-products)

`Medium` `Array`

### Question
Write a function that takes in a non-empty array of integers and returns an array of the same length, where each element in the output array is equal to the product of every other number in the input array.

In other words, the value at output[i] is equal to the product of every number in the input array other than input[i].

Note that you're expected to solve this problem without using division.

**Sample Input**

array = [5, 1, 4, 2]

**Sample Output**

[8, 40, 10, 20]
// 8 is equal to 1 x 4 x 2
// 40 is equal to 5 x 4 x 2
// 10 is equal to 5 x 1 x 2
// 20 is equal to 5 x 1 x 4

### My Solution
```js
/**
 * 
 * @param {number[]} array 
 * @returns  {number[]}
 */
function arrayOfProducts(array) {
  let total = 1
  let zeroExistTime = 0
  let indexOfOnlyOneZero = -1
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      zeroExistTime++
      if (zeroExistTime === 2) {
        return new Array(array.length).fill(0)
      }
      indexOfOnlyOneZero = i
      continue
    }
    total = total * array[i]
  }

  if (zeroExistTime === 1) {
    const outputs = new Array(array.length).fill(0)
    outputs[indexOfOnlyOneZero] = total
    return outputs
  }
  
  const outputs = []
  for (let i = 0; i < array.length; i++) {
    outputs.push(total / array[i])
  }

  return outputs
}
```
