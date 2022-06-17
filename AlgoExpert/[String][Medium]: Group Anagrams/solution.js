/**
 * 
 * @param {string[]} words 
 * @returns {string[][]}
 */
function groupAnagrams (words) {
  const anagramMap = {}
  for (let i = 0; i < words.length; i++) {
    const keyArray = new Array(26).fill(0)
    for (const char of words[i]) {
      keyArray[char.charCodeAt() - 97]++
    }
    const key = keyArray.join('')
    if (key in anagramMap) {
      anagramMap[key].push(words[i])
    } else {
      anagramMap[key] = [words[i]]
    }
  }

  return Object.values(anagramMap)
}

console.log(groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"])) // [["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]