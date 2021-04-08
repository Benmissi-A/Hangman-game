const fs = require('fs')
const readlineSync = require('readline-sync')
const chalk = require('chalk')
const header = fs.readFileSync('./src/pics-hangman/header.txt', 'utf-8')
const menu = fs.readFileSync('./src/pics-hangman/menu.txt', 'utf-8')
const { game } = require('./src/game/game-fr')
const { bestScores } = require('./src/high-score/scores-fr')
const { checkLoading } = require('./prog-check-load/loading')
/* const { Console } = require('console') */


while (true) { // ADD while (imo999)

  // ADD programme PROG-CHECK-LOAD (imo999)
  checkLoading()
  const debut = readlineSync.question('press enter to continue')
  console.clear()

  // menu principal du jeu
  let options = ['Commencer une partie', 'Meilleurs scores']
  let index = ''
  while (index !== -1) { // boucle qui propose le menu cancel nous fait sortir du programme

    // console.clear() // Remove console.clear (imo999)
    console.log(chalk.yellow(header))
    console.log(chalk.yellow(menu))
    console.log('')
    index = readlineSync.keyInSelect(options, 'selectionner une option')
    switch (index) {
      case 0:
        console.log('commencer la partie')
        game()
        break
      case 1:
        console.log('voire les meilleurs scores')
        bestScores()
    }
  }
  break// ADD break (imo999)
}