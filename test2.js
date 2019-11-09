function Dice(){
    var instance = {}
    instance.value = 0
    instance.active = true
    instance.url   = ""
    return instance
}

var random = function (max){
    return Math.floor( Math.random() * max + 1 ) 
}
var dice1 = new Dice()
var dice2 = new Dice()
var dice3 = new Dice()
var dice4 = new Dice()
var dice5 = new Dice()

var tabDices = [dice1,dice2,dice3,dice4,dice5]

function Player(name){
    instance = {}
    instance.name           = name
    instance.tabDices       = tabDices
    //instance.isPlaying      = false
    instance.numberOfDice   = 5
    instance.currentScore   = 0
    instance.finalScore     = 0
    instance.out            = false
    instance.winner         = ""

    instance.play           = play

    return instance 
}

/* var play = function (){

    for(var i= 0 ; i < tabDices.length; i++){
        this.tabDices[i].value = 3
    }

    var tab =(tabDices[0].value,tabDices[1].value,tabDices[2].value,tabDices[3].value,tabDices[4].value) 
    console.log(tab)
    if(this.numberOfDice === 0){
        this.winner = false
        console.log("end")
    }

    if(this.winner !== "true" || this.winner !=="false"){ // the game start no one wins 
        for(var i=0 ; i < this.numberOfDice ; i++){
            if(tabDices[i].value === 2 || tabDices[i].value === 5){
                this.currentScore = 0
                return this.numberOfDice -= 1
            }
            console.log("no 2 or 5")
            this.finalScore += this.currentScore
            return this.currentScore += Math.sum(tab) 
        }
        
    }
} */
/* if((this.tabDices).indexOf(2) === -1 || (this.tabDices).indexOf(5) === -1){
            for(var i=0 ; i < this.numberOfDice ; i++){
                this.currentScore += tabDices[i].value
            }
            return this.currentScore
        }else {
            this.numberOfDice -= 1
        } 
 */
 var play = function (){
    for (var i = 0 ; i < tabDices.length ; i++){
        this.tabDices[i].value = random(6)
        //link generator 
    }
    console.log("dices player :")
    console.log(tabDices[0].value,tabDices[1].value,tabDices[2].value,tabDices[3].value,tabDices[4].value)

    if(this.winner === true){
        console.log("you win ")
    } else if (this.winner === false) {
        console.log("you lose !! :(")
    }

    if(this.numberOfDice !== 0){ // if there is dices in hand and you don't lost 
        
        console.log('you still have dices',this.numberOfDice)

        //iteration over the dices tab 
        for (var i = 0 ; i < this.numberOfDice ; i++){
        
            if(this.tabDices[i].value === 2 || this.tabDices[i].value === 5){ 
                this.numberOfDice -= 1

                console.log("condition checked ! -1 from dicesTab. The rest on your hand is :",this.numberOfDice) // number of dices in the hand of player
    
                if(this.numberOfDice === 0){ // that mean the player lost the game
                    this.winner = false
                    this.out = true // optional 
                    console.log("this.winner",this.winner)
                    return this.out
                }

                this.out = true
                console.log('you still have dices but Now the second player game this.out', this.out)
                return this.currentScore = 0

            }
                console.log("No 2 dice or 5 dice in your hand and you still in game ",this.out)
                this.out = false
                console.log('this.out',this.out)
                this.currentScore += tabDices[i].value
                //console.log("current scoor ",this.currentScore)
            
        }
        //this.isPlaying = false
        this.finalScore += this.currentScore
        
        console.log("current score",this.currentScore)
        console.log("final score :", this.finalScore)
        this.currentScore = 0 
        return this.finalScore -= this.currentScore
    }
    
}


var player1 = Player("player1")
var player2 = Player("player2")
