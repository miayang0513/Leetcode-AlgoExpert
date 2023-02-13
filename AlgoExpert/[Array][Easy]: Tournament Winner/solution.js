/**
 * 
 * @param {string[][]} competitions 
 * @param {number[]} results 
 * @returns {string}
 */

// 1. competitions -> [homeTeam, awayTeam]
// 2. results[i] means the winner of competitions[i], where a = 1 means home team won the competition and a = 0 means away team won
// 3. return winner.

function tournamentWinner(competitions, results) {
  let currentWinner = ''
  const scoreBoard = { [currentWinner]: 0 }

  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i]
    const result = results[i]
    const winner = result === 1 ? homeTeam : awayTeam

    if (winner in scoreBoard) {
      scoreBoard[winner] += 3
    } else {
      scoreBoard[winner] = 3
    }

    if (scoreBoard[winner] > scoreBoard[currentWinner]) {
      currentWinner = winner
    }
  }

  return currentWinner
}

// O(n) time | O(k) space, where n is the number of competitions and k is the number of teams

console.log(tournamentWinner([
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"]
], [0, 0, 1]))

