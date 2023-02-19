/**
 * 
 * @param {string} string 
 * @returns {string}
 */

// 1. non-empty string
// 2. AAAAAAAAAAAAA (12 A) should be encoded as 9A3A not 12A.

function runLengthEncoding(string) {
  let answer = ''
  let last = string[0]
  let count = 1

  for (let i = 1; i < string.length; i++) {
    current = string[i]
    
    if (current !== last || count === 9) {
      answer += `${count}${last}`
      last = current
      count = 0
    }

    count++
  }

  answer += `${count}${last}`

  return answer
}

//  O(n) time | O(n) space, where n is the length of the input string

console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD")) // 9A4A2B4C2D