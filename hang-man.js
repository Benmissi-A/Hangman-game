const fs = require('fs')
const readlineSync = require('readline-sync')
const chalk = require('chalk')
const header = fs.readFileSync('header.txt','utf-8')
const words = fs.readFileSync('dict.txt','utf-8').toUpperCase().split('\n')
console.log(chalk.yellow(header))
const {guess,randomWord} = require('game')

// menu principal du jeu

let options = ['Commencer une partie','Meilleurs scores']
let index = readlineSync.keyInSelect(options, 'selectionner une option')
switch(index) {
  case 0 :
    console.log('commencer la partie')
    
  

    break
  case 1 :
    console.log('voire les meilleurs scores')
}

// marche a suivre 
//  le menu principal propose de lancer une partie

//  