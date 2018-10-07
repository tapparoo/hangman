'use strict'

let game;
const puzzle = document.querySelector('#word');
const msgs = document.querySelector('#messages');
const input = document.querySelector('#input');

class Hangman {
    constructor(word, remainingGuesses = 10) {
        this.guesses = [];
        this.word = word.toUpperCase().split('');
        this.remainingGuesses = remainingGuesses;
        // Ignore spaces
        this.revealed = this.word.map(char => char === ' ' ? ' ' : '*');
        this.gameRunning = true;
        this.updateGameStatus();
    }
    updateGameStatus() {
        document.querySelector('#remaining_guesses').textContent = this.remainingGuesses;
        document.querySelector('#lettersGuessed').textContent = this.guesses.sort();
        puzzle.textContent = `${this.revealed.join('')}`;
    }
    checkGuess(g) { 
        // Clear messages
        msgs.textContent = '';
    
        const re = /[a-zA-Z]/g;
        let guess;
        
        // Check input against regex
        if (!g.match(re)) {
            msgs.textContent =`${g} is an incorrect input value, try again!`;
            return;
        }else {
            guess = g.toUpperCase();
        }
        
        // Already guessed?  Notify user & return
        if (this.guesses.findIndex(char => char === guess) > -1) {
            msgs.textContent = `${g} was already guessed, try again!`;
            return;
        }
        // Correct guess? Push to guesses[] & remove * from appropriate position(s) in puzzle
        else if (this.word.findIndex(char => char === guess) > -1) {
            this.guesses.push(guess);
            for (let i = 0; i < this.word.length; i++) {
                if (this.word[i] === guess){
                    this.revealed[i] = guess;
                }
            }
            // If no more asterisks, user wins & game is over
            if (this.revealed.findIndex(char => char === '*') < 0) {
                msgs.textContent = `Congrats, you win!  The word was ${this.word.join('')}`;
                this.gameRunning = false;
            }
        }
        // Incorrect guess.  Push to guesses[], subtract 1 from remainingGuesses, end game if remainingGuesses === 0
        else {
            this.guesses.push(guess);
            this.remainingGuesses--;
            if (this.remainingGuesses === 0) {
                msgs.textContent = `You lose!  The word was: ${this.word.join('')}`;
                this.gameRunning = false;
            }
        }
    }
}

// Called by input keyup event listener below
<<<<<<< HEAD
function makeGuess(e){
    if(game.gameRunning && e.target.id != 'userWord'){
=======
function makeGuess(e) {
    if(game.gameRunning){
>>>>>>> c6ff3a0ce57e466a9498cb846d96f8e53360c633
        const guess = String.fromCharCode(e.charCode);
        game.checkGuess(guess);
        game.updateGameStatus();
    }
}

// Called by button click event listener below
<<<<<<< HEAD
function newGame(){
    const userWord = document.querySelector('#userWord');
    if (userWord.value === ''){
=======
function newGame() {
    let userWord = document.querySelector('#userWord');
    if (userWord.value === '') {
>>>>>>> c6ff3a0ce57e466a9498cb846d96f8e53360c633
        game = new Hangman(getWord());
    }else game = new Hangman(userWord.value);
    userWord.value = '';
    
    msgs.textContent = '';
}

// New game on button click
document.querySelector('#new').addEventListener('click', newGame)

// Update game values per key press
window.addEventListener('keypress', makeGuess)

// Random word generator
const getWord = function () {
    const words = ['abruptly', 'absurd', 'abyss', 'affix', 'askew', 'avenue', 'awkward', 'axiom', 'azure', 'bagpipes', 'bandwagon'
, 'banjo', 'bayou', 'beekeeper', 'bikini', 'blitz', 'blizzard', 'boggle', 'bookworm', 'boxcar', 'boxful'
, 'buckaroo', 'buffalo', 'buffoon', 'buxom', 'buzzard', 'buzzing', 'buzzwords', 'caliph', 'cobweb', 'cockiness'
, 'croquet', 'crypt', 'curacao', 'cycle', 'daiquiri', 'dirndl', 'disavow', 'dizzying', 'duplex', 'dwarves'
, 'embezzle', 'equip', 'espionage', 'euouae', 'exodus', 'faking', 'fishhook', 'fixable', 'fjord', 'flapjack'
, 'flopping', 'fluffiness', 'flyby', 'foxglove', 'frazzled', 'frizzled', 'fuchsia', 'funny', 'gabby', 'galaxy'
, 'galvanize', 'gazebo', 'giaour', 'gizmo', 'glowworm', 'glyph', 'gnarly', 'gnostic', 'gossip', 'grogginess'
, 'haiku', 'haphazard', 'hyphen', 'iatrogenic', 'icebox', 'injury', 'ivory', 'ivy', 'jackpot', 'jaundice'
, 'jawbreaker', 'jaywalk', 'jazziest', 'jazzy', 'jelly', 'jigsaw', 'jinx', 'jiujitsu', 'jockey', 'jogging'
, 'joking', 'jovial', 'joyful', 'juicy', 'jukebox', 'jumbo', 'kayak', 'kazoo', 'keyhole', 'khaki'
, 'kilobyte', 'kiosk', 'kitsch', 'kiwifruit', 'klutz', 'knapsack', 'larynx', 'lengths', 'lucky', 'luxury'
, 'lymph', 'marquis', 'matrix', 'megahertz', 'microwave', 'mnemonic', 'mystify', 'naphtha', 'nightclub', 'nowadays'
, 'numbskull', 'nymph', 'onyx', 'ovary', 'oxidize', 'oxygen', 'pajama', 'peekaboo', 'phlegm', 'pixel'
, 'pizazz', 'pneumonia', 'polka', 'pshaw', 'psyche', 'puppy', 'puzzling', 'quartz', 'queue', 'quips'
, 'quixotic', 'quiz', 'quizzes', 'quorum', 'razzmatazz', 'rhubarb', 'rhythm', 'rickshaw', 'schnapps', 'scratch'
, 'shiv', 'snazzy', 'sphinx', 'spritz', 'squawk', 'staff', 'strength', 'strengths', 'stretch', 'stronghold'
, 'stymied', 'subway', 'swivel', 'syndrome', 'thriftless', 'thumbscrew', 'topaz', 'transcript', 'transgress', 'transplant'
, 'triphthong', 'twelfth', 'twelfths', 'unknown', 'unworthy', 'unzip', 'uptown', 'vaporize', 'vixen', 'vodka'
, 'voodoo', 'vortex', 'voyeurism', 'walkway', 'waltz', 'wave', 'wavy', 'waxy', 'wellspring', 'wheezy'
, 'whiskey', 'whizzing', 'whomever', 'wimpy', 'witchcraft', 'wizard', 'woozy', 'wristwatch', 'wyvern', 'xylophone'
, 'yachtsman', 'yippee', 'yoked', 'youthful', 'yummy', 'zephyr', 'zigzag', 'zigzagging', 'zilch', 'zipper'
, 'zodiac', 'zombie'];
    const rand = Math.floor(Math.random() * (words.length + 1));
    return words[rand];
}

// Initial start
game = new Hangman(getWord());

