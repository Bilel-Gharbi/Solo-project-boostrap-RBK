//class player 

//classe dice 

//random number 

function Dice(){

    var instance = {}

    instance.value       = random(6) // function generate random value to dice
    instance.active      = true // if the dice equal 2 or 5 will be false 
    instance.display     = displayDice // function to display random dice
    instance.check       = mustHide // to check the value of dice 

    return instance
}


var random = function (max){
    return Math.floor( Math.random() * max + 1 ) 
}

var displayDice = function (){
    return $('#img-'+(i+1)).attr('src','/images/dice-'+ this.value + '.png')
}

var mustHide = function(){
    if(this.value === 2 || this.value === 5){
        return this.active = false
    }
}

function newRandom(){ // add paramter  nb of dice to gnerate 
    var dice1 = Dice()
    var dice2 = Dice()
    var dice3 = Dice()
    var dice4 = Dice()
    var dice5 = Dice()

    return [dice1,dice2,dice3,dice4,dice5]
}

var dice1 = Dice()
var dice2 = Dice()
var dice3 = Dice()
var dice4 = Dice()
var dice5 = Dice()

var randomDices = [dice1,dice2,dice3,dice4,dice5]

for(var i = 0 ; i < 5 ; i++){
    //console.log(i)
    randomDices[i].display()
    randomDices[i].check()
}

/*  var randomDicesDisplay = function(){
     
    for(var i = 0 ; i < 5 ; i++){
        randomDices[i].display()
    }
}  

/* $('.dicesImg').click(randomDicesDisplay()) */


function Player(name,rank){
    instance = {}

    instance.name               = name
    instance.rank               = rank 
    instance.activeDices        = 5
    instance.status             = true

    instance.play               = play
    instance.dices              = randomDices // array of dice generate random 
    instance.currentScore       = 0
    //instance.finalScore       = 0
   //    player.nbGame          = nbGame

    return instance
}

var play = function(){
    var sum = 0

    for(var i = 0; i < this.dices.length; i++){
        if(this.dices[i].active){
            //console.log(this.dices)
            sum += this.dices[i].value
        }
    }

    for(var i = 0 ; i < this.dices.length ; i++){
        if(this.dices[i].active === false){
            this.dices.splice(i,1)
        }
    }
 
    this.currentScore += sum
    this.status = false
    console.log(this.dices)
    this.dices = newRandom()
    console.log("new !", this.dices)
    console.log("score added ! and status changed",+ this.currentScore)
}

var player1 = Player("player1",1)
var player2 = Player("player2",2)



console.log(randomDices)