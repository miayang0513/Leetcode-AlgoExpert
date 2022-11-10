/**
 * 
 * @param {string[]} words 
 * @returns {string[][]}
 */
function groupAnagrams (words) {
  const anagramsMap = {}
  for (const word of words) {
    const key = getAnagramsKey(word)
    if (key in anagramsMap) {
      anagramsMap[key].push(word)
    } else {
      anagramsMap[key] = [word]
    }
  }

  return Object.values(anagramsMap)
}

function getAnagramsKey (word) {
  const upper = new Array(26).fill(0)
  const lower = new Array(26).fill(0)
  for (const letter of word) {
    const code = letter.charCodeAt()
    if (65 <= code && code <= 90) { // A - Z
      upper[code - 65] += 1
    } else if (97 <= code && code <= 122) { // a - z
      lower[code - 97] += 1
    }
  }
  return upper.join('') + lower.join('')
}

console.log(groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"])) // [["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]