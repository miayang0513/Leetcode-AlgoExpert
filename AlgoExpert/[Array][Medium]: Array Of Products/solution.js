/**
 * 
 * @param {number[]} array 
 * @returns  {number[]}
 */
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

console.log(arrayOfProducts([5, 1, 4, 2])) // [8, 40, 10, 20]