/**
 * 
 * @param {string} string 
 * @returns {string}
 */
function runLengthEncoding (string) {
  let encodeString = ''
  let currentCharCounts = 1
  for (let i = 1; i < string.length; i++) {
    const currentChar = string[i]
    const previousChar = string[i - 1]

    if (currentChar != previousChar || currentCharCounts === 9) {
      encodeString += `${currentCharCounts}${previousChar}`
      currentCharCounts = 1
    } else {
      currentCharCounts++
    }
  }

  encodeString += `${currentCharCounts}${string[string.length - 1]}`

  return encodeString
}

console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD")) // 9A4A2B4C2D