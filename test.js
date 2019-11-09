function Dice(){

    var instance = {}

    instance.value       = 0// function generate random value to dice
    instance.active      = true // if the dice equal 2 or 5 will be false 
    instance.url         =  ""

    return instance
}


var random = function (max){
    return Math.floor( Math.random() * max + 1 ) 
}

     
    var dice1 = Dice()
    var dice2 = Dice()
    var dice3 = Dice()
    var dice4 = Dice()
    var dice5 = Dice()

    var tab =  [dice1,dice2,dice3,dice4,dice5]



function Player(name){
    instance = {}

    instance.name               = name
    instance.activeDices        = 5
    //instance.status           = true
    instance.currentScore       = 0
    instance.win                = true

    instance.play               = play // methode

  
    return instance
}
var play = function(){

    for(var i = 0 ; i< tab.length ; i++){
        n = random(6)
        tab[i].value = n
        //console.log(tab[i].value)
        tab[i].url = '<img src="/images/dice-'+ n +'.png" id= "img-'+n+'" alt="" width="100px" style="border: solid black 1px">'

        if(tab[i].value !== 2 || tab[i].value !== 5 ){
            console.log("enter")
            this.activeDices = this.activeDices - 1 
            this.currentScore += tab[i].value
        }
    }
    if(this.currentScore === 0) {
        this.win = false
    }
    console.log(tab)
    console.log(this.currentScore)
    console.log(this.activeDices)
    console.log(this.win)

}
/* var play = function(){
    var sum = 0

    for(var i = 0; i < this.dices.length; i++){
        if(this.dices[i].active){
            //console.log(this.dices)
            sum += this.dices[i].value
        }
    }

    for(var i = 0 ; i < this.dices.length ; i++){
        if(this.dices[i].active === false){
            this.activeDices -= 1
        }
    }
 
    this.currentScore += sum
    this.status = false
    console.log(this.dices)
    //this.dices = newRandom()


    console.log("new !", this.dices) // regenerta the same nb and the value of dices
    console.log("score added ! and status changed",+ this.currentScore)
} */

var player1 = Player("player1",1)
var player2 = Player("player2",2)



//randomTableDice()