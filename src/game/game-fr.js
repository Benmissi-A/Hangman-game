const fs = require('fs')
const readlineSync = require('readline-sync')
const chalk = require('chalk')
const { guess, randomWord, secretword, hangMan, addScore } = require('../utils/functions')
const header = fs.readFileSync('./src/pics-hangman/header.txt', 'utf-8')
const ingame = fs.readFileSync('./src/pics-hangman/game.txt', 'utf-8')
const pendu = fs.readFileSync('./src/pics-hangman/pendu.txt', 'utf-8')
const bravo = fs.readFileSync('./src/pics-hangman/bravo.txt', 'utf-8')


// une partie
const game = () => {

  let word = randomWord() // on genere le mot
  let nbWords = 0
  let totalFail = 0
  let indexGame = ''

  while (indexGame !== -1) { // boucle qui propose de continuer si le mot a été trouvé
    console.clear()

    let secret = secretword(word)
    let nbFail = 0
    let question = ''
    while (word !== secret && nbFail < 7) {
      console.log(header)
      console.log(ingame)
      console.log('')
      console.log(`nombre de chances restantes: ${7 - nbFail}`)
      console.log(hangMan(nbFail))
      console.log(`Le mot a deviner est:`)
      console.log('')
      console.log(secret.split('').join(' ').trim())
      console.log('')
      question = readlineSync.question('choisissez une lettre:  ')
      let [tmp, isSuccess] = guess(word, secret, question.toUpperCase())
      secret = tmp
      isSuccess === true ? 'ok' : nbFail++

      console.clear()

      if (word === secret) { // on verifie les conditions de victoires ou defaite au debut de la boucle
        console.log(chalk.green(header))
        console.log(chalk.green(ingame))
        console.log('')
        console.log(hangMan(8))
        console.log('')
        console.log(chalk.green(bravo))
        console.log('')
        nbWords++
        let optionsGame = ['Voulez vous continuer ?']
        indexGame = readlineSync.keyInSelect(optionsGame, 'selectionner une option')
        switch (indexGame) {
          case 0:
            console.log('encore un mot')
            break
        }
      }
      if (nbFail > 6) {
        console.log(chalk.red(header))
        console.log(chalk.red(ingame))
        console.log('')
        console.log(hangMan(7))
        console.log('')
        console.log(chalk.red(pendu))
        console.log('')
        let quit = readlineSync.question('presser enter pour quitter')
        quit = 'quit'
        indexGame = -1
      }

    }
    totalFail += nbFail
  }
  total = nbWords * 10 - totalFail
  total >= 0 ? total = total : total = 0
  console.log('')
  console.log(`Vous avez trouvé ${nbWords} ete fait ${totalFail} votre score est de ${total} points`)
  console.log('')
  let register = ""
  while (register.length !== 3) {
    register = readlineSync.question('Entrez trois lettres: ').toUpperCase()
    addScore(register, nbWords, totalFail)
  }
}


exports.game = game