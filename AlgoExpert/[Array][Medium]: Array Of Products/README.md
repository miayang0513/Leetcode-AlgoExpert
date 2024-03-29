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

// 1. non-empty input array.
// 2. returns an array of the same length, where each element in the output array is equal to the product of every other number in the input array.
// 3. without using division.


function arrayOfProducts(array) {
  const products = new Array(array.length).fill(1)

  let leftProduct = 1
  for (let i = 0; i < array.length; i++) {
    products[i] = leftProduct
    leftProduct *= array[i]
  }
  
  let rightProduct = 1
  for (let i = array.length - 1; i >= 0; i--) {
    products[i] *= rightProduct
    rightProduct *= array[i]
  }

  return products
}

// O(n) time | O(n) space, where n is the length of the input array.
```
