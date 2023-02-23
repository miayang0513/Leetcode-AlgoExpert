/**
 * 
 * @param {string} stringOne 
 * @param {string} stringTwo 
 * @returns {boolean}
 */

function oneEdit(stringOne, stringTwo) {
  const lengthOne = stringOne.length 
  const lengthTwo = stringTwo.length 

  if (Math.abs(lengthOne - lengthTwo) > 1) return false
  
  let madeEdit = false
  let indexOne = 0
  let indexTwo = 0
  
  while (indexOne < lengthOne && indexTwo < lengthTwo) {
    if (stringOne[indexOne] !== stringTwo[indexTwo]) {
      if (madeEdit) return false // 不只一次
      madeEdit = true

      if (lengthOne > lengthTwo) {
        indexOne++
      } else if (lengthOne < lengthTwo) {
        indexTwo++
      } else {
        indexOne++
        indexTwo++
      }
      
    } else {
      indexOne++
      indexTwo++
    }
  }

  return true
}

// O(n) time | O(1) space, where n is the length of the shorter string.
