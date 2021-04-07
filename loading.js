// prog-readfile.js
const fs = require('fs')
const chalk = require('chalk')
const { clear } = require('console')

// Check console DEV(outils)
//console.log(chalk.green('\nCHECK by Imo999 : ALL IS GOOD\n')) //check DEV


// ####################################################
// #              ARCHITECTURE CHECKLOADING           #
// ####################################################
// #                                                  #
// #                [1] ERROR DIRECTORY               #
// #                [2] ERROR FILE                    #
// #                [3] CHECK LINE CMD                #
// #                [4] RUN LOADING                   #
// #                [5] ARGUMENT RUN                  #
// #                                                  #
//#####################################################



const checkLoading = () => {

  // #########################################################
  // #################### ERROR DIRECTORY ####################
  // #########################################################
  // E-DIR : Check si les dossiers existent dans le programme Loading :                 
  // [1] pics 

  // E-DIR-ADD : Check si les dossiers existent dans le programme Hangman : 
  // [1] src // Base programme - hangman
  // [2] dico
  // [3] game
  // [4] high-score
  // [5] pics-hangman
  // [6] utils
  // [7] .... Addionnal 


  // #########################
  //         LOADING
  // #########################

  // E-DIR[1] : pics
  if (!fs.existsSync('./pics-check')) {
    console.clear() // Clear affichage
    console.log(chalk.red(`\nError E-DIR[1] : 'pics' doesn't folder exist\n`)) // affichage error
    process.exit(1) // E-DIR : Exit
  }

  // #########################
  //         HANG-MAN
  // #########################

  // E-DIR-ADD[1] : src
  if (!fs.existsSync('./src')) {
    console.clear() // Clear affichage
    console.log(chalk.red(`\nError E-DIR-ADD[1] : 'src' doesn't folder exist\n`)) // affichage error
    process.exit(1) // E-DIR : Exit
  }
  // E-DIR-ADD[2] : dico
  if (!fs.existsSync('./src/dico')) {
    console.clear() // Clear affichage
    console.log(chalk.red(`\nError E-DIR-ADD[2] : 'dico' doesn't folder exist\n`)) // affichage error
    process.exit(1) // E-DIR : Exit
  }
  // E-DIR-ADD[3] : game
  if (!fs.existsSync('./src/game')) {
    console.clear() // Clear affichage
    console.log(chalk.red(`\nError E-DIR-ADD[3] : 'game' doesn't folder exist\n`)) // affichage error
    process.exit(1) // E-DIR : Exit
  }
  // E-DIR-ADD[4] : high-score
  if (!fs.existsSync('./src/high-score')) {
    console.clear() // Clear affichage
    console.log(chalk.red(`\nError E-DIR-ADD[4] : 'high-score' doesn't folder exist\n`)) // affichage error
    process.exit(1) // E-DIR : Exit
  }
  // E-DIR-ADD[5] : pics-hangman
  if (!fs.existsSync('./src/pics-hangman')) {
    console.clear() // Clear affichage
    console.log(chalk.red(`\nError E-DIR-ADD[5] : 'pics-hangman' doesn't folder exist\n`)) // affichage error
    process.exit(1) // E-DIR : Exit
  }
  // E-DIR-ADD[6] : pics-hangman
  if (!fs.existsSync('./src/utils')) {
    console.clear() // Clear affichage
    console.log(chalk.red(`\nError E-DIR-ADD[6] : 'utils' doesn't folder exist\n`)) // affichage error
    process.exit(1) // E-DIR : Exit
  }

  // E-DIR-ADD[1] : ....Addionnal


  // ####################################################
  // #################### ERROR FILE ####################
  // ####################################################
  // E-FILE : Check si les fichiers existe dans le programme Loading ()
  // [1] /pics-check/e-not-exist.txt
  // [2] /pics-check/e-note-file.txt
  // [3] /pics-check/usage-node.txt
  // [4] /pics-check/use-run-arg.txt
  // [5] /pics-check/loading-pic.txt
  // [6] /pics-check/all-check-done.txt
  // [7].... Addionnal 

  // E-FILE-ADD : Check si les dossiers existent dans le programme Hangman : 
  // [1] /dico/dict-fr.txt
  // [2] /game/game-fr-js
  // [3] /high-score/score-list-fre.json
  // [4] /high-score/scores-fr-js
  // [5] /pics-hangman/best-scores.txt
  // [6] /pics-hangman/bravo.txt
  // [7] /pics-hangman/game.txt
  // [8] /pics-hangman/hangman [NOT DEFINED]
  // [9] /pics-hangman/header.txt
  // [10] /pics-hangman/menu.txt
  // [11] /pics-hangman/pendu.txt
  // [12] /utils/functions.js
  // [12].... Addionnal 

  // #########################
  //          LOADING
  // #########################

  // E-FILE[1] : /pics-check/e-not-exist.txt
  if (!fs.existsSync('./pics-check/e-not-exist.txt')) {
    console.clear() // Clear affichage
    console.log(chalk.red(`\nError E-FILE[1] : 'e-not-exist.txt' doesn't file exist\n`)) // affichage error
    process.exit(1) // E-FILE : Exit
  }
  // E-FILE[2] : /pics-check/e-note-file.txt
  if (!fs.existsSync('./pics-check/e-not-file.txt')) {
    console.clear() // Clear affichage
    console.log(chalk.red(`\nError E-FILE[2] : 'e-not-file.txt' doesn't file exist\n`)) // affichage error
    process.exit(1) // E-FILE : Exit
  }
  // E-FILE[3] : /pics-check/usage-node.txt
  if (!fs.existsSync('./pics-check/usage-node.txt',)) {
    let enotExist = chalk.red(fs.readFileSync('./pics-check/e-not-exist.txt', 'utf-8')) // lit le fichier e-not-exist.txt
    console.clear() // Clear affichage
    console.log(enotExist) // affichage Error du fichier : e-not-exit.txt
    console.log(chalk.red(`\nError E-FILE[3] : 'usage-node.txt' doesn't file exist\n`)) // affichage error
    process.exit(1) // E-FILE : Exit
  }
  // E-FILE[4] : /pics-check/use-run-arg.txt
  if (!fs.existsSync('./pics-check/use-run-arg.txt')) {
    let enotExist = chalk.red(fs.readFileSync('./pics-check/e-not-exist.txt', 'utf-8')) // lit le fichier e-not-exist.txt
    console.clear() // Clear affichage
    console.log(enotExist) // affichage Error du fichier : e-not-exit.txt
    console.log(chalk.red(`\nError E-FILE[4] : 'use-run-arg.txt' doesn't file exist\n`)) // affichage error
    process.exit(1) // E-FILE : Exit
  }
  // E-FILE[5] : /pics-check/loading-pic.txt
  if (!fs.existsSync('./pics-check/loading-pic.txt')) {
    let enotExist = chalk.red(fs.readFileSync('./pics-check/e-not-exist.txt', 'utf-8')) // lit le fichier e-not-exist.txt
    console.clear() // Clear affichage
    console.log(enotExist) // affichage Error du fichier : e-not-exit.txt
    console.log(chalk.red(`\nError E-FILE[5] : 'loading-pic.txt' doesn't file exist\n`)) // affichage error
    process.exit(1) // E-FILE : Exit
  }
  // E-FILE[6] : /pics-check/all-check-done.txt
  if (!fs.existsSync('./pics-check/all-check-ok.txt')) {
    let enotExist = chalk.red(fs.readFileSync('./pics-check/e-not-exist.txt', 'utf-8')) // lit le fichier e-not-exist.txt
    console.clear() // Clear affichage
    console.log(enotExist) // affichage Error du fichier : e-not-exit.txt
    console.log(chalk.red(`\nError E-FILE[6] : 'all-check-ok.txt' doesn't file exist\n`)) // affichage error
    process.exit(1) // E-FILE : Exit
  }

  // #########################
  //         HANG-MAN
  // #########################


  // E-FILE-ADD[1] /dico/dict-fr.txt
  if (!fs.existsSync('./src/dico/dict-fr.txt')) {
    let enotExist = chalk.red(fs.readFileSync('./pics-check/e-not-exist.txt', 'utf-8'))
    console.clear() // Clear affichage
    console.log(enotExist) // affichage Error du fichier : e-not-exit.txt
    console.log(chalk.red(`\nError E-FILE-ADD[1] : 'dict-fr.txt' doesn't file exist\n`)) // affichage error
    process.exit(1) // E-FILE-ADD : Exit
  }
  // E-FILE-ADD[2] /game/game-fr-js
  if (!fs.existsSync('./src/game/game-fr.js')) {
    let enotExist = chalk.red(fs.readFileSync('./pics-check/e-not-exist.txt', 'utf-8'))
    console.clear() // Clear affichage
    console.log(enotExist) // affichage Error du fichier : e-not-exit.txt
    console.log(chalk.red(`\nError E-FILE-ADD[2] : 'game-fr.js' doesn't file exist\n`)) // affichage error
    process.exit(1) // E-FILE-ADD : Exit
  }
  // E-FILE-ADD[3] /high-score/score-list-fr.json
  if (!fs.existsSync('./src/high-score/score-list-fr.json')) {
    let enotExist = chalk.red(fs.readFileSync('./pics-check/e-not-exist.txt', 'utf-8'))
    console.clear()
    console.log(enotExist) // affichage Error du fichier : e-not-exit.txt
    console.log(chalk.red(`\nError E-FILE-ADD[3] : 'score-list-fr.json' doesn't file exist\n`)) // affichage error
    process.exit(1) // E-FILE-ADD : Exit
  }
  // E-FILE-ADD[4] /high-score/scores-fr-js
  if (!fs.existsSync('./src/high-score/scores-fr.js')) {
    let enotExist = chalk.red(fs.readFileSync('./pics-check/e-not-exist.txt', 'utf-8'))
    console.clear()
    console.log(enotExist)
    console.log(chalk.red(`\nError E-FILE-ADD[4] : 'scores-fr.js' doesn't file exist\n`)) // affichage error
    process.exit(1) // E-FILE-ADD : Exit
  }
  // E-FILE-ADD[5] /pics-hangman/best-scores.txt
  if (!fs.existsSync('./src/pics-hangman/best-scores.txt')) {
    let enotExist = chalk.red(fs.readFileSync('./pics-check/e-not-exist.txt', 'utf-8'))
    console.clear()
    console.log(enotExist)
    console.log(chalk.red(`\nError E-FILE-ADD[5] : 'best-scores.txt' doesn't file exist\n`)) // affichage error
    process.exit(1) // E-FILE-ADD : Exit
  }
  // E-FILE-ADD[6] /pics-hangman/bravo.txt
  if (!fs.existsSync('./src/pics-hangman/bravo.txt')) {
    let enotExist = chalk.red(fs.readFileSync('./pics-check/e-not-exist.txt', 'utf-8'))
    console.clear()
    console.log(enotExist)
    console.log(chalk.red(`\nError E-FILE-ADD[6] : 'bravo.txt' doesn't file exist\n`)) // affichage error
    process.exit(1) // E-FILE-ADD : Exit
  }
  // E-FILE-ADD[7] /pics-hangman/game.txt
  if (!fs.existsSync('./src/pics-hangman/game.txt')) {
    let enotExist = chalk.red(fs.readFileSync('./pics-check/e-not-exist.txt', 'utf-8'))
    console.clear()
    console.log(enotExist)
    console.log(chalk.red(`\nError E-FILE-ADD[7] : 'game.txt' doesn't file exist\n`)) // affichage error
    process.exit(1) // E-FILE-ADD : Exit
  }

  // E-FILE-ADD[8] /pics-hangman/hangman [NOT DEFINED]

  // E-FILE-ADD[9] /pics-hangman/header.txt
  if (!fs.existsSync('./src/pics-hangman/header.txt')) {
    let enotExist = chalk.red(fs.readFileSync('./pics-check/e-not-exist.txt', 'utf-8'))
    console.clear()
    console.log(enotExist)
    console.log(chalk.red(`\nError E-FILE-ADD[9] : 'header.txt' doesn't file exist\n`)) // affichage error
    process.exit(1) // E-FILE-ADD : Exit
  }
  // E-FILE-ADD[10] /pics-hangman/menu.txt
  if (!fs.existsSync('./src/pics-hangman/menu.txt')) {
    let enotExist = chalk.red(fs.readFileSync('./pics-check/e-not-exist.txt', 'utf-8'))
    console.clear()
    console.log(enotExist)
    console.log(chalk.red(`\nError E-FILE-ADD[10] : 'menu.txt' doesn't file exist\n`)) // affichage error
    process.exit(1) // E-FILE-ADD : Exit
  }
  // E-FILE-ADD[11] /pics-hangman/pendu.txt
  if (!fs.existsSync('./src/pics-hangman/pendu.txt')) {
    let enotExist = chalk.red(fs.readFileSync('./pics-check/e-not-exist.txt', 'utf-8'))
    console.clear()
    console.log(enotExist)
    console.log(chalk.red(`\nError E-FILE-ADD[11] : 'pendu.txt' doesn't file exist\n`)) // affichage error
    process.exit(1) // E-FILE-ADD : Exit
  }
  // E-FILE-ADD[12] /utils/functions.js
  if (!fs.existsSync('./src/utils/functions.js')) {
    let enotExist = chalk.red(fs.readFileSync('./pics-check/e-not-exist.txt', 'utf-8'))
    console.clear()
    console.log(enotExist)
    console.log(chalk.red(`\nError E-FILE-ADD[12] : 'functions.js' doesn't file exist\n`)) // affichage error
    process.exit(1) // E-FILE-ADD : Exit
  }

  // E-FILE-ADD[13] : .... Addionnal

  // ########################################################
  // #################### CHECK LINE CMD ####################
  // ########################################################
  // LINE CMD : Check si la commande de lancement est correct : 
  // [0] node 
  // [1] nom du fichier principal.js
  // [2] argument 1 : run

  // LINE-CMD : Check start
  if (process.argv.length !== 3) { // 1 argument : run
    const lineCmd = fs.readFileSync('./pics-check/usage-node.txt', 'utf-8') // lit le fichier usage-node.txt
    console.clear() // Clear affichage
    console.log(chalk.yellow(lineCmd)) // affichage du fichier 
    process.exit(1) // LINE-CMD : Exit
  }

  // #####################################################
  // #################### RUN LOADING ####################
  // #####################################################
  // LOADING : Affichage si tout est OK si l'argument 'RUN' est validé => ALL CHECK DONE !!!

  // LOADING : Start
  if (process.argv[2] === 'run') {
    console.clear() // Clear affichage
    const loading = fs.readFileSync('./pics-check/loading-pic.txt', 'utf-8') // lit le fichier loading-pic.txt
    let allcheckOk = fs.readFileSync('./pics-check/all-check-ok.txt', 'utf-8')
    console.log(loading.repeat(6000)) // répétition du fichier loading-pic.txt
    console.clear() // Clear affichage
    console.log(chalk.green(allcheckOk)) // Affichage répétition du fichier all-check-ok.txt

    // =====================================================
    // ===============>                     <===============
    // ===============> POINT D'INTEGRATION <===============
    // ===============>                     <===============
    // =====================================================

    console.log(chalk.green('\nVersions: \n\t1.0 --- 04/07/2021 = CHECK by Imo999 : ALL IS GOOD')) //Suivit de versionning 
    console.log(chalk.green('\t1.1 --- 04/07/2021 = Add Hang-man Game : ALL IS GOOD\n')) //Suivit de versionning
    //  console.log(chalk.green('\t2.0 --- xx/xx/xxxx = CHECK by xxxx : Additionnal\n')) // Additionnal 

    process.exit(1) // LOADING : Exit
  }

  // #######################################################
  // #################### ARGUMENT RUN  ####################
  // #######################################################
  // ARG-RUN :  Si l'argument 1 n'est pas égale à 'run' alors ne pas démmarer !! 

  // ARG-RUN : Start
  else {
    const useRun = chalk.red(fs.readFileSync('./pics-check/use-run-arg.txt', 'utf-8')) // lit le fichier use-run-arg.txt
    console.clear() // Clear affichage
    console.log(useRun) // affichage du fichier
    process.exit(1) // ARG-RUN : Exit
  }
}

// ######################
// ####### GO !!! #######
// ######################

checkLoading() // Lancement du programme !!! 

exports.checkLoading = checkLoading