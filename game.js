const fs = require('fs')
const readlineSync = require('readline-sync')
const chalk = require('chalk')
const {guess,randomWord,secretword,hangMan} = require('./functions')
const words = fs.readFileSync('dict.txt','utf-8').toUpperCase().split('\n')
const header = fs.readFileSync('./header.txt','utf-8')
const pendu = fs.readFileSync('./pendu.txt','utf-8')
const bravo = fs.readFileSync('./bravo.txt','utf-8')

// une partie
const game = () => {

 let word = randomWord(words) // on genere le mot
 let nbWords = 0
 let indexGame =''
 letscore = 0
 while(indexGame !== -1){ // boucle qui propose de continuer si le mot a été trouvé
  console.clear()
  
  let secret = secretword(word)
  let nbFail = 0
  let question = ''
  while(word !== secret && nbFail < 7){
    console.log(header)
    console.log(`nombre de chances restantes: ${7 - nbFail}`)
    console.log(hangMan(nbFail))
    console.log(`Le mot a deviner est:`)
    console.log('')
    console.log(secret.split('').join(' ').trim())
    console.log('')
    question = readlineSync.question('choisissez une lettre:  ')
    let [tmp,isSuccess] = guess(word , secret , question.toUpperCase() )
    secret = tmp
    isSuccess === true? 'ok' : nbFail++ 
    
    console.clear()
    
    if(word === secret){ // on verifie les conditions de victoires ou defaite au debut de la boucle
      console.log(chalk.green(header))
      console.log(hangMan(8))
      console.log('')
      console.log(chalk.green(bravo))
      console.log('')
      nbWords++
      let optionsGame = ['Voulez vous continuer ?']
      indexGame = readlineSync.keyInSelect(optionsGame, 'selectionner une option')
      switch(indexGame) {
        case 0 :
          console.log('encore un mot')
          break
        }   
      }
      if (nbFail > 6){
        console.log(chalk.red(header))
        console.log(hangMan(7))
        console.log('')
        console.log(chalk.red(pendu))
        console.log('')
        let quit = readlineSync.question('presser enter pour quitter')
        quit = 'quit'
        indexGame = -1    
      }
    
    }
  }
}


exports.game = game