class HangMan {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    getPuzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle = puzzle += letter
            } else {
                puzzle = puzzle += '*'
            }
        })
    
    
        return puzzle        
    }
    guessStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

        if (this.remainingGuesses === 0) {
            this.status = 'failed'
         } else if (finished) {
             this.status = 'finished'
         } else {
             this.status = 'playing'
         }        
    }
    messages() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}.`
        } else if (this.status === 'finished') {
            return 'Great work! You guessed the word.'
        } else {
            return `Nice try! The word was "${this.word.join('')}".`
        }        
    }
    makeGuess(guess) {
        guess = guess.toLowerCase() 
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
    
        if (this.status !== 'playing') {
            return 
        }
    
        if (isUnique) {
            this.guessedLetters.push(guess)
        }
    
        if (isUnique && isBadGuess ) {
            this.remainingGuesses--
        }
        this.guessStatus()        
    }
}
