# [Run-Length Encoding](https://www.algoexpert.io/questions/run-length-encoding)

`Easy` `String`

### Question

Write a function that takes in a non-empty string and returns its run-length encoding.

From Wikipedia, "run-length encoding is a form of lossless data compression in which runs of data are stored as a single data value and count, rather than as the original run." For this problem, a run of data is any sequence of consecutive, identical characters. So the run "AAA" would be run-length-encoded as "3A".

To make things more complicated, however, the input string can contain all sorts of special characters, including numbers. And since encoded data must be decodable, this means that we can't naively run-length-encode long runs. For example, the run "AAAAAAAAAAAA" (12 As), can't naively be encoded as "12A", since this string can be decoded as either "AAAAAAAAAAAA" or "1AA". Thus, long runs (runs of 10 or more characters) should be encoded in a split fashion; the aforementioned run should be encoded as "9A3A".

**Sample Input**
```js
string = "AAAAAAAAAAAAABBCCCCDD"
```

**Sample Output**
```js
"9A4A2B4C2D"
```

### My Solution
```js
/**
 * 
 * @param {string} string 
 * @returns {boolean}
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
```
