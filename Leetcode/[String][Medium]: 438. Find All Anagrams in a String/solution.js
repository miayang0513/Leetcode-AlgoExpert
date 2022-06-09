/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const ans = []
  if (p.length > s.length) {
    return ans
  }

  const pMap = {}
  for (const letter of p) {
    pMap[letter] = pMap[letter] + 1 || 1
  }

  const windowMap = {}
  for (let i = 0; i < p.length; i++) {
    windowMap[s[i]] = windowMap[s[i]] + 1 || 1
  }

  let windowStart = 0
  let windowEnd = p.length - 1
  while (windowEnd < s.length) {
    let isEqual = true
    for (const letter of Object.keys(pMap)) {
      if (windowMap[letter] !== pMap[letter]) {
        isEqual = false
        break
      }
    }
    if (isEqual) {
      ans.push(windowStart)
    }
    windowMap[s[windowStart]]--
    windowMap[s[windowEnd + 1]] = windowMap[s[windowEnd + 1]] + 1 || 1
    windowStart++
    windowEnd++
  }

  return ans
}
console.log(findAnagrams('cbaebabacd', 'abc')) // [0, 6]

function test ( ) {
  console.log('test1')
}

function test ( ) {
  console.log('test2')
}

test()