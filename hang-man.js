const fs = require('fs')
const readlineSync = require('readline-sync')
const chalk = require('chalk')
const header = fs.readFileSync('./header.txt','utf-8')
const menu = fs.readFileSync('./menu.txt','utf-8')
const {game} = require('./game')
const {bestScores} = require('./scores')
/* const { Console } = require('console') */


// menu principal du jeu

let options = ['Commencer une partie','Meilleurs scores']
let index = ''
while(index !== -1){ // boucle qui propose le menu cancel nous fait sortir du programme
  console.clear()
  console.log(chalk.yellow(header))
  console.log(chalk.yellow(menu))
  console.log('')
  index = readlineSync.keyInSelect(options, 'selectionner une option')
  switch(index) {
    case 0 :
      console.log('commencer la partie')
      game()
      break
    case 1 :
      console.log('voire les meilleurs scores')
      bestScores()
  }
}