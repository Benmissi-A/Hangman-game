const fs = require('fs')
const { randomInt } = require('crypto')
const words = fs.readFileSync('./src/dico/dict-fr.txt', 'utf-8').toUpperCase().split('\n')
const readlineSync = require('readline-sync')
const chalk = require('chalk')


//generation de mots aleatoire
const randomWord = () => {
  const words = fs.readFileSync('./src/dico/dict-fr.txt', 'utf-8').toUpperCase().split('\n')
  let n = randomInt(0, words.length)
  return words[n]
}

//generation de mot secret
const secretword = (word) => {

  return secret = '_'.repeat(word.length)
}
//on devine les lettres
const guess = (word, secret, char) => {
  let tmp = ''
  if (word.includes(char)) {
    for (let i = 0; i < word.length; ++i) {
      if (char === word[i] && char !== secret[i]) {
        tmp += char
      }
      else if (word[i] === secret[i]) {
        tmp += word[i]
      }
      else {
        tmp += '_'
      }
    }
    return [tmp, true]
  } else {
    tmp = secret
    return [tmp, false]
  }
}

// les scores

const ranking = () => {
  const scoresData = JSON.parse(fs.readFileSync('./src/high-score/score-list-fr.json', 'utf-8'))
  let ranked = [...scoresData]
  //console.log(ranked)
  ranked = ranked.sort((a, b) => (a.totalScore < b.totalScore) ? 1 : ((b.totalScore < a.totalScore) ? -1 : 0))
  //console.log(ranked)
  // on boucle pour les 10 meilleurs
  console.log(chalk.cyan.bold(`       Rank: 1st !!! ${ranked[0].userName} - Words: ${ranked[0].nbWords} - Fails: ${ranked[0].nbFail} - SCORE: ${ranked[0].totalScore}`))
  console.log('')
  console.log(chalk.yellow.bold(`     Rank: 2nd !! ${ranked[1].userName} - Words: ${ranked[1].nbWords} - Fails: ${ranked[1].nbFail} - SCORE: ${ranked[1].totalScore}`))
  console.log('')
  console.log(chalk.yellow.bold(`   Rank: 3rd ! ${ranked[2].userName} - Words: ${ranked[2].nbWords} - Fails: ${ranked[2].nbFail} - SCORE: ${ranked[2].totalScore}`))
  console.log('')
  let i = 4
  for (let user of ranked.slice(3, 10)) {

    console.log(`${' '.repeat(i)} Rank: ${i}  ${user.userName} - Words: ${user.nbWords} - Fails: ${user.nbFail} - SCORE: ${user.totalScore}`)
    ++i
  }
  console.log('')
  // console.log(`   Last: ${ranked[2].userName} - Words: ${ranked[2].nbWords} - Fails: ${ranked[2].nbFail} - SCORE: ${ranked[2].totalScore}`)
  console.log('')
}

const addScore = (userName, nbWords, nbFail) => {
  const scoresData = JSON.parse(fs.readFileSync('./src/high-score/score-list-fr.json', 'utf-8'))
  totalScore = nbWords * 10 - nbFail
  totalScore >= 0 ? totalScore = totalScore : totalScore = 0
  let array = [...scoresData]
  let user = { userName: userName, nbWords: nbWords, nbFail: nbFail, totalScore: totalScore }
  array.push(user)
  fs.writeFileSync('./src/high-score/score-list-fr.json', JSON.stringify(array))
}

// le pendu
const hangMan = (nb) => {
  const HANGMANPICS = [``, `
    +---+
    |   |
        |
        |
        |
        |
  =========`, `
    +---+
    |   |
    O   |
        |
        |
        |
  =========`, `
    +---+
    |   |
    O   |
    |   |
        |
        |
  =========`, `
    +---+
    |   |
    O   |
   /|   |
        |
        |
  =========`, `
    +---+
    |   |
    O   |
   /|\\  |
        |
        |
  =========`, `
    +---+
    |   |
    O   |
   /|\\  |
   /    |
        |
  =========`, `
    +---+
    |   |
    O   |
   /|\\  |
   / \\  |
        |
  =========`, `
    +---+ 
        |
        |
    O/  |  
   /|   |
   / \\  | 
  =========`]
  return HANGMANPICS[nb]
}

exports.randomWord = randomWord
exports.secretword = secretword
exports.guess = guess
exports.hangMan = hangMan
exports.ranking = ranking
exports.addScore = addScore