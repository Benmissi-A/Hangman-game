const fs = require('fs')
const chalk = require('chalk')
const readlineSync = require('readline-sync')
const header = fs.readFileSync('./src/pics-hangman/header.txt', 'utf-8')
const best = fs.readFileSync('./src/pics-hangman/best-scores.txt', 'utf-8')
const { ranking } = require('../../src/utils/functions')


const bestScores = () => {
  console.clear()
  console.log(chalk.magenta(header))
  console.log(chalk.magenta(best))
  console.log('')
  ranking()

  let quit = readlineSync.question('presser enter pour retourner au menu')
  quit = 'quit'
}
exports.bestScores = bestScores