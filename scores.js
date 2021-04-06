const fs = require('fs')

const readlineSync = require('readline-sync')
const header = fs.readFileSync('./header.txt','utf-8')
const best = fs.readFileSync('./best-scores.txt','utf-8')
const {ranking} = require('./functions')


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