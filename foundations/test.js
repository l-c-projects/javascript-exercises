// so basically i have to generate the computer's choice which is a random number between 1 and 3 
//
let user_score = 0
let comp_score = 0

function win() {
    user_score = user_score +1;
    console.log( "You Win! Your score is " + user_score)
}

function lose() {
    comp_score = comp_score +1;
    console.log( "You Lose! Computer score is " + comp_score)
    
}

function tie() {
    console.log( "You Tie! Go again!")
}


while (user_score < 2 && comp_score < 2) {
    let user_choice = prompt("Rock, Paper, Scissors, Go")
    let comp_choice = Math.floor(Math.random() * (3 - 1 + 1)) +1


    if (comp_choice === 1) {
        comp_choice = "rock"
    }

    if (comp_choice === 2) {
        comp_choice = "scissors"
    }

    if (comp_choice === 3) {
        comp_choice = "paper"
    }

    console.log( 'Computer uses ' + comp_choice)

    // this would be better as a dictionary with a key system but i have no clue how to do that in JS

    if (user_choice === "rock") {

        if (comp_choice === "rock"){
            tie()
        }

        if (comp_choice === "scissors"){
            win()
        }

        if (comp_choice === "paper"){
            lose()
        }

    }


        if (user_choice === "scissors") {

        if (comp_choice === "rock"){
            lose()
        }

        if (comp_choice === "scissors"){
            tie()
        }

        if (comp_choice === "paper"){
            win()
        }
        
    }


        if (user_choice === "paper") {

        if (comp_choice === "rock"){
            win()
        }

        if (comp_choice === "scissors"){
            lose()
        }

        if (comp_choice === "paper"){
            tie()
        }
        
    }

    if(user_score ==2) {
        console.log("You won the game!")
    }


    if(comp_score ==2) {
        console.log("You lost the game!")
    }

}