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

console.log(arrayOfProducts([5, 1, 4, 2])) // [8, 40, 10, 20]