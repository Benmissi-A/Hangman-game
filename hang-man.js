const fs = require('fs')
const readlineSync = require('readline-sync')
const chalk = require('chalk')
const header = fs.readFileSync('header.txt','utf-8')
//const words = fs.readFileSync('dict.txt','utf-8').toUpperCase().split('\n')
const {game} = require('./game')
const { Console } = require('console')


// menu principal du jeu

let options = ['Commencer une partie','Meilleurs scores']
let index = ''
while(index !== -1){ // boucle qui propose le menu cancel nous fait sortir du programme
  console.clear()
  console.log(chalk.yellow(header))
  index = readlineSync.keyInSelect(options, 'selectionner une option')
  switch(index) {
    case 0 :
      console.log('commencer la partie')
      game()
      break
    case 1 :
      console.log('voire les meilleurs scores')
  }
}